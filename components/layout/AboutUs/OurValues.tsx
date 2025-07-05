import Image from "next/image"
import { IImage, Ititle } from "../../../interfaces/common"

const OurValues = () => {
    return(
        <section className="bg-primary py-10 lg:py-15">
            <div className="container mx-auto lg:px-0 px-4">
                <h2 className="text-4xl lg:text-5xl text-center font-bold text-white">{data.title}</h2>
                <p className={`font-extralight text-lg text-center mt-2 md:whitespace-pre-line text-white`}>{data.description}</p>
                <ul className="grid grid-cols-3 gap-10 mt-10">
                    {data.list.map((item,i)=>(
                        <li key={`our_values_${i}`} className={`bg-[#15372e] border-white/20 rounded-2xl p-6`}>
                            <Image src={item.image} alt={item.image_alt} width={50} className="ml-auto mr-auto" height={50} />
                            <h3 className="text-lg text-center mt-20 font-bold text-white">{item.title}</h3>
                            <p className="font-light text-lg text-center text-white">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default OurValues

const data: Ititle & {list:(Ititle & IImage)[]} = {
    title:'Edumile Values',
    description:'At Edumile, our values are the foundation of everything we do.',
    list:[
        {
            image:'/images/rocket.svg',
            image_alt:'img',
            title:'Innovative',
            description:'Experience hands-on learning that builds real-world skills and creativity, empowering your journey.'
        },
        {
            image:'/images/award.svg',
            image_alt:'img',
            title:'Accessible learning',
            description:'Access a curated library of courses, tools, and materials to master skills and achieve your goals.'
        },
        {
            image:'/images/shiny.svg',
            image_alt:'img',
            title:'Transparent',
            description:'We embrace a global community of learners with openness & diversity, creating a space for growth.'
        }
    ]
}