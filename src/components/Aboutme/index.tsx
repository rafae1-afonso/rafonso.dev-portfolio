import Image from "next/image"
import SectionHeader from "../molecules/SectionHeader"
import ContentBoxComponent from "../molecules/ContentBox"
import { Technologies } from "@/enums"
import TechnologyCard from "../atoms/TechnologyCard"
import Link from "next/link"
import StatsBar from "../atoms/StatsBar"
import Experience from "../molecules/Experience"

const Paragraph = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return <p className="text-start scrollHidden text-lg">
        <span className="text-sm text-chrome-light-gray font-bold font-2p">{title}:</span>
        {children}
    </p>
}

const Aboutme = () => {
    return <section id="aboutme" className="group flex flex-col items-center gap-10 lg:px-20 mb-32">
        <SectionHeader imgSrc="/aboutme.gif" title="ABOUT ME" />
        <div className="flex flex-col gap-10 w-full p-5 backdrop-blur-md rounded border border-chrome-gray">
            <div className="flex flex-col items-center lg:flex-row gap-10">
                <Image
                    src={'https://github.com/rafae1-afonso.png'}
                    alt="profile pic"
                    width={250} height={0}
                    className="rounded border-2 border-chrome-gray"
                />
                <div className="flex flex-col items-start text-lg py-2 gap-2">
                    <Paragraph title="NAME">
                        RAFAEL AFONSO FERREIRA DE LIMA
                    </Paragraph>
                    <Paragraph title="NATIONALITY">
                        BRAZILIAN
                    </Paragraph>
                    <Paragraph title="ROLE">
                        WEB DEVELOPER
                    </Paragraph>
                    <Paragraph title="ABOUT">
                        I&apos;m a web developer focused on building clean, responsive user interfaces with
                        <strong> React</strong> and <strong>Next.js</strong>,
                        I also have experience with <strong>Node.js</strong> and <strong>Express</strong> on the back end.
                        Currently I&apos;m seeking opportunities for an internship/junior position or a freelance project.
                    </Paragraph>
                </div>
            </div>

            <div className="flex justify-center font-2p">
                <div className="flex gap-5 flex-col items-center px-12 py-6 bg-black/50 rounded">
                    <h1 className="text-sm">ENGLISH LEVEL</h1>
                    <StatsBar level={3} />
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
            <ContentBoxComponent title="EDUCATION">
                <ul className="w-full px-5 gap-10 text-lg flex flex-col items-start list-disc">
                    <li>Last high school year in progress (end estimated date: end of 2026)</li>
                    <li>
                        <strong>React.js | Next.js | Node.js | MySQL</strong> courses completed on the <Link className="link underline font-bold" target="_blank" href={'https://cursos.alura.com.br/user/rafae1-af0nso/fullCertificate/1593bc3353d0642010b187e92f90b8f3'}>Alura platform</Link>
                    </li>
                </ul>
            </ContentBoxComponent>
            <div className='border-b-2'></div>
            <ContentBoxComponent title="EXPERIENCES">
                <Experience company="Dev Codes" date="JULY 2025 - OCTOBER 2025" role="Volunteer Front-End Developer">
                    <li>Development of an online restaurant menu platform using Figma provided by the
                        designer, utilizing <strong>React</strong> for better reuse of styled components with <strong>Styled
                        Components</strong>.
                    </li>
                    <li>Frontend integration with the backend to obtain data from the <strong>REST API</strong>.</li>
                </Experience>
            </ContentBoxComponent>
        </div>
    </section>
}

export default Aboutme