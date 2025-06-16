'use client'
import Image from "next/image"
import { ICTA, IImage, Ititle } from "../../../interfaces/common"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface IData extends Ititle, IImage, ICTA{
    list:Ititle[]
}
const JourneyMadeSimple = () => {
    const stepsRef = useRef<Array<HTMLHeadingElement | null>>([])
    const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (stepsRef.current.length > 1 && typeof window!=='undefined') {
            const widths = stepsRef.current.map(el => el?.offsetWidth || 0)
            setMaxWidth(Math.max(...widths))
        }
    }, [])
    return(
        <section className="py-10 lg:py-15 bg-primary lg:px-0 px-4">
            <div className={`container mx-auto gap-8 md:gap-15 flex flex-wrap lg:flex-nowrap items-end whitespace-pre-line justify-between`}>
                <div className="lg:w-[40%] w-full relative">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">{data.title}</h2>
                    <p className={`font-extralight text-lg mt-5 text-white`}>{data.description}</p>
                    <Image src={data.image} alt={data.image_alt} width={580} height={436} className="rounded-lg mt-10 w-full"/>
                </div>
                <ul className={`lg:w-[60%] grid md:grid-cols-2 lg:grid-cols-1 gap-5`}>
                    {data.list.map((item:Ititle, i:number) => (
                        <li key={`courses_featured_${i}`} className="p-3 lg:p-6 border items-center flex-wrap lg:flex-nowrap flex gap-2 lg:gap-5 border-white/10 bg-white/5 rounded-lg">
                            <div style={maxWidth && typeof window!=='undefined' ? {minWidth: maxWidth} : {width: 'max-content'}}>
                                <p className="font-bold text-md text-secondary">{'0'+(i+1)}</p>
                                <h3 ref={el => {stepsRef.current[i] = el}} className="font-bold text-xl lg:text-2xl w-max text-white journey-steps">{item.title}</h3>
                            </div>
                            <p className="font-light text-md lg:text-lg mt-1 text-white">{item.description}</p>
                        </li>
                    ))}
                    <li>
                        <Link href={data.cta_url} className="block text-secondary font-semibold">
                            {data.cta_name}
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default JourneyMadeSimple
const data:IData = {
    title:"Your learning journey made simple",
    description:'Browse courses, enroll easily, and learn at your pace with expert-led lessons and accessible resources.',
    image:`/e-learning/images/journey.webp`,
    image_alt:'alt',
    list:[
        {
            title:'Sign Up',
            description:'Create a free account in minutes and gain instant access to our course library.'
        },
        {
            title:'Pick your course',
            description:'Browse a wide selection of courses and choose one that aligns with your goals.'
        },
        {
            title:'Start learning',
            description:'Enjoy engaging, interactive lessons that make learning fun and effective.'
        },
        {
            title:'Get certificate',
            description:'Complete the course and receive a professional certificate to showcase your achievements.'
        }
    ],
    cta_url:'/courses',
    cta_name:'Get Started Today'
}