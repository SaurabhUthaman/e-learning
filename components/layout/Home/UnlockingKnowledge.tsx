import Link from "next/link"
import { ICTA, IImage, Ititle } from "../../../interfaces/common"
import Image from "next/image"

interface IData extends Ititle, ICTA,IImage {
    list:Ititle[],
    subData:Ititle
}
const UnlockingKnowledge = ({ data } : { data : IData }) => {
    return(
        <section className={`container py-10 lg:py-15 mx-auto lg:px-0 px-4 gap-8 lg:gap-15 flex items-start whitespace-pre-line flex-wrap lg:flex-nowrap justify-between`}>
            <div className="lg:w-[40%] relative">
                <Image src={data.image} alt={data.image_alt} width={600} height={720} className="rounded-lg"/>
                <div className="absolute bottom-3.5 left-3.5 bg-white rounded-lg p-4 max-w-[200px]">
                    <p className="text-lg">{data.subData.title}</p>
                    <p className="text-3xl font-bold text-secondary">{data.subData.description}</p>
                </div>
            </div>
            <div className={`lg:w-[60%]`}>
                <h2 className="text-4xl lg:text-[50px] leading-[1.1] 2xl:text-[60px] font-bold" dangerouslySetInnerHTML={{__html:data.title}}></h2>
                <p className={`font-extralight text-md md:text-lg mt-5`}>{data.description}</p>
                <ul className="grid-cols-1 md:grid-cols-2 gap-4 grid mt-5">
                    {data.list.map((item:Ititle, i:number) => (
                        <li  key={`courses_featured_${i}`}>
                            <h3 className="font-bold text-2xl">{item.title}</h3>
                            <p className="font-light text-md md:text-lg mt-1">{item.description}</p>
                        </li>
                    ))}
                </ul>
                <Link href={data.cta_url} className="block mt-5 lg:mt-10 bg-secondary text-black px-6 py-3 text-md md:text-lg rounded-[80px] font-semibold w-max">
                    {data.cta_name}
                </Link>
            </div>
        </section>
    )
}
export default UnlockingKnowledge