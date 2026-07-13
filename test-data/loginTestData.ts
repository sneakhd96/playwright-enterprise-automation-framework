export const loginTestData = {
  validUser: {
    username: 'practice',
    password: 'SuperSecretPassword!',
  },

  invalidUsernameUser: {
    username: 'wrongUser',
    password: 'SuperSecretPassword!',
    expectedError: 'Your username is invalid!',
  },

  invalidPasswordUser: {
    username: 'practice',
    password: 'WrongPassword',
    expectedError: 'Your password is invalid!',
  },
};