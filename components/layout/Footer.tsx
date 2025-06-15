import Image from "next/image"
import Link from "next/link"
import { ICTA, IImage, Ititle } from "../../interfaces/common"


interface IData extends IImage{
    description:string
    link:string,
    links:(Ititle &{
        list:ICTA[]
    })[],
    copyright:string,
    static_links:ICTA[]
}
const Footer = () => {
    return(
        <footer className="bg-gray-100 py-10 lg:py-15 lg:px-0 px-4">
            <div className="mx-auto container flex items-start justify-between flex-wrap lg:flex-nowrap gap-5 md:gap-8">
                <div className="w-full lg:w-[30%]">
                    <Link href={`/`} className="block">
                        <Image src={data.image} alt={data.image_alt} width={214} height={66} />
                    </Link>
                    <p className="font-light text-lg mt-2">{data.description}</p>
                </div>
                <ul className="lg:flex grid grid-cols-2 gap-5 lg:gap-15 w-full lg:w-max">
                    {data.links?.map((list:Ititle &{list:ICTA[]},i:number)=>(
                        <li key={`footer_nav_${i}`} className="">
                            <ul className="grid grid-cols-1 gap-2 md:gap-3">
                                <li className="font-semibold text-lg md:text-xl">{list.title}</li>
                                {list.list.map((item:ICTA,j:number)=>(
                                    <li  key={`footer_nav_links_${i}_${j}`}>
                                        <Link className="block font-light text-md" href={item.cta_url}>{item.cta_name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mx-auto container flex-wrap lg:flex-nowrap flex items-start justify-between md:pt-10 border-t border-black/10 mg:mt-10 pt-8 mt-8">
                <p className="font-light text-md w-full">{data.copyright}</p>
                <ul className="items-center mt-5 lg:mt-0 gap-2 md:gap-4 lg:gap-10 lg:flex grid grid-cols-2 w-full lg:w-max">
                    {data.static_links.map((item:ICTA,j:number)=>(
                        <li  key={`footer_static_links_${j}`}>
                            <Link className="block font-light text-md whitespace-nowrap" href={item.cta_url}>{item.cta_name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer

const data:IData = {
    image:'/images/logo.svg',
    image_alt:'logo',
    link:'/',
    description:'Our mission is to provide accessible, affordable, and impactful learning, empowering learners to achieve goals with expert support.',
    links:[
        {
            title:'Quick links',
            list:[
                {
                    cta_name:'About Us',
                    cta_url:'/about-us',
                },
                {
                    cta_name:'Courses',
                    cta_url:'/courses',
                },
                {
                    cta_name:'Contact Us',
                    cta_url:'/contact-us',
                },
                {
                    cta_name:'Mentors',
                    cta_url:'/mentors',
                }
            ]
        },
        {
            title:'Knowledge',
            list:[
                {
                    cta_name:`FAQ's`,
                    cta_url:'/faq',
                },
                {
                    cta_name:'Blogs',
                    cta_url:'/blogs',
                }
            ]
        },
        {
            title:'Top Coureses',
            list:[
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                }
            ]
        },
        {
            title:'Blogs',
            list:[
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                },
                {
                    cta_name:`SEO Essentials`,
                    cta_url:'/courses/seo-essentials',
                }
            ]
        }
    ],
    static_links:[
        {
            cta_name:'Privacy Policy',
            cta_url:'/privacy-policy',
        },
        {
            cta_name:'Cookie Policy',
            cta_url:'/cookie-policy',
        },
        {
            cta_name:'Terms & Condition',
            cta_url:'/terms-condition',
        },
        {
            cta_name:'Disclaimer',
            cta_url:'/disclaimer',
        }
    ],
    copyright:'© Copyright 2025, All Rights Reserved by E-learning'
}