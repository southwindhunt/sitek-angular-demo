import { Course } from "./course.model";

export interface Instructor{
    id: number;
    discipline: number;
    firstName: string;
    lastName: string;
    courses: Array<Course>;
}