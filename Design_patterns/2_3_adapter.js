// The Adapter Pattern is a structural design pattern.
// It’s used when two classes (or systems) can’t work together directly because their interfaces don’t match.

// 👉 The adapter acts like a translator between them, so they can communicate without changing their existing code.
class Vehicle {
  constructor(name, type) {
    this.type = type;
    this.name = name;
  }

  drive() {
    console.log(`Drive - The ${this.name} is driving. Type ${this.type}`);
  }

  honk() {
    console.log(`Beep beep - ${this.name} ${this.type}`);
  }

  stop() {
    console.log(`Stop - The ${this.name} is stopped. Type ${this.type}`);
  }
}

class BicycleAdapter extends Vehicle {
  #bike;
  constructor(bike) {
    super();
    this.#bike = bike;
  }

  drive() {
    this.#bike.moving();
  }

  honk() {
    this.#bike.bikeHonk();
  }

  stop() {
    this.#bike.bikeStop();
  }
}

class Bicycle {
  moving() {
    console.log("The Bicycle is moving");
  }
  bikeStop() {
    console.log("The Bicycle is stopped");
  }
  bikeHonk() {
    console.log("The Bicycle is Honking");
  }
}

// Function to use the Vehicle class functions
const useVehicle = (vehicle) => {
  vehicle.drive();
  vehicle.honk();
  vehicle.stop();
  console.log("===============");
};

const toyotaCar = new Vehicle("Corella", "Toyota");
useVehicle(toyotaCar);
// toyotaCare.drive();
// toyotaCare.honk();
// toyotaCare.stop();
// console.log("===============");

const bicycle = new Bicycle();
const bicycleAdapter = new BicycleAdapter(bicycle);

useVehicle(bicycleAdapter);
// bicycleAdapter.drive();
// bicycleAdapter.honk();
// bicycleAdapter.stop();
