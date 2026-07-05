export const testUsers = {
  defaultUser: {
    firstName: 'Dami',
    lastName: 'TestUser',
    password: 'TestPassword123!',
  },
};

export const emailSubjects = {
  verification: 'Verify your email',
  passwordReset: 'Reset your password',
  otp: 'Your login code',
};

export const financialTestData = {
  checkingAccount: {
    startingBalance: 1500.00,
    transactionAmount: 125.75,
    expectedEndingBalance: 1374.25,
    currency: 'USD',
    transactionType: 'DEBIT',
    merchantName: 'Automation Test Merchant',
  },

  creditCardPayment: {
    statementBalance: 850.00,
    paymentAmount: 250.00,
    expectedRemainingBalance: 600.00,
    currency: 'USD',
    transactionType: 'PAYMENT',
  },

  feeCalculation: {
    transactionAmount: 200.00,
    feePercentage: 0.029,
    fixedFee: 0.30,
    expectedFee: 6.10,
    currency: 'USD',
  },
};