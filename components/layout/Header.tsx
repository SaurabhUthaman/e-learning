'use client'
import Image from "next/image";
import { ICTA } from "../../interfaces/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    return(
        <header className="header sticky top-4 flex items-center justify-between m-4 z-10 px-8 py-2 2xl:py-4 2xl:px-10 rounded-full bg-gray-200 container mx-auto 2xl">
            <Image src="/e-learning/images/logo.svg" alt="Logo" width={214} height={66} />
            <nav className="lg:flex hidden items-center justify-between gap-10">
                {data.links.map((link: ICTA, i: number) => (
                    <Link key={`nav_links_${i}`} className={`relative ${pathName == link.cta_url ? 'font-bold' : 'font-medium'} hover:scale-110 inline-block text-black text-lg header-links  group transition-all duration-300`} href={link.cta_url}>
                        {link.cta_name}
                        <span className="absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 group-hover:w-[60%]"></span>
                    </Link>
                ))}
            </nav>
        </header>
    )
}
export default Header;

interface IData{
    logo: string;
    cta_url: string;
    links: ICTA[];
}
const data:IData = {
    logo:"/e-learning/images/logo.svg",
    cta_url:"/",
    links:[
        {
            cta_name:"Home",
            cta_url:"/"
        },
        {
            cta_name:"About Us",
            cta_url:"/about-us"
        },
        {
            cta_name:"Blogs",
            cta_url:"/blogs"
        },
        {
            cta_name:"Courses",
            cta_url:"/courses"
        },
        {
            cta_name:"Contact Us",
            cta_url:"/contact-us"
        },
        {
            cta_name:"Mentors",
            cta_url:"/mentors"
        },
        {
            cta_name:"FAQ",
            cta_url:"/faq"
        }
    ]
}