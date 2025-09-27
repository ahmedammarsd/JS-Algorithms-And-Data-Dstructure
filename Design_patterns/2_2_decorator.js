// The Decorator Pattern is a structural design pattern.
// It lets you add new functionality to an object dynamically without changing its original class or function.
// Think of it like adding stickers or upgrades to your laptop — the laptop stays the same, but now it has extra features.

// ⚡ Where is it used?

// JavaScript wrappers (e.g., middleware in Express, Redux enhancers).

// Logging, caching, authentication wrappers around functions.

// React higher-order components (HOCs) → decorators for UI components.

// Class decorators in TypeScript (@decorator syntax).

function Logger(fn) {
  console.log(fn.name);
  return function (...argss) {
    console.log(argss);
    const result = fn(...argss);
    console.log(`Result: ${result}`);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const loggedAdd = Logger(add);

loggedAdd(2, 3, 5);

console.log("==========================================");
//==========================================

class Dirnk {
  getCost() {
    return 0;
  }

  getDescription() {
    return "";
  }
}

class MainDrink extends Dirnk {
  getCost() {
    return 1.99;
  }
  getDescription() {
    return "Milk";
  }
}

class DrinkDecorator extends Dirnk {
  #drink;
  constructor(drink) {
    super();
    this.#drink = drink;
  }
  getCost() {
    return this.#drink.getCost();
  }
  getDescription() {
    return this.#drink.getDescription();
  }
}

class Banana extends DrinkDecorator {
  constructor(drink) {
    super(drink);
  }
  getCost() {
    return super.getCost() + 5;
  }
  getDescription() {
    return super.getDescription() + " + Banana";
  }
}
class Chocolate extends DrinkDecorator {
  constructor(drink) {
    super(drink);
  }
  getCost() {
    return super.getCost() + 5;
  }
  getDescription() {
    return super.getDescription() + " + Chocolate";
  }
}

const myDrink = new Chocolate(new Banana(new MainDrink()));
console.log(myDrink.getCost());
console.log(myDrink.getDescription());
