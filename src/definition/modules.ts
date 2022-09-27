import Animal, { AnimalType } from "./animal";

const animal = new Animal('Jack');
console.log(animal.sayHi());

const animalType: AnimalType = {
    name: 'Jack',
    age: 23
}

console.log(animalType);

// Path: src\modules.ts