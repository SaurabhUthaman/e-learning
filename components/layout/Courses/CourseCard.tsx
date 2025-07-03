import Image from "next/image";
import Link from "next/link";
import { ICourseCard } from "../../../interfaces/courses";

const CourseCard = ({ course } : { course : ICourseCard }) => {
    return(
        <div className={`p-4 md:p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <span className="relative group overflow-hidden inline-block w-full rounded-2xl">
                <Image src={course.image} alt={course.image_alt} width={477} height={349} className="group-hover:scale-115 transition-all duration-300 rounded-2xl"/>
                <span className="absolute top-4 left-4 bg-white text-black py-1 px-2 md:px-3 hover:bg-secondary transition-all duration-300 md:py-2 rounded-md md:rounded-lg text-sm md:text-md">{course.category}</span>
            </span>
            <h3 className={`text-xl md:text-2xl color-black font-semibold flex items-center justify-between mt-2 md:mt-4`}>
                <span>{course.title}</span>
                <span>{course.price}</span>
            </h3>
            <Link href={course.mentor.cta_url} className={`mt-1 md:mt-3 inline-block text-lg md:text-xl font-normal`}>{course.mentor.cta_name}</Link>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 items-center justify-between mt-4 p-4 bg-gray-100 rounded-lg relative md:after:content-[''] after:content-[none] after:absolute after:top-[50%] after:left-[50%] after:h-[80%] after:w-[1px] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-gray-300">
                <div className="flex items-center gap-2">
                    <Image src="/images/file.svg" alt="Lessons Icon" width={30} height={30} className="leading-0"/>
                    <div>
                        <span className="block text-gray-500 text-md md:text-lg leading-none mb-1">Lessons</span>
                        <span className="text-md md:text-lg block text-black leading-none">{course.lessons}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/images/clock.svg" alt="Lessons Icon" width={30} height={30} className="leading-0"/>
                    <div>
                        <span className="block text-gray-500 text-md md:text-lg leading-none mb-1">Duration</span>
                        <span className="text-md md:text-lg block text-black leading-none">{course.duration}</span>
                    </div>
                </div>
            </div>
            <Link href={course.cta_url} className={`p-4 flex justify-center mt-5 border border-gray-300 font-bold hover:text-white hover:bg-primary transition-all duration-300 rounded-full w-full`}>{course.cta_name}</Link>
        </div>
    )
}

export default CourseCard;