// The Factory Pattern is a creational design pattern.
// Instead of creating objects directly with new, you use a factory method
// (or class) to create objects for you, often hiding the creation logic and making it easier to manage different object types.
const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
// Factory Method
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function Designer(name) {
  this.name = name;
  this.type = "Designer";
}
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  let employees = [];
  this.create = function (name, type) {
    switch (type) {
      case 1:
        const developer = new Developer(name);
        employees.push(developer);
        break;
      case 2:
        const designer = new Designer(name);
        employees.push(designer);
        break;
      case 3:
        const tester = new Tester(name);
        employees.push(tester);
        break;
      default:
        throw new Error("Invalid employee type");
    }
  };
  function _seeEmployee() {
    console.log(
      green + this.name + reset + " is a " + green + this.type + reset
    );
  }
  this.viewEmployee = function () {
    employees.forEach((employee) => _seeEmployee.call(employee));
  };
  this.removeEmploye = (name) => {
    let len = employees.length;
    employees = employees.filter((employee) => {
      if (employee.name === name) {
        console.log(
          `The employee with name ${red}${employee.name}${reset} with type ${employee.type} is removed`
        );
        return false;
      }
      return true;
    });
    if (employees.length === len) {
      console.log(
        "\x1b[31m" + "There is no employee with name " + name + "\x1b[0m"
      );
    }
  };
}

const employeeFactory = new EmployeeFactory();
// const employees = [];
// function seeEmployee() {
//   console.log(this.name + " is a " + this.type);
// }
// const developer = employeeFactory.create("Hassan", 1);
// const designer = employeeFactory.create("Abbas", 2);
// const tester = employeeFactory.create("Montaser", 3);

// employees.push(developer, designer, tester);

// employees.forEach((employee) => seeEmployee.call(employee));
employeeFactory.create("Hassan", 1);
employeeFactory.create("Abbas", 2);
employeeFactory.create("Montaser", 3);
employeeFactory.viewEmployee();
employeeFactory.removeEmploye("Hassan");
employeeFactory.viewEmployee();

console.log("====================================================");

class DeveloperClass {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }
}
class DesignerClass {
  constructor(name) {
    this.name = name;
    this.type = "Designer";
  }
}
class TesterClass {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}

class EmployeeClassFactory {
  constructor() {
    this._employees = [];
  }
  create(name, type) {
    switch (type) {
      case 1:
        const developer = new DeveloperClass(name);
        this._employees.push(developer);
        break;
      case 2:
        const designer = new DesignerClass(name);
        this._employees.push(designer);
        break;
      case 3:
        const tester = new TesterClass(name);
        this._employees.push(tester);
        break;
      default:
        throw new Error("Invalid employee type");
    }
  }

  _view() {
    console.log(
      green + this.name + reset + " is a " + green + this.type + reset
    );
  }

  viewEmployee() {
    this._employees.forEach((employee) => this._view.call(employee));
  }
}

const employeeClassFactory = new EmployeeClassFactory();
employeeClassFactory.create("Hassan", 1);
employeeClassFactory.create("Abbas", 2);
employeeClassFactory.create("Montaser", 3);
employeeClassFactory.viewEmployee();

console.log("====================================================");

// Products
class Sedan {
  drive() {
    console.log("Driving a sedan 🚗");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck 🚚");
  }
}

// Factory
class CarFactory {
  static createCar(type) {
    if (type === "sedan") {
      return new Sedan();
    }
    if (type === "truck") {
      return new Truck();
    }
    throw new Error("Unknown car type");
  }
}

// Usage
const car1 = CarFactory.createCar("sedan");
const car2 = CarFactory.createCar("truck");

car1.drive(); // Driving a sedan 🚗
car2.drive(); // Driving a truck 🚚
