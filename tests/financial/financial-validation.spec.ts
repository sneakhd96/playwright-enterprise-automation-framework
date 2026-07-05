import { test, expect } from '@playwright/test';
import { financialTestData } from '../../helpers/testData';
import { FinancialHelper } from '../../helpers/financialHelper';

test.describe('Financial Data Validation Tests', () => {
  const financialHelper = new FinancialHelper();

  test('should calculate checking account ending balance after debit transaction', async () => {
    const data = financialTestData.checkingAccount;

    const actualEndingBalance = financialHelper.calculateDebitEndingBalance(
      data.startingBalance,
      data.transactionAmount
    );

    expect(actualEndingBalance).toBe(data.expectedEndingBalance);
    expect(financialHelper.validateCurrency(data.currency, 'USD')).toBeTruthy();
  });

  test('should calculate remaining credit card balance after payment', async () => {
    const data = financialTestData.creditCardPayment;

    const actualRemainingBalance = financialHelper.calculateCreditCardRemainingBalance(
      data.statementBalance,
      data.paymentAmount
    );

    expect(actualRemainingBalance).toBe(data.expectedRemainingBalance);
  });

  test('should calculate processing fee correctly', async () => {
    const data = financialTestData.feeCalculation;

    const actualFee = financialHelper.calculateProcessingFee(
      data.transactionAmount,
      data.feePercentage,
      data.fixedFee
    );

    expect(actualFee).toBe(data.expectedFee);
  });
});