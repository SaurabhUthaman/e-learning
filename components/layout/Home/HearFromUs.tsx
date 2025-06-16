'use client'
import Slider from "react-slick";
import { IImage, Ititle } from "../../../interfaces/common"
import Image from "next/image";

interface IData extends Ititle{
    list:(Ititle & IImage)[]
}

const HearFromUs = () => {
    const divident = Math.ceil(data.list.length/3)
    console.log({data},)
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:0,
        pauseOnHover:true,
        cssEase: "linear",
        arrows: false,
        swipe: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.2,
                },
            }
        ],
    };
    const sliderItem = (item:(Ititle & IImage),i:number) => {
        return (
            <div key={`hear_from_us_${i}`}>
                <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 m-2 md:m-4">
                    <span className="sm:inline-block hidden min-w-[84px]">
                        <Image src={`/e-learning/images/unlock.webp`} alt={item.image} width={84} height={84} />
                    </span>
                    <p className="font-extralight text-md ">{item.title}</p>
                </div>
            </div>
        )
    }
    return(
        <section className="bg-gray-100 py-10 lg:py-15">
            <div className="container mx-auto lg:px-0 px-4">
                <h2 className="text-4xl lg:text-5xl text-center font-bold">{data.title}</h2>
                <p className={`font-extralight text-lg text-center mt-2 md:whitespace-pre-line`}>{data.description}</p>
            </div>
            <Slider {...settings} className="mt-8">
                {data.list?.map((item:Ititle & IImage,i:number)=>(
                    i <= divident && sliderItem(item,i)
                ))}
            </Slider>
            <Slider {...settings} slidesToScroll={-1}>
                {data.list?.map((item:Ititle & IImage,i:number)=>(
                    i > divident && i<= (divident*2) && sliderItem(item,i)
                ))}
            </Slider>
            <Slider {...settings}>
                {data.list?.map((item:Ititle & IImage,i:number)=>(
                    i > (divident*2) && sliderItem(item,i)
                ))}
            </Slider>

        </section>
    )
}

export default HearFromUs
const data:IData = {
    title:'Hear from our learners',
    description:`Discover how our courses have helped learners enhance their skills, 
    advance careers, and unlock new opportunities.`,
    list:[
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        }
        ,{
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        },
        {
            title:'Edumile’s interactive content and sup made online learning enjoyable and rewarding. - @mervincobb01',
            image:`/e-learning/images/hear.webp`,
            image_alt:'alt'
        }
    ]
}
