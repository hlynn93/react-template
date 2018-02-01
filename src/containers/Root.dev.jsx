import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import DevTools from './DevTools'   // Redux DevTools, you can use this for better redux trouble shooting experience
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <Route path="/:login"
             component={UserPage} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
