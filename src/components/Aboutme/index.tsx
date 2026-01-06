import Image from "next/image"
import SectionHeader from "../molecules/SectionHeader"
import ContentBoxComponent from "../molecules/ContentBox"
import { Technologies } from "@/enums"
import TechnologyCard from "../atoms/TechnologyCard"

const Aboutme = () => {
    return <section id="aboutme" className="group flex flex-col items-center gap-10 px-20 mb-32">
        <SectionHeader imgSrc="/aboutme.gif" title="ABOUT ME" />
        <div className="flex flex-col gap-10 w-full p-5 backdrop-blur-md rounded border border-chrome-gray">
            <div className="flex gap-10">
                <Image
                    src={'https://github.com/rafae1-afonso.png'}
                    alt="profile pic"
                    width={250} height={0}
                    className="rounded border-2 border-chrome-gray"
                />
                <div className="flex flex-col items-start text-lg py-2 gap-2">
                    <p className="flex items-center scrollHidden"><span className="text-sm text-chrome-light-gray font-bold font-2p">NAME:</span> RAFAEL AFONSO FERREIRA DE LIMA</p>
                    <p className="flex items-center scrollHidden"><span className="text-sm text-chrome-light-gray font-bold font-2p">NATIONALITY:</span> BRAZILIAN</p>
                    <p className="flex items-center scrollHidden"><span className="text-sm text-chrome-light-gray font-bold font-2p">ROLE:</span> WEB DEVELOPER</p>
                    <p className="text-start scrollHidden">
                        <span className="text-sm text-chrome-light-gray font-bold font-2p">ABOUT:</span>
                        I&apos;m a web developer focused on building clean, responsive user interfaces with <strong>React</strong> and <strong>Next.js</strong>,
                        I also have experience with <strong>Node.js</strong> and <strong>Express</strong> on the back end.
                        Currently I&apos;m seeking opportunities for an internship/junior position or a freelance project.    
                    </p>
                </div>
            </div>
            <div className='border-b-2'></div>
            <ContentBoxComponent title="TECHNOLOGIES">
                <div className='flex flex-wrap gap-5 items-center justify-center'>
                    {
                        Object.values(Technologies).map(tech => <TechnologyCard key={tech} technology={tech} />)
                    }
                </div>
            </ContentBoxComponent>
            <div className='border-b-2'></div>
            <ContentBoxComponent title="SCHOOL">
                    in progress
            </ContentBoxComponent>
            <div className='border-b-2'></div>
            <ContentBoxComponent title="EXPERIENCES">
                    not found
            </ContentBoxComponent>
        </div>
    </section>
}

export default Aboutme