'use client'
import { useState } from "react";
import { ICTA, Ititle } from "../../../interfaces/common";
import { ICourseCard } from "../../../interfaces/courses";
import CourseCard from "../Courses/CourseCard";
import Link from "next/link";

interface IDATA extends Ititle, ICTA {
    tabs:(Ititle & {list: ICourseCard[]})[]
}

const TopCourses = ({ data } : { data : IDATA }) => {
    const [ selectedTab, setSelectedTab ] = useState<(Ititle & {list: ICourseCard[]})>(data.tabs[0]);
    return(
        <section className="bg-gray-100 py-10 lg:py-15 lg:px-0 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl lg:text-5xl text-center font-bold">{data.title}</h2>
                <ul className="flex items-center w-max mx-auto my-8 md:my-10 bg-white 2xl:p-4 p-2 rounded-full shadow-md gap-4 max-w-[100%] overflow-auto">
                    {data.tabs.map((tab:Ititle & {list: ICourseCard[]}, i:number) => (
                        <li key={`courses_tab_${i}`} className={`inline-block whitespace-nowrap ${selectedTab.title == tab.title ? 'font-bold bg-primary  rounded-full text-white' : 'font-normal'} 2xl:py-4 py-2.5 px-4 text-md md:text-lg cursor-pointer transition-all duration-300`} onClick={() => setSelectedTab(tab)}>{tab.title}</li>
                    ))}
                </ul>
                <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 grid lg:mt-15">
                    {selectedTab.list.map((course:ICourseCard, i:number) => (
                        <CourseCard  key={`courses_featured_${i}`} course={course} />
                    ))}
                </div>
                <Link href={data.cta_url} className="block mx-auto mt-10 bg-secondary text-black px-6 py-3 text-lg rounded-[80px] font-semibold w-max">
                    {data.cta_name}
                </Link>
            </div>
        </section>
    )
}

export default TopCourses;