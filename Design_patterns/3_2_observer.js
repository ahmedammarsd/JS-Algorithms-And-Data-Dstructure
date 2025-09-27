class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    console.log(observer == observer);
    this.observers = this.observers.filter((obs) => obs != observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(this.name + ", You recive a notifcation about " + data);
  }
}
const softwareEngineering = new Subject();
//==========
const observerOne = new Observer("Ahmed"); // Student Ahmed
const observerTwo = new Observer("Hassan");
//=========
softwareEngineering.subscribe(observerOne);
softwareEngineering.subscribe(observerTwo);

softwareEngineering.notify("Start Course After 10 days");
softwareEngineering.unsubscribe(observerTwo);
softwareEngineering.notify("Start Second after 20 days");
