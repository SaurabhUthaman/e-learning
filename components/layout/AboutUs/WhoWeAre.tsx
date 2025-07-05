import Link from "next/link"
import { ICTA, IImage, Ititle } from "../../../interfaces/common"
import Image from "next/image"

interface IData extends Ititle, ICTA, IImage {
    successSection:Ititle & {
        list:Ititle[]
    }
}
const WhoWeAre = ({ data } : { data : IData }) => {
    return(
        <section className="py-10 lg:py-15 lg:px-0 px-4 bg-gray-100">
            <div className={`mx-auto container gap-8 grid-cols-1 md:grid-cols-2 grid pb-8 mb-6 lg:pb-20 lg:mb-14 border-b border-black/10 lg:gap-15 items-start lg:items-center whitespace-pre-line flex-wrap lg:flex-nowrap justify-between`}>
                <span className="">
                    <Image src={data.image} alt={data.image_alt} width={738} height={708} className="rounded-lg w-full"/>
                </span>
                <div className={``}>
                    <h2 className="text-4xl lg:text-5xl font-bold">{data.title}</h2>
                    <p className={`font-extralight text-md md:text-lg mt-5`}>{data.description}</p>
                    <Link href={data.cta_url} className="block mt-5 lg:mt-10 bg-secondary text-black px-6 py-3 text-md md:text-lg rounded-[80px] font-semibold w-max">
                        {data.cta_name}
                    </Link>
                </div>
            </div>
            <ul className="mx-auto container lg:items-center grid gap-8 grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
                <li className="text-2xl lg:text-3xl col-span-1 lg:col-span-1 md:col-span-3 text-center lg:text-left lg:p-4 font-bold">{data.successSection.title}</li>
                {data.successSection.list.map((x,i)=>(
                    <li key={`about_success_${i}`} className={`lg:p-4 ${i < data.successSection.list.length -1  ? 'lg:border-black/10 lg:border-r' : ''}`}>
                        <h3 className="text-4xl lg:text-5xl font-bold" dangerouslySetInnerHTML={{__html:x.title}}></h3>
                        <p className={`font-extralight lg:whitespace-pre-line text-md md:text-lg mt-5`}>{x.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default WhoWeAre