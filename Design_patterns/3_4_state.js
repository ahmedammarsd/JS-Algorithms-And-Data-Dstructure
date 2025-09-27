// Nice — let’s explore the State Pattern 🎭

// The State Pattern is a behavioral design pattern.
// It lets an object change its behavior when its internal state changes, as if it changed its class.

// 👉 Think of it like a traffic light:

// When the light is red, cars must stop.

// When it turns green, cars go.

// Same object (traffic light) → different behavior depending on state.

// 📝 Key Idea

// Context → the main object whose behavior changes.

// State Interface → defines common behavior methods.

// Concrete States → implement behavior for each state.

// The context delegates work to the current state object.

// ⚡ Where is it used?

// UI components: buttons (enabled/disabled/hovered states).

// Games: character states (idle, running, jumping, attacking).

// Workflow engines: moving tasks through states.

// Authentication systems: logged in vs logged out.

// Media players: play, pause, stop states.

// Abstract
class State {
  constructor() {
    if (this.constructor == State) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  handleState() {
    throw new Error("You Need to override this method");
  }
}

class RedLight extends State {
  handleState() {
    console.log("🔴 Red light → STOP");
  }
}

class GreenLight extends State {
  handleState() {
    console.log("🟢 Green light → GO");
  }
}

class YellowLight extends State {
  handleState() {
    console.log("🟡 Yellow light → SLOW DOWN");
  }
}

class TrafficContext {
  #state;
  constructor() {
    this.#state = new RedLight();
  }

  setState(state) {
    this.#state = state;
  }

  showState() {
    this.#state.handleState();
  }
}

const context = new TrafficContext();
context.showState();

setTimeout(() => {
  context.setState(new YellowLight());
  context.showState();
}, 1000);

setTimeout(() => {
  context.setState(new GreenLight());
  context.showState();
}, 2000);
