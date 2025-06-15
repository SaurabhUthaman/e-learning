import { ICTA, IImage, Ititle } from "./common";

export interface ICourseCard extends Ititle, IImage, ICTA {
    mentor: ICTA;
    category: string;
    price: string;
    lessons: string;
    duration: string;
}