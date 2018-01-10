import * as ActionTypes from '../constants/actionTypes'

// Updates error message to notify about the failed fetches.
export default (state = null, action) => {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }

    return state
}
