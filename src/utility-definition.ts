// Utility Types

/*
    * Example 1  Omit : Omitting a property from an interface 
 */
interface IPerson {
    name: string;
    surname: string;
    age: number;
}


const myPerson: Omit<IPerson, "age"> = {
    name: "John",
    surname: "Doe"
}

console.log(myPerson);

/*
    * Example 2  Parameters : Extracting the parameters of a function
*/

function myFunction(a: number, b: string, c: boolean) {
    return { a, b, c }
}

type myFunctionParameters = Parameters<typeof myFunction>;

const myFunctionSample: myFunctionParameters = [1, "2", true];

console.log(myFunctionSample);

/*
    * Example 3  ReturnType : Extracting the return type of a function 
 */

function myFunction2(a: number, b: string, c: boolean) {
    return { a, b, c }
}

type myFunctionReturnType = ReturnType<typeof myFunction2>;

const myFunctionSample2: myFunctionReturnType = {
    a: 1,
    b: "2",
    c: true
}

console.log(myFunctionSample2);

/*
    * Example 4  Required : Making all properties required
*/

interface IPerson2 {
    name?: string;
    surname?: string;
    age?: number;
}

const myPerson2: Required<IPerson2> = {
    name: "John",
    surname: "Doe",
    age: 30
}

console.log(myPerson2);

/*
    * Example 5  Partial : Making all properties optional
*/

interface IPerson3 {
    name: string;
    surname: string;
    age: number;
}

const myPerson3: Partial<IPerson3> = {
    name: "John",
    surname: "Doe"
}

console.log(myPerson3);

/*
    * Example 6  Pick : Picking a property from an interface
*/

interface IPerson4 {
    name: string;
    surname: string;
    age: number;
}

const myPerson4: Pick<IPerson4, "name"> = {
    name: "John"
}

console.log(myPerson4);

/*
    * Example 7  Record : Creating an object with a specific type
*/

const myRecord: Record<number, IPerson4> = {
    0: {
        name: "John",
        surname: "Doe",
        age: 30
    },
    1: {
        name: "Jane",
        surname: "Doe",
        age: 30
    }
}

console.log(myRecord);

/*
    * Example 8  Exclude : Excluding a type from another type
*/

type myType = "a" | "b" | "c" | "d";

type myExcludedType = Exclude<myType, "a" | "b">;

const myExcludedTypeSample: myExcludedType = "c";

console.log(myExcludedTypeSample);

// Path: src\utility-definition.ts