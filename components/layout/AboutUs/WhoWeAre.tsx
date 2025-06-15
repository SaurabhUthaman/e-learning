import Link from "next/link"
import { ICTA, IImage, Ititle } from "../../../interfaces/common"
import Image from "next/image"

interface IData extends Ititle, ICTA,IImage {

}
const WhoWeAre = ({ data } : { data : IData }) => {
    return(
        <section className="py-10 lg:py-15 lg:px-0 px-4 bg-gray-100">
            <div className={`mx-auto container gap-8 grid-cols-1 md:grid-cols-2 grid lg:gap-15 items-start lg:items-center whitespace-pre-line flex-wrap lg:flex-nowrap justify-between`}>
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
        </section>
    )
}
export default WhoWeAre