// Function definitions  

// Example 1
function add(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(add(1, 2));

// Example 2
function LogPerson(params: {
    name: string,
    surname: string,
    age: number
}): object {
    return {
        name: params.name,
        surname: params.surname,
        age: params.age
    }
}

console.log(LogPerson({ name: 'John', surname: 'Doe', age: 30 }));

// Example 3
function LogEmployee(params: {
    name: string;
    surname: string;
    age: string;
    position: string;
}): object {
    return {
        name: params.name,
        surname: params.surname,
        age: params.age,
        position: params.position
    }
}

console.log(LogEmployee({ name: 'John', surname: 'Doe', age: '30', position: 'Developer' }));

// Homework
function showToConsole(params: {
    name: string;
    repeat: number;
}): void {
    for (let i = 0; i < params.repeat; i++) {
        console.log(params.name);
    }
}

showToConsole({ name: 'John', repeat: 3 });

// Path: src\function-definitions.ts