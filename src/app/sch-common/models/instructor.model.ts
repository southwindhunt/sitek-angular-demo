import { Course } from "./course.model";

export interface Instructor{
    id: number;
    discipline: number;
    firstName: string;
    lastName: string;
    interests: Array<string>;
    courses: Array<Course>;
}