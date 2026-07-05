// ==========================================
// TOPIC 1: PROTOTYPES & PROTOTYPE CHAIN
// ==========================================

// 1. The Constructor Function (Old way of creating objects)
function Animal(name) {
  this.name = name; // 'this' refers to the new object being created
}

// 2. Adding methods to the Prototype
// Instead of putting 'speak' inside the constructor (which creates a new copy for every animal),
// we put it on the prototype. All animals will share this ONE function in memory.
Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

const dog = new Animal("Rex");

// 3. The Prototype Chain in Action
console.log(dog.speak()); // "Rex makes a noise."
// How did JS find 'speak'?
// 1. It looked at 'dog'. Not there.
// 2. It looked at dog.__proto__ (which is Animal.prototype). Found it!

// 4. Inheritance (Extending the chain)
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor to set 'name'
  this.breed = breed;
}

// Link Dog's prototype to Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix the constructor pointer

Dog.prototype.bark = function () {
  return `${this.name} barks loudly!`;
};

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.speak()); // "Buddy makes a noise." (Found on Animal.prototype)
console.log(myDog.bark()); // "Buddy barks loudly!" (Found on Dog.prototype)

// 5. Proving the chain exists
console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true (Because of the prototype chain!)
