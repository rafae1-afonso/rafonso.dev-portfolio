import database from "@/database"
import SectionHeader from "../molecules/SectionHeader"
import Link from "next/link"
import ProjectCard from "../atoms/ProjectCard"

const Projects = () => {
    return <>
        <section id="projects" className="group flex flex-col items-center gap-10 px-20">
            <SectionHeader imgSrc="/projects.gif" title="PROJECTS" />
            <div className="h-full flex flex-wrap justify-center items-center gap-10">
                {
                    database.projects.map(project =>
                        <Link key={project.id} href={`/${project.routeName}`}>
                            <ProjectCard
                                borderStyling={project.cardBorderStyle && project.cardBorderStyle}
                                thumbnailSrc={project.thumbnail}
                                title={project.title}
                            />
                        </Link>
                    )
                }
            </div>
        </section>
    </>
}

export default Projects