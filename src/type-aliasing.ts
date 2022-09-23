// Example 1
type Colors = "red" | "green" | "blue";
const color1: Colors = 'green'
const color2 = 'red' as Colors

// Example 2
type CustomColors = "yellow" | "orange" | "purple";
const color3: CustomColors = 'yellow'

// Example 3
type AllColors = Colors | CustomColors;
const color4: AllColors = 'blue'

// Example 4
type Person = {
    name: string;
    surname: string;
    age: number;
}

type Employee = {
    name: string;
    surname: string;
    age: number;
    salary: number;
    position: string;
}

type Developer = {
    name: string;
    surname: string;
    age: number;
    salary: number;
    position: "Web Developer" | "Mobile Developer";
    skills: string[];
}

type PersonOrEmployee = Person | Employee;
type PersonOrEmployeeOrDeveloper = Person | Employee | Developer;

const person: Person = { name: "John", surname: "Doe", age: 30 };
const person1 = <Person>{ name: "John", surname: "Doe", age: 30 };
const person2 = { name: "John", surname: "Doe", age: 30 } as Person;

const employee: Employee = { name: "John", surname: "Doe", age: 30, salary: 1000, position: "UI/UX Designer" };

const developer: Developer = { name: "John", surname: "Doe", age: 30, salary: 1000, position: "Web Developer", skills: ["HTML", "CSS", "JavaScript"] };

const personOrEmployee: PersonOrEmployee = { name: "John", surname: "Doe", age: 30 };
const personOrEmployeeOrDeveloper: PersonOrEmployeeOrDeveloper = { name: "John", surname: "Doe", age: 30, salary: 1000, position: "Web Developer", skills: ["HTML", "CSS", "JavaScript"] };

// Path: src\type-aliasing.ts