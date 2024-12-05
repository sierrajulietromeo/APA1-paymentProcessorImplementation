import { Payment } from './Payment.js';

export class BankTransferPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing bank transfer of £${amount.toFixed(2)}`);
  }
}