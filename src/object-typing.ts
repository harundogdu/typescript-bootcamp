// Object Typing

// Example 1
type CarProps = {
    name: string;
    year: number;
    broken: boolean;
}

const car: CarProps = {
    name: 'Ford',
    year: 2015,
    broken: true
}

car.broken = false;

console.log(car);

// Example 2
type UserProps = Partial<{              // Partial - makes all properties optional
    name: string;
    age: number;
    email: string;
}>

const user: UserProps = {
    name: 'John',
    age: 25
}

user.name = 'John Doe';

console.log(user);

// Example 3
type AdminProps = Required<{             // Required - makes all properties required
    name: string;
    age: number;
    email: string;
}>

const admin: AdminProps = {
    name: 'John',
    age: 25,
    email: 'john@doe.com'
}

admin.age = 26;

console.log(admin);

// Example 4
type SocialMediaProps = Record<'facebook' | 'twitter' | 'instagram' | 'github', string>   // Record - creates a new type with the specified keys and value type

const socialMedia: SocialMediaProps = {
    facebook: 'facebook.com',
    twitter: 'twitter.com',
    instagram: 'instagram.com',
    github: 'github.com'
}

socialMedia.facebook = 'facebook.com/johndoe';

console.log(socialMedia);

// Example 5
type MovieProps = Readonly<{            // Readonly - makes all properties readonly
    name: string;
    year: number;
    broken: boolean;
}>

const movie: MovieProps = {
    name: 'Ford',
    year: 2015,
    broken: true
}

//movie.broken = false;                   // Error: Cannot assign to 'broken' because it is a read-only property.


// Record - creates a new type with the specified keys and value type
// Partial - makes all properties optional
// Required - makes all properties required
// Readonly - makes all properties readonly

// Path: src\object-typing.ts