import { Payment } from './Payment.js';

export class PayPalPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing PayPal payment of £${amount.toFixed(2)}`);
  }
}