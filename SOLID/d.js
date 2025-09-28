// D — Dependency Inversion Principle (DIP)
// 1. Definition

// High-level modules should not depend on low-level modules. Both should depend on abstractions.
// 👉 Instead of tightly coupling classes to implementations, depend on interfaces or abstractions.
// This allows you to swap implementations without breaking higher-level code.

// 2. Why
// Decouples layers of your system.
// Makes it easy to swap databases, APIs, UI themes, etc.
// Improves testability (you can inject mocks).

//Example (Bad DIP Violation)
// userService.js
class MySQLDatabaseWrong {
  save(user) {
    console.log("Saving user to MySQL:", user.name);
  }
}
class UserServiceWrong {
  constructor() {
    this.db = new MySQLDatabaseWrong(); // ❌ direct dependency
  }
  register(user) {
    this.db.save(user);
  }
}

//const service = new UserService();
//service.register({ name: "Alice" });

// ⚠️ Problem: UserService is tied to MySQL.
// If we want MongoDB → we must edit UserService.

// Abstract classes
class Database {
  save(user) {
    throw new Error("This method must be overridden!");
  }
}

// implementations
class MySQLDatabase extends Database {
  save(user) {
    console.log("Saving user to MySQL:", user.name);
  }
}
class MongoDatabase extends Database {
  save(user) {
    console.log("Saving user to MongoDB:", user.name);
  }
}

// high-level module
class UserService {
  constructor(database) {
    this.db = database; // ✅ depends on abstraction
  }
  register(user) {
    this.db.save(user);
  }
}

const service = new UserService(new MySQLDatabase());
const mongoService = new UserService(new MongoDatabase());
service.register({ name: "Alice" });
mongoService.register({ name: "Alice" });

// Wrap-Up: Day 5 (DIP)
// Definition: High-level modules shouldn’t depend on low-level details. Both depend on abstractions.
// Why: Improves flexibility, testability, and maintainability.
