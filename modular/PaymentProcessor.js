export class PaymentProcessor {
    executePayment(paymentMethod, amount) {
      paymentMethod.processPayment(amount);
    }
  }