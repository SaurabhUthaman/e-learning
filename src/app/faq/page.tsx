'use client'
import React, { useState } from "react"
import { Ititle } from "../../../interfaces/common"

interface IData extends Ititle{
    list:Ititle[]
}
const Faqs = () => {
    const [ selectedFAQ, setSelectedFAQ ] = useState<Ititle | null>(null)
    return(
        <>
        <section className={`lg:py-15 py-10 lg:px-0 px-4 gap-5 container mx-auto`}>
            <h1 className="text-4xl lg:text-5xl lg:text-[60px] text-center leading-[1.1] 2xl:text-[70px] font-bold whitespace-pre-line">{title.title}</h1>
            <p className={`font-extralight text-md md:text-xl mt-5 text-center lg:whitespace-pre-line`}>{title.description}</p>
        </section>
        <ul className="container py-10 lg:py-15 mx-auto lg:px-0 px-4 grid-cols-1 grid gap-10 lg:gap-20">
            {data.map((list,i)=>(
                <li key={`faqs_${i}`}>
                    <h2 className="text-4xl lg:text-5xl font-bold">{list.title}</h2>
                    <ul className="grid grid-cols-1 gap-5 mt-8">
                        {list.list.map((item:Ititle,j:number)=>(
                            <li onClick={()=>setSelectedFAQ(prevState=> prevState?.title == item.title ? null : item)} key={`home_faqs_${i}_${j}`} className={`bg-black/5 p-4 lg:p-6 2xl:p-8 ${selectedFAQ?.title == item.title ? 'border-secondary' : 'border-gray-300'} border rounded-2xl overflow-hidden cursor-pointer`}>
                                <h3 className="font-bold text-lg md:text-xl lg:text-2xl flex items-start justify-between">
                                    {item.title}
                                    <span className={`${selectedFAQ?.title == item.title ? 'rotate-135' : ''} font-semibold transition-all duration-[700ms] ease-in-out text-[30px] 2xl:text-[40px] leading-[1]`}>+</span>
                                </h3>
                                <p className={`${selectedFAQ?.title == item.title ? 'max-h-[200vh] opacity-100 mt-2' : 'max-h-0 opacity-0'} transition-all duration-[1s] ease-in-out font-light text-lg`}>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Faqs

const title:Ititle = {
    title:`Frequently Asked Questions`,
    description:`Discover knowledge, learn from experts, and achieve goals with 
engaging, live, and interactive learning experiences.`,
}

const data:IData[] = [
    {
        title:'Course Questions',
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
    },
    {
        title:'Mentors Questions',
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
    },
    {
        title:'Teachings Questions',
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
    },
    {
        title:'Common Questions',
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
]