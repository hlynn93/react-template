import merge from 'lodash/merge'

// Updates an entity cache in response to any action with response.entities.
export default (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
