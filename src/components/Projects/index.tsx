import SectionHeader from "../molecules/SectionHeader"

const Projects = () => {
    return <>
        <section id="projects" className="flex flex-col items-center gap-10 px-5 lg:px-20">
            <SectionHeader imgSrc="/projects.gif" title="PROJECTS" />
            <div className="h-full flex flex-col justify-center items-center px-10 gap-10">
                <section className="group w-full flex flex-col items-center gap-2">
                    <div className="flex lg:flex-row lg:gap-0 gap-5 flex-col-reverse mb-3 w-full justify-between">
                        <h1 className="duration-200 px-5 font-2p text-start text-sm lg:text-lg bg-white group-hover:shadow-[0_0_10px_white] text-black">[PROJECT NAME GOES HERE]</h1>
                        <h1 className="font-2p border-b-2 border-white border-dashed">COMING SOON</h1>
                    </div>
                    <p className="flex flex-col items-start text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor pariatur obcaecati tempore aperiam facere officia! Quaerat earum quia numquam modi voluptatibus doloribus, quos sit dignissimos sunt optio possimus non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint amet expedita iste repellat doloremque neque, itaque magni delectus animi architecto asperiores aut consequuntur eos, accusamus explicabo sit facere cumque?
                    </p>
                    <div></div>
                    <div></div>
                    <p></p>
                </section>
            </div>
        </section>
    </>
}

export default Projects