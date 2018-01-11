/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser, loadStarred, sendForm } from '../actions/github'
import User from '../components/common/User'
import Repo from '../components/common/Repo'
import List from '../components/common/List'
import zip from 'lodash/zip'

const loadData = ({ login, loadUser, loadStarred, sendForm }) => { // eslint-disable-line no-unused-vars
  loadUser(login, [ 'name' ])
  loadStarred(login)

  // Comment out loadUser & loadStarred and uncomment the line below to test POST request
  // sendForm(login, "123123") // (username, password)
}

class UserPage extends Component {
  static propTypes = {
    login: PropTypes.string.isRequired,
    user: PropTypes.object,
    starredPagination: PropTypes.object,
    starredRepos: PropTypes.array.isRequired,
    starredRepoOwners: PropTypes.array.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadStarred: PropTypes.func.isRequired,
    sendForm: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      loadData(nextProps)
    }
  }

  renderRepo([ repo, owner ]) {
    return (
      <Repo
        repo={repo}
        owner={owner}
        key={repo.fullName} />
    )
  }

  render() {
    const { user, login } = this.props
    if (!user) {
      return <h1><i>Loading {login}{"'s profile..."}</i></h1>
    }

    const { starredRepos, starredRepoOwners, starredPagination } = this.props
    return (
      <div>
        <User user={user} />
        <hr />
        <List renderItem={this.renderRepo}
              items={zip(starredRepos, starredRepoOwners)}
              loadingLabel={`Loading ${login}'s starred...`}
              {...starredPagination} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = ownProps.match.params.login.toLowerCase()

  const {
    pagination: { starredByUser },
    entities: { users, repos }
  } = state

  const starredPagination = starredByUser[login] || { ids: [] }
  const starredRepos = starredPagination.ids.map(id => repos[id])
  const starredRepoOwners = starredRepos.map(repo => users[repo.owner])

  return {
    login,
    starredRepos,
    starredRepoOwners,
    starredPagination,
    user: users[login]
  }
}

export default withRouter(connect(mapStateToProps, {
  loadUser,
  loadStarred,
  sendForm
})(UserPage))
