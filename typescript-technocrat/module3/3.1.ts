{
  // oop - Class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`); // this command does not work with arrow function
    }
  }

  const dog = new Animal("German Shepard  Bhai", "dog", "Ghew Ghew");
  const cat = new Animal("Persian Bhai", "cat", "meaw meaw");

  dog.makeSound();

  //
}
