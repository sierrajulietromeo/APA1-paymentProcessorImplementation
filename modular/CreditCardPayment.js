import { Payment } from './Payment.js';

export class CreditCardPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing credit card payment of £${amount.toFixed(2)}`);
  }
}