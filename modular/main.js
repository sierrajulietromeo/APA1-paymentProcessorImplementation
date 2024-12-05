import { PaymentProcessor } from './PaymentProcessor.js';
import { CreditCardPayment } from './CreditCardPayment.js';
import { PayPalPayment } from './PayPalPayment.js';
import { BankTransferPayment } from './BankTransferPayment.js';

const processor = new PaymentProcessor();

const creditCard = new CreditCardPayment();
const payPal = new PayPalPayment();
const bankTransfer = new BankTransferPayment();

processor.executePayment(creditCard, 100.00);
processor.executePayment(payPal, 75.50);
processor.executePayment(bankTransfer, 200.00);