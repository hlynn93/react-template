import { CALL_API } from '../middleware/api'
import { Schemas } from '../schemas'
import * as ActionTypes from '../constants/actionTypes'
import * as GitHubAPI from '../apis/github'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = login => ({
  [CALL_API]: {
    types: [ ActionTypes.USER_REQUEST, ActionTypes.USER_SUCCESS, ActionTypes.USER_FAILURE ],
    endpoint: GitHubAPI.fetchUser(login),
    schema: Schemas.USER
  }
})

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {

  // Check if a user is already cached and do nothing if true
  const user = getState().entities.users[login]
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
    return null
  }

  return dispatch(fetchUser(login))
}

// Fetches a single repository from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchRepo = fullName => ({
  [CALL_API]: {
    types: [ ActionTypes.REPO_REQUEST, ActionTypes.REPO_SUCCESS, ActionTypes.REPO_FAILURE ],
    endpoint: GitHubAPI.fetchRepo(fullName),
    schema: Schemas.REPO
  }
})

// Fetches a single repository from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadRepo = (fullName, requiredFields = []) => (dispatch, getState) => {
  const repo = getState().entities.repos[fullName]
  if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) {
    return null
  }

  return dispatch(fetchRepo(fullName))
}

// Fetches a page of starred repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchStarred = (login) => ({
  login,
  [CALL_API]: {
    types: [ ActionTypes.STARRED_REQUEST, ActionTypes.STARRED_SUCCESS, ActionTypes.STARRED_FAILURE ],
    endpoint: GitHubAPI.fetchStarred(login),
    schema: Schemas.REPO_ARRAY
  }
})

// Fetches a page of starred repos by a particular user.
// Bails out if page is cached.
// Relies on Redux Thunk middleware.
export const loadStarred = (login) => (dispatch) => {
  return dispatch(fetchStarred(login))
}

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchStargazers = (fullName) => ({
  fullName,
  [CALL_API]: {
    types: [ ActionTypes.STARGAZERS_REQUEST, ActionTypes.STARGAZERS_SUCCESS, ActionTypes.STARGAZERS_FAILURE ],
    endpoint: GitHubAPI.fetchStargazers(fullName),
    schema: Schemas.USER_ARRAY
  }
})

// Fetches a page of stargazers for a particular repo.
// Bails out if page is cached
// Relies on Redux Thunk middleware.
export const loadStargazers = (fullName) => (dispatch) => {
  return dispatch(fetchStargazers(fullName))
}
