"use strict";
console.log("hello from oop practice");

//creating parent class
class Animal {
  constructor(name, mainColor, sound) {
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }
  scream(intensity) {
    console.log(`${this.sound} ${"!".repeat(intensity)}`);
  }
}

class Cat extends Animal {
  constructor(name, mainColor, sound, legs) {
    super(name, mainColor, sound);
    // custom Cat attributes below
    this.legs = legs;
  }
}

class Chameleon extends Animal {
  constructor(name, mainColor, sound, camouflage) {
    super(name, mainColor, sound);
    // custom Chameleon attribues below
    this.camouflage = camouflage;
  }
}

const dragon = new Chameleon("Tammy", "blue", "hiss", true);
console.log(dragon);

const garfield = new Animal("Mr. Garfield", "orange", "meow");
console.log(garfield);
console.log(garfield.mainColor);

const tom = new Cat("Tom Jerry Seinfeld", "grey", "meowzah", 4);
console.log(tom);

// oop udemy
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} is now charged to ${this.charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 30;
    this.charge -= this.charge * 0.01;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
    return this;
  }
}

let tesla = new EV("Tesla Model Y", 150, 23);
console.log(tesla);
tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(100)
  .accelerate();

// let bmw = new Car("BMW", 120);
// console.log(bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
