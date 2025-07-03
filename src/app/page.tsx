import Image from "next/image";
import Link from "next/link";
import { ICTA, IImage, Ititle } from "../../interfaces/common";
import { ICourseCard } from "../../interfaces/courses";
import FeaturedCourse from "../../components/layout/Home/FeaturedCourse";
import TopCourses from "../../components/layout/Home/TopCourses";
import UnlockingKnowledge from "../../components/layout/Home/UnlockingKnowledge";
import JourneyMadeSimple from "../../components/layout/Home/JourneyMadeSimple";
import HearFromUs from "../../components/layout/Home/HearFromUs";
import HomeFaqs from "../../components/layout/Home/HomeFaqs";

const HomePage = () => {
    return (
        <>
        <section className={`py-10 flex-wrap lg:px-0 px-4 lg:flex-nowrap flex items-center justify-between gap-5 container mx-auto`}>
            <div className={`lg:max-w-[600px] flex flex-col gap-5`}>
                <h1 className="text-4xl lg:text-5xl lg:text-[60px] leading-[1.1] 2xl:text-[70px] font-bold">Advance your engineering skills with us.</h1>
                <p className={`font-extralight text-lg`}>Explore a wide range of professional and personal development courses. Gain the skills you need to succeed in your career and thrive in life. Start learning today!</p>
                <Link href="/courses" className="inline-block bg-secondary text-black px-6 py-3 text-lg rounded-[80px] font-semibold w-max">
                    Explore Courses
                </Link>
            </div>
            <Image src={`/images/hero-banner.webp`} alt="Hero Image" width={550} height={720} className="rounded-lg"/>
        </section>
        <FeaturedCourse cources={cources} />
        <UnlockingKnowledge data={data} />
        <TopCourses data={courcesData} />
        <JourneyMadeSimple />
        <HearFromUs />
        <HomeFaqs />
        </>
    );
}

export default HomePage;

interface ICourse extends Ititle {
    list: ICourseCard[];
}

const cources:ICourse = {
    title:'Our featured courses',
    description:'Our featured courses inspire growth with expert instruction and practical skills.',
    list:[
        {
            title:'SEO Essentials',
            mentor:{
                cta_name:'Robinson Ray',
                cta_url:'/mentors/robinson-ray',
            },
            category:'Marketing',
            image:`/images/course.webp`,
            price:'$88',
            lessons:"13 Lessons",
            duration:'4Hour 30 Min',
            cta_url:'/courses/seo-essentials',
            cta_name:'View Course',
            image_alt:''
        },
        {
            title:'SEO Essentials',
            mentor:{
                cta_name:'Robinson Ray',
                cta_url:'/mentors/robinson-ray',
            },
            category:'Marketing',
            image:`/images/course.webp`,
            price:'$88',
            lessons:"13 Lessons",
            duration:'4Hour 30 Min',
            cta_url:'/courses/seo-essentials',
            cta_name:'View Course',
            image_alt:''
        },
        {
            title:'SEO Essentials',
            mentor:{
                cta_name:'Robinson Ray',
                cta_url:'/mentors/robinson-ray',
            },
            category:'Marketing',
            image:`/images/course.webp`,
            price:'$88',
            lessons:"13 Lessons",
            duration:'4Hour 30 Min',
            cta_url:'/courses/seo-essentials',
            cta_name:'View Course',
            image_alt:''
        }
    ]
}
interface IDATA extends Ititle, ICTA {
    tabs:(Ititle & {list: ICourseCard[]})[]
}
interface IUnlock extends Ititle, ICTA, IImage {
    list:Ititle[],
    subData:Ititle
}
const data:IUnlock = {
    title:`Unlocking Knowledge with <span class='text-secondary font-bold whitespace-nowrap'>E-Learning</span>`,
    description:'E-Learning offers a cutting-edge learning experience designed to enhance knowledge and skills. With innovative teaching methods and personalized learning. E-Learning offers a cutting-edge learning experience designed to enhance knowledge and skills. With innovative teaching methods and personalized learning. E-Learning offers a cutting-edge learning experience designed to enhance knowledge and skills. With innovative teaching methods and personalized learning.',
    list:[
        {
            title:'500+',
            description:'BrightMind offers 500+ hours of expert courses, covering diverse subjects for growth and skill development. Join 100,000+ students and access 500+ hours of expert-led courses with BrightMind.'
        },
        {
            title:'100,000 +',
            description:'BrightMind offers 500+ hours of expert courses, covering diverse subjects for growth and skill development. Join 100,000+ students and access 500+ hours of expert-led courses with BrightMind.'
        }
    ],
    cta_url:"/",
    cta_name:"View Courses",
    image:`/images/unlock.webp`,
    image_alt:'image',
    subData:{
        title:'Average class completion rate',
        description:'94%'
    }
}
const courcesData :IDATA = {
    title:'Top courses to get you started',
    tabs:[
        {
            title:'All',
            list:[
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                }
            ]
        },
        {
            title:'Programming',
            list:[
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                }
            ]
        },
        {
            title:'Data Analytics',
            list:[
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                }
            ]
        },
        {
            title:'UI/UX Design',
            list:[
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                }
            ]
        },
        {
            title:'Graphic Design',
            list:[
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                }
            ]
        },
        {
            title:'Marketing',
            list:[
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                },
                {
                    title:'SEO Essentials',
                    mentor:{
                        cta_name:'Robinson Ray',
                        cta_url:'/mentors/robinson-ray',
                    },
                    category:'Marketing',
                    image:`/images/course.webp`,
                    price:'$88',
                    lessons:"13 Lessons",
                    duration:'4Hour 30 Min',
                    cta_url:'/courses/seo-essentials',
                    cta_name:'View Course',
                    image_alt:''
                }
            ]
        }
    ],
    cta_url:"/",
    cta_name:"View All Courses"
}