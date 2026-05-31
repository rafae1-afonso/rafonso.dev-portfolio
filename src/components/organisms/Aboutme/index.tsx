import Image from "next/image"
import SectionHeader from "../../molecules/SectionHeader"
import ContentBoxComponent from "../../molecules/ContentBox"
import Link from "next/link"
import Experience from "../../molecules/Experience"
import { useLanguage } from "@/context/LanguageContext"
import { htmlStringToReactNodes } from "@/lib/utils"
import database from "@/database"
import { IoMdDownload } from "react-icons/io"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Paragraph = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return <p className="text-start scrollHidden text-md">
        <span className="text-sm text-chrome-light-gray font-bold font-2p">{title}:</span>
        {children}
    </p>
}

const LinkComponent = ({ children, href, download, target, extraStyle }: { children: React.ReactNode, href: string, download?: boolean, target?: string, extraStyle?: string }) => {
    return <Link download={download} href={href} target={target} className={`duration-200 flex px-0.5 items-center gap-2 font-2p text-xs cursor-pointer hover:shadow-[0_0_5px_white] hover:bg-white hover:text-black ${extraStyle || ''}`}>
        {children}
    </Link>
}


const Aboutme = () => {
    const { language } = useLanguage()

    return <section id="aboutme" className="group flex flex-col items-center gap-10 lg:px-20 mb-32">
        <SectionHeader title={database.aboutme.header[language]} />
        <div className="flex flex-col gap-10 w-full p-5 backdrop-blur-md rounded border border-chrome-gray">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center justify-center py-5 px-10 scrollHidden">
                        <Image
                            src="/aboutme.gif"
                            alt="profile pic"
                            width={100} height={0}
                            className="duration-200 hover:scale-130 hover:animate-[levitation_2s_infinite_alternate_ease-in-out]"
                        />
                    </div>
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
                    </div>
                </div>
                <div className="py-2 justify-center flex flex-col lg:flex-row lg:items-start gap-5 scrollHidden">
                    <LinkComponent href="https://www.linkedin.com/in/rafaelafonsofl" target="_blank" extraStyle="hover:text-blue-500">
                        <FaLinkedinIn size={20} /> LINKEDIN
                    </LinkComponent>
                    <LinkComponent href="https://github.com/rafae1-afonso" target="_blank" extraStyle="hover:text-purple-800">
                        <FaGithub size={20} /> GITHUB
                    </LinkComponent>
                    <LinkComponent href="/Rafael_Afonso_CV.pdf" download={true}>
                        <IoMdDownload size={20} /> {database.aboutme.resume[language]}
                    </LinkComponent>
                </div>
            </div>

            <div>
                <Paragraph title={database.aboutme.profile.aboutLabel[language]}>
                    {htmlStringToReactNodes(database.aboutme.profile.about[language])}
                </Paragraph>
            </div>

            <div className='border-b-2'></div>
            <ContentBoxComponent title={database.aboutme.education.header[language]}>
                <ul className="w-full px-5 gap-10 text-lg flex flex-col items-start list-disc">
                    {
                        database.aboutme.education.content.map((item, index) => <li key={index} className="scrollHidden">{htmlStringToReactNodes(item[language])}</li>)
                    }
                    <li><Link className="link underline font-bold scrollHidden" target="_blank" href={'https://cursos.alura.com.br/user/rafae1-af0nso/fullCertificate/1593bc3353d0642010b187e92f90b8f3'}>Alura</Link></li>
                </ul>
            </ContentBoxComponent>
            <div className='border-b-2'></div>
            <ContentBoxComponent title={database.aboutme.experiences.header[language]}>
                {
                    database.aboutme.experiences.items.map((item, index) => (
                        <Experience key={index} company={item.company} date={item.period[language]} role={item.role[language]}>
                            {
                                item.content.map((contentItem, contentIndex) => <li key={contentIndex} className="scrollHidden">{htmlStringToReactNodes(contentItem[language])}</li>)
                            }

                            <li className="flex gap-2">
                                {
                                    item.links.map((link, linkIndex) => (
                                        <Link key={linkIndex} className="link underline font-bold scrollHidden" target="_blank" href={link.href}>
                                            {link.content}
                                        </Link>
                                    ))
                                }
                            </li>

                        </Experience>
                    ))
                }
            </ContentBoxComponent>
        </div>
    </section>
}

export default Aboutme