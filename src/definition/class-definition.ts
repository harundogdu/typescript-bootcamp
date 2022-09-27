// Class Definition

// Example 1
interface IStudent {
    name: string;
    surname: string;
    age: number;
    classroom: string;
    getFullName(): string;
    getAllInfo(): string;
}

class Student implements IStudent {
    public name: string;
    public surname: string;
    public age: number;
    public classroom: string;

    constructor(name: string, surname: string, age: number, classroom: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.classroom = classroom;
    }

    getFullName(): string {
        return `${this.name} ${this.surname}`;
    }
    getAllInfo(): string {
        return `${this.name} ${this.surname} ${this.age} ${this.classroom}`;
    }
}

export default Student;

// Path: src\class-definition.ts