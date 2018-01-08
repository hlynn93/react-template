import { resetErrorMessage,
   RESET_ERROR_MESSAGE } from './helpers';

describe('actions', () => {
  it('should reset the error message', () => {
    const expectedAction = {
      type: RESET_ERROR_MESSAGE,
    }
    expect(resetErrorMessage()).toEqual(expectedAction)
  })
})
