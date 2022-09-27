// Interface Definition

// Example 1
interface ICourse {
    title: string;
    description?: string;
    price: number;
    instructor: IInstructor;
    level: string;
    getDetails(): string;
}

interface IInstructor {
    name: string;
    experience: number;
}

interface IWebDevelopmentCourse extends ICourse {
    type: string;
}

const instructor: IInstructor = {
    name: 'John',
    experience: 10
}

const course: ICourse = {
    title: 'React JS',
    description: 'React JS Course',
    price: 100,
    instructor,
    level: 'Beginner',
    getDetails() {
        return `${this.title} ${this.description} ${this.price} ${this.level}`;
    }
}

const webDevelopmentCourse: IWebDevelopmentCourse = {
    title: 'React JS',
    description: 'React JS Course',
    price: 100,
    instructor,
    level: 'Beginner',
    type: 'Web Development',
    getDetails() {
        return `${this.title} ${this.description} ${this.price} ${this.level}`;
    }
}

course.getDetails();
webDevelopmentCourse.getDetails();
