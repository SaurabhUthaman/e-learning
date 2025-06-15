import { Ititle } from "../../../interfaces/common";
import { ICourseCard } from "../../../interfaces/courses"
import CourseCard from "../Courses/CourseCard"

interface ICourse extends Ititle {
    list: ICourseCard[];
}

const FeaturedCourse = ({ cources } : { cources : ICourse }) => {
    return(
        <section className="bg-gray-100 py-10 lg:py-15 lg:px-0 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl lg:text-5xl text-center font-bold">{cources.title}</h2>
                <p className={`font-extralight text-lg text-center mt-2`}>{cources.description}</p>
                <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 grid mt-10 lg:mt-15">
                    {cources.list.map((course:ICourseCard, i:number) => (
                        <CourseCard  key={`courses_featured_${i}`} course={course} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourse