// I — Interface Segregation Principle (ISP)
// 1. Definition

// Clients should not be forced to depend on methods they do not use.

// 👉 Instead of one fat interface, split it into smaller, more specific ones.
// This keeps classes/components lightweight and focused.

// 2. Why
// Prevents bloat in classes/components.
// Improves flexibility and testability.
// Promotes composition over inheritance.

// bad-printer.js
class Machine {
  print(doc) {}
  scan(doc) {}
  fax(doc) {}
}

class OldPrinter extends Machine {
  print(doc) {
    console.log("Printing:", doc);
  }
  scan(doc) {
    throw new Error("Scan not supported!");
  }
  fax(doc) {
    throw new Error("Fax not supported!");
  }
}

//const printer = new OldPrinter();
//printer.scan("file.pdf"); // ❌ breaks contract

class Printer {
  print(doc) {
    console.log("Printing: ", doc);
  }
}

class Scanner {
  scan(doc) {
    console.log("Scanning: ", doc);
  }
}

class Fax {
  fax(doc) {
    console.log("Faxing: ", doc);
  }
}

class SimplePrinter extends Printer {
  print(doc) {
    console.log("Printing:", doc);
  }
}
const printer = new SimplePrinter();
printer.print("file.pdf");

class ModernPrinter {
  constructor() {
    this.printer = new SimplePrinter();
    this.scanner = new Scanner();
    this.faxer = new Fax();
  }

  print(doc) {
    this.printer.print(doc);
  }
  scan(doc) {
    this.scanner.scan(doc);
  }
  fax(doc) {
    this.faxer.fax(doc);
  }
}

const modernPrinter = new ModernPrinter();
modernPrinter.print("file.pdf");
modernPrinter.scan("file.pdf");
modernPrinter.fax("file.pdf");
