// Singleton : it is create a single object that is shared amonges a bunch of different resources, without lose the stats
// single instance
class Single {
  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single();
      return Single.instance;
    }
    Single.count = Single.count + 1;
    console.log("The Instance - Count: " + Single.count);
    return Single.instance;
  }
  constructor() {
    if (Single.instance) {
      return Single.instance;
    }
    this.value = Math.random();
    Single.count = 0;
    console.log("Class Created");
  }
  getValue() {
    return this.value;
  }
}

let singleOne = Single.getInstance();
let singleTwo = Single.getInstance();
let singleThree = Single.getInstance();
console.log(singleOne.getValue());
console.log(singleTwo.getValue());
console.log(singleThree.getValue());

// =================================================================
console.log("===========================================================");
class ThemeClass {
  constructor() {
    // Check if no instance
    if (ThemeClass.instance == null) {
      console.log("Create Instance of Theme Class");
      this.theme = "Light";
      ThemeClass.instance = this;
    }
    return ThemeClass.instance;
  }

  setTheme(theme) {
    this.theme = theme;
    console.log("Theme Updated to : " + theme);
  }

  getTheme() {
    console.log(this.theme);
  }
}
const themeClass = new ThemeClass();
const themeClass2 = new ThemeClass();
themeClass.getTheme();
themeClass2.setTheme("Dark");
themeClass.getTheme();
console.log("===========================================================");

//========================================================================
/// Method 1 : Using a Class with a Static Instance
class Singleton {
  constructor() {
    if (Singleton.instance) {
      Singleton.instance.count = Singleton.instance.count + 1;
      console.log(
        "Singleton Using Static Instance count : " + Singleton.instance.count
      );
      return Singleton.instance; // Return Existing instance
    }
    this.value = Date.now();
    this.count = 1;
    console.log("Singleton Using Static Instance count : " + this.count);
    Singleton.instance = this; /// Save Instance
  }
}

const singletonOne = new Singleton();
const singletonTwo = new Singleton();
const singletonThree = new Singleton();
console.log(singletonOne.value);
console.log(singletonTwo.value);
console.log(singletonThree.value);

console.log("===========================================================");

//========================================================================
/// Method 2 : Using a Static Method
class Singleton2 {
  constructor() {
    this.time = Date.now();
  }

  static getInstance() {
    if (!Singleton2.instance) {
      Singleton2.instance = new Singleton2();
    }
    return Singleton2.instance;
  }

  getTime() {
    console.log(this.time);
    return;
  }
}

const s1 = Singleton2.getInstance();
const s2 = Singleton2.getInstance();
console.log(s1 == s2);
console.log(s1.time);
console.log(s2.time);
