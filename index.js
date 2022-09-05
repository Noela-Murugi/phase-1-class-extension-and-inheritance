class Dog {
    constructor(name) {
      this.name = name;
    }

    speak() {
      return `${this.name} says woof!`
    }
  }

  class Cat {
    constructor(name) {
      this.name = name;
    }

    speak() {
      return `${this.name} says meow!`
    }
  }

  class Bird {
    constructor(name) {
      this.name = name;
    }

    speak() {
        return `${this.name} says squawk!`
      }
    }


    class Pet {
        constructor(name, sound) {
          this.name = name;
          this.sound = sound;
        }

        speak() {
          return `${this.name} says ${this.sound}!`
        }
      }

      class Dog extends Pet {
        // inherits constructor from Pet
      }

      class Cat extends Pet {
        // inherits constructor from Pet
      }

      class Bird extends Pet  {
        // inherits constructor from Pet
        fly() {
          return `${this.name} flies away!`
        }
      }

      let dog = new Dog("Shadow", "woof");
      let cat = new Cat("Missy", "meow");
      let bird = new Bird("Tiki", "squawk");

      dog.speak(); // Shadow says woof!
      cat.speak(); // Missy says meow!
      bird.speak(); // Tiki says squawk!
      bird.fly();
