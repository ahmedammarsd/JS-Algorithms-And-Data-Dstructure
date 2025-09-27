// Perfect — let’s dig into the Template Method Pattern 📑

// The Template Method Pattern is a behavioral design pattern.
// It defines the skeleton of an algorithm in a base class but lets subclasses override certain steps without changing the overall structure.

// 👉 Think of it like a recipe:

// The recipe (template) defines the steps: prepare ingredients → cook → serve.

// But different chefs (subclasses) can decide how to implement those steps.

// 📝 Key Idea

// Abstract Class (Template) → defines the algorithm with a template method.

// Concrete Subclasses → implement the specific steps.

// Keeps the structure consistent, but customizes behavior where needed.

// ⚡ Where is it used?

// Frameworks: Provide default flow but allow customization (React lifecycle methods, Django hooks).

// Game engines: Define game loop but allow custom rendering or physics.

// UI libraries: Base components define rendering structure, subclasses override specific pieces.

// Algorithms: Sorting strategies, data processing pipelines.

// Abstract Class
class VehicleTemplate {
  constructor() {
    if (this.constructor == VehicleTemplate) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  buildVehicle() {
    this.collectComponents();
    this.assempleComponents();
    this.installGearBox();
    this.installWheels();
    this.stratVehical();
    console.log("Vehicle is ready");
    console.log("==================");
  }

  collectComponents() {
    console.log(`Collecting components, rear and front lights, tires, chairs`);
  }
  assempleComponents() {
    throw new Error("You Need to override this method");
  }
  installGearBox() {
    throw new Error("You Need to override this method");
  }
  installWheels() {
    console.log("Installing wheels");
  }
  stratVehical() {
    console.log("Start The Vehical");
  }
}

class Car extends VehicleTemplate {
  assempleComponents() {
    console.log("Assembling Car Components");
  }
  installGearBox() {
    console.log("Installing Gear Box");
  }
}

class Truck extends VehicleTemplate {
  assempleComponents() {
    console.log("Assembling Truck Components");
  }
  installGearBox() {
    console.log("Installing Gear Box");
  }
}

const car = new Car();
car.buildVehicle();

const truck = new Truck();
truck.buildVehicle();
