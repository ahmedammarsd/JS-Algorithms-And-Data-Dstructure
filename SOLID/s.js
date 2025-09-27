// S — Single Responsibility Principle (SRP)
// 1. Definition
// A class, function, or module should have only one reason to change.
// 👉 In other words, do one thing, and do it well.

// 2. Why
// Keeps code easier to read, test, and maintain.
// Reduces bugs when requirements change.
// Makes code reusable in other contexts.
// If one component is responsible for multiple concerns
//  (e.g., business logic + database + UI), a change in one area risks breaking another.

// ✅ Benefits:
// Each class has one job.
// Swap database or email service without touching UserService.
// Easy to unit test each part.

// 5. Where & How to Use SRP
// Where: Functions, classes, modules, microservices.

// How:
// Ask: “Does this component have more than one reason to change?”
// Split responsibilities into separate units if yes.
// Compose them together.

// 6. Checklist
// One responsibility = one axis of change.
// Smaller, reusable components.
// Easier debugging & testing.

class User {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

class UserService {
  constructor(userRepo, emailService) {
    this.userRepo = userRepo;
    this.emailService = emailService;
  }

  saveUser(user) {
    this.userRepo.save(user);
    this.emailService.sendWecomeEmail(user);
  }
}

class UserRepo {
  save(user) {
    console.log(`Save User ${user.name} in DB`);
  }
}

class EmailService {
  sendWecomeEmail(user) {
    console.log(`Send Welcome Email to ${user.name}`);
  }
}

const userRepo = new UserRepo();
const emailService = new EmailService();
const userService = new UserService(userRepo, emailService);
const user = new User("Ahmed", "Developer");
userService.saveUser(user);

function processOrder(order) {
  console.log("Validating order...");
  console.log("Charging credit card...");
  console.log("Sending confirmation email...");
}

class Order {
  constructor(orderName, amount) {
    this.orderName = orderName;
    this.amount = amount;
  }
}
// Interface class for order services
class OrderServiceInterface {
  constructor() {
    if (this.constructor === OrderServiceInterface) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  execute(order) {
    throw new Error("This method must be overridden!");
  }
}

class OrderSevice {
  constructor(checkOrder, paymentService, emailService) {
    this.checkOrder = checkOrder;
    this.paymentService = paymentService;
    this.emailService = emailService;
  }
  processOfOrder(order) {
    this.checkOrder.execute(order);
    this.paymentService.execute(order);
    this.emailService.execute(order);
  }
}

class CheckOrder extends OrderServiceInterface {
  execute(order) {
    console.log("Validating order...", order);
  }
}

class PaymentService extends OrderServiceInterface {
  execute(order) {
    console.log("Charging credit card...", order);
  }
}

class OrderEmailService extends OrderServiceInterface {
  execute(order) {
    console.log("Sending confirmation email...", order);
  }
}
console.log("=====================");
const order = new Order("Shoes", 100);
const checkOrder = new CheckOrder();
const paymentService = new PaymentService();
const orderEmailService = new OrderEmailService();
const orderService = new OrderSevice(
  checkOrder,
  paymentService,
  orderEmailService
);
orderService.processOfOrder(order);
