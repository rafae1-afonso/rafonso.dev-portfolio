import Image from "next/image"
import SectionHeader from "../molecules/SectionHeader"
import ContentBoxComponent from "../molecules/ContentBox"
import { Technologies } from "@/enums"
import TechnologyCard from "../atoms/TechnologyCard"
import Link from "next/link"
import Experience from "../molecules/Experience"
import { useState } from "react"
import { useLanguage } from "@/lib/LanguageContext"
import { htmlStringToReactNodes } from "@/lib/utils"
import database from "@/database"
import { IoMdDownload } from "react-icons/io"

const Paragraph = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return <p className="text-start scrollHidden text-lg">
        <span className="text-sm text-chrome-light-gray font-bold font-2p">{title}:</span>
        {children}
    </p>
}

const DownloadResume = ({ children }: { children: React.ReactNode }) => {
    return <Link download href="/Rafael_Afonso_CV.pdf" className='duration-200 flex items-center gap-3 font-2p text-sm lg:text-lg cursor-pointer hover:shadow-[0_0_10px_white] hover:bg-white hover:text-black'>
        {children}
    </Link>
}


const Aboutme = () => {
    const [techIsVisible, setTechIsVisible] = useState(false)
    const { language } = useLanguage()

    return <section id="aboutme" className="group flex flex-col items-center gap-10 lg:px-20 mb-32">
        <SectionHeader imgSrc="/aboutme.gif" title={database.aboutme.header[language]} />
        <div className="flex flex-col gap-10 w-full p-5 backdrop-blur-md rounded border border-chrome-gray">
            <div className="flex flex-col items-center lg:flex-row gap-10">
                <Image
                    src={'https://github.com/rafae1-afonso.png'}
                    alt="profile pic"
                    width={250} height={0}
                    className="rounded border-2 border-chrome-gray"
                />
                <div className="flex flex-col items-start text-lg py-2 gap-2">
                    <Paragraph title={database.aboutme.profile.nameLabel[language]}>
                        RAFAEL AFONSO FERREIRA DE LIMA
                    </Paragraph>
                    <Paragraph title={database.aboutme.profile.nationalityLabel[language]}>
                        {database.aboutme.profile.nationality[language]}
                    </Paragraph>
                    <Paragraph title={database.aboutme.profile.roleLabel[language]}>
                        {database.aboutme.profile.role[language]}
                    </Paragraph>
                    <Paragraph title={database.aboutme.profile.aboutLabel[language]}>
                        {htmlStringToReactNodes(database.aboutme.profile.about[language])}
                    </Paragraph>
                </div>
            </div>

            <div className='border-b-2'></div>
            <ContentBoxComponent title={database.aboutme.education.header[language]}>
                <ul className="w-full px-5 gap-10 text-lg flex flex-col items-start list-disc">
                    {
                        database.aboutme.education.content.map((item, index) => <li key={index}>{htmlStringToReactNodes(item[language])}</li>)
                    }
                    <li><Link className="link underline font-bold" target="_blank" href={'https://cursos.alura.com.br/user/rafae1-af0nso/fullCertificate/1593bc3353d0642010b187e92f90b8f3'}>Alura</Link></li>
                </ul>
            </ContentBoxComponent>
            <div className='border-b-2'></div>
            <ContentBoxComponent title={database.aboutme.experiences.header[language]}>
                {
                    database.aboutme.experiences.items.map((item, index) => (
                        <Experience key={index} company={item.company} date={item.period[language]} role={item.role[language]}>
                            {
                                item.content.map((contentItem, contentIndex) => <li key={contentIndex}>{htmlStringToReactNodes(contentItem[language])}</li>)
                            }

                            <li className="flex gap-2">
                                {
                                    item.links.map((link, linkIndex) => (
                                        <Link key={linkIndex} className="link underline font-bold" target="_blank" href={link.href}>
                                            {link.content}
                                        </Link>
                                    ))
                                }
                            </li>

                        </Experience>
                    ))
                }
            </ContentBoxComponent>
            <div className='border-b-2'></div>
            <div className="flex flex-col items-center gap-5">
                <DownloadResume>
                    <IoMdDownload size={25} /> {database.aboutme.resume[language]}
                </DownloadResume>
            </div>
        </div>
    </section>
}

export default Aboutme