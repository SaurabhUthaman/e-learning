'use client';
import { ICTA, IImage, Ititle } from "../../../interfaces/common";
import HearFromUs from "../../../components/layout/Home/HearFromUs";
import HomeFaqs from "../../../components/layout/Home/HomeFaqs";
import WhoWeAre from "../../../components/layout/AboutUs/WhoWeAre";

const HomePage = () => {
    return (
        <>
        <section className={`lg:py-15 py-10 lg:px-0 px-4 gap-5 container mx-auto`}>
            <h1 className="text-4xl lg:text-5xl lg:text-[60px] text-center leading-[1.1] 2xl:text-[70px] font-bold whitespace-pre-line">{title.title}</h1>
            <p className={`font-extralight text-md md:text-xl mt-5 text-center lg:whitespace-pre-line`}>{title.description}</p>
        </section>
        <WhoWeAre data={data} />
        <HearFromUs />
        <HomeFaqs />
        </>
    );
}

export default HomePage;
interface IUnlock extends Ititle, ICTA, IImage {}
const title:Ititle = {
    title:`Skills made simple, 
Learning made accessible`,
    description:`Discover knowledge, learn from experts, and achieve goals with 
engaging, live, and interactive learning experiences.`,
}
const data:IUnlock = {
    title:`Who we are`,
    description:`At Edumile, we believe learning should be accessible to everyone. Our mission is to make skill development simple, flexible, and effective, empowering learners to achieve their goals on their own terms. With a wide range of courses and tools, we bring quality education to your fingertips—anytime, anywhere.

Our name reflects our commitment to helping you take bold strides toward your educational goals. Whether you’re a working professional, a student, or a lifelong learner, we’re here to support your journey.`,
    cta_url:"/",
    cta_name:"Explore Courses",
    image:'/e-learning/images/WhoWeAre.webp',
    image_alt:'image',
}