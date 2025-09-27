// The Command Pattern is a behavioral design pattern.
// It turns a request (an action to be performed) into a standalone object.

// 👉 Why? So that requests can be queued, logged, undone/redone, or passed around like data.

// Think of it like a remote control: each button press (command) is an object that tells the TV (receiver) what to do, without the remote knowing how the TV works internally.

// 📝 Key Components

// Command → interface defining an execute() method.

// ConcreteCommand → implements execute() by calling a method on the receiver.

// Receiver → the object that actually performs the action.

// Invoker → triggers the command (like the remote control).

// Client → creates the commands and sets them on the invoker.

// interface
class Command {
  execute() {
    throw new Error("This method must be overridden!");
  }
}
//===========================================================
class Television {
  on() {
    console.log("TV is on");
  }
  off() {
    console.log("TV is off");
  }
}

class TurnOnTelevisionCommand extends Command {
  constructor(television) {
    super();
    this.tv = television;
  }
  execute() {
    this.tv.on();
  }
}

class TurnOffTelevisionCommand extends Command {
  constructor(television) {
    super();
    this.tv = television;
  }
  execute() {
    this.tv.off();
  }
}

//===========================================================

//===========================================================
class AirConditioner {
  on() {
    console.log("AC is on");
  }
  off() {
    console.log("AC is off");
  }
}
class TurnOnAC extends Command {
  constructor(ac) {
    super();
    this.ac = ac;
  }
  execute() {
    this.ac.on();
  }
}
class TurnOffAC extends Command {
  constructor() {
    super();
    this.ac = ac;
  }
  execute() {
    this.ac.off();
  }
}
//===========================================================

class RemoteControl {
  constructor() {
    this.onCommands = [];
    this.offCommands = [];
  }
  addComman(slot, onCommand, offCommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }
  onCommand(slot) {
    this.onCommands[slot].execute();
  }
  offCommand(slot) {
    this.offCommands[slot].execute();
  }
}

const remoteControl = new RemoteControl();

const TV_SLOT = 0;
const AC_SLOT = 1;

const tv = new Television();
const turnOnCommand = new TurnOnTelevisionCommand(tv);
const turnOffCommand = new TurnOffTelevisionCommand(tv);
remoteControl.addComman(TV_SLOT, turnOnCommand, turnOffCommand);
remoteControl.onCommand(TV_SLOT);
remoteControl.offCommand(TV_SLOT);

const ac = new AirConditioner();
const trurnOnAC = new TurnOnAC(ac);
const turnOffAC = new TurnOffAC(ac);
remoteControl.addComman(AC_SLOT, trurnOnAC, turnOffAC);
remoteControl.onCommand(AC_SLOT);
remoteControl.offCommand(AC_SLOT);
// class Invoker {
//   constructor() {
//     this.commands = [];
//   }
//   add(command) {
//     this.commands.push(command);
//   }
//   execute() {
//     this.commands.forEach((command) => command.execute());
//   }
// }
