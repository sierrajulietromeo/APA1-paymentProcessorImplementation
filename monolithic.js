// PaymentProcessor.js
class PaymentProcessor {
    processCreditCardPayment(amount) {
        console.log(`Processing credit card payment of £${amount.toFixed(2)}`);
        // Logic for processing credit card payment
    }
    processPayPalPayment(amount) {
        console.log(`Processing PayPal payment of £${amount.toFixed(2)}`);
        // Logic for processing PayPal payment
    }
    processBankTransferPayment(amount) {
        console.log(`Processing bank transfer of £${amount.toFixed(2)}`);
        // Logic for processing bank transfer
    }
}
// Main execution
const processor = new PaymentProcessor();
processor.processCreditCardPayment(100.00);
processor.processPayPalPayment(75.50);
processor.processBankTransferPayment(200.00);