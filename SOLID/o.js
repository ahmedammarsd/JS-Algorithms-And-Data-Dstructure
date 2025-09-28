// O — Open/Closed Principle (OCP)
// 1. Definition

// “Software entities (classes, modules, functions) should be open for extension, but closed for modification.”

// 👉 Meaning: You should be able to add new behavior without changing existing code.
// Instead of editing existing classes, extend them or plug in new strategies.

// 2. Why
// Prevents breaking working code when adding features.
// Encourages polymorphism, interfaces, composition.
// Makes systems more scalable and flexible.

// paymentService.js
// ❌ Modifies class every time we add a new payment method
class PaymentServiceWrong {
  processPayment(type, amount) {
    if (type === "credit") {
      console.log(`Processing credit card: $${amount}`);
    } else if (type === "paypal") {
      console.log(`Processing PayPal: $${amount}`);
    } else {
      throw new Error("Unsupported payment type");
    }
  }
}

//const service = new PaymentService();
//service.processPayment("paypal", 100);

// Abstract class
class pay {
  constructor() {
    if (this.constructor === pay) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  pay(amount) {
    throw new Error("You Need to override this method");
  }
}

class Paypal extends pay {
  constructor() {
    super();
  }
  pay(amount) {
    console.log(`Paypal payment: $${amount}`);
  }
}

class Credit extends pay {
  constructor() {
    super();
  }
  pay(amount) {
    console.log("Credit payment: $", amount);
  }
}

// paymentService.js
// By pass the payment type in the constructor
// class PaymentService {
//   constructor(strategy) {
//     this.strategy = strategy;
//   }

//   process(amount) {
//     this.strategy.pay(amount);
//   }
// }

// paymentService.js 2
// By pass the payment type in the function
class PaymentService {
  processPayment(typePayment, amount) {
    typePayment.pay(amount);
  }
}

const service = new PaymentService();
service.processPayment(new Paypal(), 100);
service.processPayment(new Credit(), 100);

// Wrap-Up: (OCP)
// Definition: Open for extension, closed for modification.
// Why: Add new features safely without breaking old code.
// How: Use strategies, composition, polymorphism.
