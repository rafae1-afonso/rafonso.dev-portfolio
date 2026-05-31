import database from "@/database"
import SectionHeader from "../../molecules/SectionHeader"
import { useLanguage } from "@/context/LanguageContext"
import TechnologyCard from "../../atoms/TechnologyCard"

import Link from "next/link";

import { FaExternalLinkAlt } from "react-icons/fa";
import TiltedImageCard from "../../atoms/TiltedImageCard";
import { htmlStringToReactNodes } from "@/lib/utils";

const LinkComponent = ({ children, href, download, target, extraStyle }: { children: React.ReactNode, href: string, download?: boolean, target?: string, extraStyle?: string }) => {
    return <Link download={download} href={href} target={target} className={`duration-200 flex px-1 items-center gap-2 font-2p text-xs text-start lg:text-sm cursor-pointer hover:shadow-[0_0_5px_white] hover:bg-white hover:text-black ${extraStyle || ''}`}>
        {children}
    </Link>
}

const Projects = () => {
    const { language } = useLanguage()

    return <>
        <section id="projects" className="flex flex-col items-center gap-10 px-5 lg:px-20">
            <SectionHeader imgSrc="/projects.gif" title={`${database.projects.header[language]} [${database.projects.projectsList.length}]`} />
            <div className="h-full flex flex-col justify-center items-center px-10 gap-10">
                {
                    database.projects.projectsList.map(project => (
                        <div key={project.name} className="group w-full flex flex-col items-center gap-2 border-b-2 pb-10 mb-15">
                            <div className="flex lg:flex-row lg:gap-0 gap-5 flex-col-reverse mb-3 w-full justify-between px-30 lg:px-0">
                                <h1 className="duration-200 px-5 font-2p text-center lg:text-start text-sm lg:text-lg
                         bg-white group-hover:shadow-[0_0_10px_white] text-black">
                                    {project.name}
                                </h1>
                                <h1 className="font-2p border-b-2 border-white border-dashed">{project.year}</h1>
                            </div>
                            <div className="flex flex-wrap items-start justify-center gap-5 my-5">
                                {
                                    project.images.map(image => (
                                        <TiltedImageCard
                                            key={image}
                                            imageSrc={image}
                                            altText={project.name}
                                        />
                                    ))
                                }
                            </div>
                            <div className="px-10 lg:px-0">
                                <p className="px-18 lg:px-0 items-start text-start">
                                    {htmlStringToReactNodes(project.description[language])}
                                </p>
                                <div className="w-full flex flex-wrap justify-start gap-5 mt-5 px-20 lg:px-0">
                                    {
                                        project.stack.map(tech => (
                                            <TechnologyCard key={tech} technology={tech} />
                                        ))
                                    }
                                </div>
                                <div className="w-full flex flex-wrap justify-start gap-5 mt-5 px-20 lg:px-0">
                                    {
                                        project.links.map(link => (
                                            <LinkComponent key={link.href} href={link.href} target="_blank">
                                                <FaExternalLinkAlt size={15} /> {link.content[language]}
                                            </LinkComponent>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
}

export default Projects