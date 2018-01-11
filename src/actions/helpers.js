/**
 * This file contains all the secondary utility actions
 */

import { RESET_ERROR_MESSAGE } from '../constants/actionTypes'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})
