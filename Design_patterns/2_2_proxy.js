// The Proxy Pattern is a structural design pattern.
// A proxy acts as a stand-in (or placeholder) for another object (the “real subject”).
// It controls access to the real object — often adding extra behavior before or after delegating to it.

// Think of it like a secretary: instead of talking to the CEO directly, you talk to the secretary (proxy), who decides whether to pass on the message or handle it.

// 📝 Types of Proxies

// Virtual Proxy → delay creation of expensive objects until needed.

// Protection Proxy → control access (like permissions/auth).

// Logging/Monitoring Proxy → log or monitor usage.

// Caching Proxy → cache results to improve performance.

// ⚡ Where is it used?

// Access control (auth, permissions).

// Lazy loading (virtual proxies).

// Logging, monitoring, debugging.

// API request caching.

// Validation in JS objects (using ES6 Proxy).

class BankAccount {
  constructor(name, balance, role) {
    this.name = name;
    this.balance = balance;
    this.role = role;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class AccountProxy {
  constructor(account) {}

  withdraw(account, amount) {
    if (account.role === "admin") {
      if (account.balance >= amount) {
        account.withdraw(amount);
        console.log(`${account.name} Withdrew ${amount}`);
      } else {
        console.log("You don't have enough balance.");
      }
    } else {
      console.log("You don't have permission to withdraw money.");
    }
  }
}
const proxy = new AccountProxy();
const admin = new BankAccount("Ahmed", 1000, "admin");
proxy.withdraw(admin, 1000);
proxy.withdraw(admin, 10000);
const user = new BankAccount("Hassan", 1000, "user");
proxy.withdraw(user, 100);
