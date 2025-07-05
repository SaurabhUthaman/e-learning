'use client'
import Image from "next/image";
import { ICTA } from "../../interfaces/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    return(
        <header className="z-10 header sticky top-0 p-4 container mx-auto 2xl">
            <div className="px-8 py-1 2xl:py-2.5 rounded-full bg-gray-200 flex items-center justify-between">
                <Link href={''} className="block md:w-max w-[150px]">
                    <Image src="/images/logo.svg" alt="Logo" width={214} height={66} />
                </Link>
                <nav className="lg:flex hidden items-center justify-between gap-10">
                    {data.links.map((link: ICTA, i: number) => (
                        <Link key={`nav_links_${i}`} className={`relative ${pathName == link.cta_url ? 'font-bold' : 'font-medium'} hover:scale-110 inline-block text-black text-lg header-links  group transition-all duration-300`} href={link.cta_url}>
                            {link.cta_name}
                            <span className="absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 group-hover:w-[60%]"></span>
                        </Link>
                    ))}
                </nav>
            </div>
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
    logo:"/images/logo.svg",
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