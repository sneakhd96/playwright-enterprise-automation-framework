export class FinancialHelper {
  calculateDebitEndingBalance(startingBalance: number, transactionAmount: number): number {
    return Number((startingBalance - transactionAmount).toFixed(2));
  }

  calculateCreditCardRemainingBalance(statementBalance: number, paymentAmount: number): number {
    return Number((statementBalance - paymentAmount).toFixed(2));
  }

  calculateProcessingFee(transactionAmount: number, feePercentage: number, fixedFee: number): number {
    return Number(((transactionAmount * feePercentage) + fixedFee).toFixed(2));
  }

  validateCurrency(actualCurrency: string, expectedCurrency: string): boolean {
    return actualCurrency === expectedCurrency;
  }
}