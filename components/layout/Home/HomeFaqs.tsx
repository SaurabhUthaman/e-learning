'use client'
import { useState } from "react"
import { Ititle } from "../../../interfaces/common"

interface IData extends Ititle{
    list:Ititle[]
}
const HomeFaqs = () => {
    const [ selectedFAQ, setSelectedFAQ ] = useState<number | null>(null)
    return(
        <section className="container py-10 lg:py-15 mx-auto lg:px-0 px-4">
            <h2 className="text-4xl lg:text-5xl text-center font-bold">{data.title}</h2>
            <ul className="grid grid-cols-1 gap-5 max-w-[1000px] mx-auto mt-8">
                {data.list.map((item:Ititle,i:number)=>(
                    <li onClick={()=>setSelectedFAQ(prevState=> prevState == i ? null : i)} key={`home_faqs_${i}`} className={`bg-black/5 p-4 lg:p-6 2xl:p-8 ${selectedFAQ == i ? 'border-secondary' : 'border-gray-300'} border rounded-2xl overflow-hidden cursor-pointer`}>
                        <h3 className="font-bold text-lg md:text-xl lg:text-2xl flex items-start justify-between">
                            {item.title}
                            <span className={`${selectedFAQ == i ? 'rotate-135' : ''} font-semibold transition-all duration-[700ms] ease-in-out text-[30px] 2xl:text-[40px] leading-[1]`}>+</span>
                        </h3>
                        <p className={`${selectedFAQ == i ? 'max-h-[200vh] opacity-100 mt-2' : 'max-h-0 opacity-0'} transition-all duration-[1s] ease-in-out font-light text-lg`}>{item.description}</p>
                    </li>
                ))}
            </ul>
            {data.description && <p className={`font-light text-md md:text-lg text-center mt-5`} dangerouslySetInnerHTML={{__html:data.description}}></p>}
        </section>
    )
}
export default HomeFaqs

const data:IData = {
    title:'Common Questions, Quick Answers',
    description:'If you have a question that isn’t covered here, feel free to <a class="font-bold" href="/contact-us">Contact Us</a> directly.',
    list:[
        {
            title:'What types of courses do you offer?',
            description:'We provide an extensive selection of courses in technology, business, creative arts, personal development, leadership, finance, health, and more, tailored to diverse learning needs.'
        },
        {
            title:'Are your courses beginner-friendly?',
            description:'We provide an extensive selection of courses in technology, business, creative arts, personal development, leadership, finance, health, and more, tailored to diverse learning needs.'
        },
        {
            title:'How can I access the courses?',
            description:'We provide an extensive selection of courses in technology, business, creative arts, personal development, leadership, finance, health, and more, tailored to diverse learning needs.'
        },
        {
            title:'What payment methods do you accept?',
            description:'We provide an extensive selection of courses in technology, business, creative arts, personal development, leadership, finance, health, and more, tailored to diverse learning needs.'
        },
        {
            title:'Can I preview a course before enrolling?',
            description:'We provide an extensive selection of courses in technology, business, creative arts, personal development, leadership, finance, health, and more, tailored to diverse learning needs.'
        }
    ]
}