class Animal {
    static defaultName = 'Animal';
    constructor(public name: string) {
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

type AnimalType = {
    name: string;
    age: number;
}

export { AnimalType };
export default Animal;