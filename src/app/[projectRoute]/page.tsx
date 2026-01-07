/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import NeonButton from '@/components/atoms/NeonButton';
import PhotoCarousel from '@/components/atoms/PhotosCarousel';
import StatsBar from '@/components/atoms/StatsBar';
import TechnologyCard from '@/components/atoms/TechnologyCard';
import Footer from '@/components/Footer';
import ContentBoxComponent from '@/components/molecules/ContentBox';
import SectionHeader from '@/components/molecules/SectionHeader';
import Navbar from '@/components/Navbar';
import TVComponent from '@/components/TVComponent';
import database from '@/database'
import { Technologies } from '@/enums';
import Link from 'next/link';
import { use, useEffect } from 'react'
import { FaServer } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';
import { TbBrandGithubFilled } from 'react-icons/tb';

const page = ({ params }: { params: Promise<{ projectRoute: string }> }) => {
    const { projectRoute } = use(params);
    const project = database.projects.find(project => project.routeName == projectRoute);

    useEffect(() => {
        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scrollShow')
                } else {
                    entry.target.classList.remove('scrollShow')
                }
            })
        })

        const scrollHiddenElements = document.querySelectorAll('.scrollHidden');
        scrollHiddenElements.forEach((element) => myObserver.observe(element));

        return () => myObserver.disconnect();
    });

    return <TVComponent>
        <Navbar homeOnly />
        <div className='mt-32'></div>
        <SectionHeader title={project?.title} />
        {
            project ?
                <div className='flex flex-col gap-16 mt-16 px-20'>
                    <div className='w-full flex gap-10 justify-center'>
                        {
                            !project.screenshots

                                ?
                                <ContentBoxComponent>
                                    I think this project don&apos;t need screenshots
                                </ContentBoxComponent>
                                : <PhotoCarousel photos={project.screenshots}></PhotoCarousel>
                        }
                    </div>
                    {
                        project.repositoryUrl &&
                        <div className='flex justify-center gap-5 font-2p'>
                            <Link href={project.repositoryUrl} target='_blank' className='flex items-center bg-chrome-gray rounded-sm py-2 px-6 border border-white border-r-3 border-b-3'>
                                <NeonButton><p className='flex items-center gap-2'><TbBrandGithubFilled size={25} /> REPOSITORY</p></NeonButton>
                            </Link>
                            {
                                project.deployUrl &&
                                <Link href={project.deployUrl} target='_blank' className='flex items-center bg-chrome-gray rounded-sm py-2 px-6 border border-white border-r-3 border-b-3'>
                                    <NeonButton><p className='flex items-center gap-2'><MdOutlineWeb size={25} /> DEPLOY</p></NeonButton>
                                </Link>
                            }
                            {
                                project.backendRepositoryUrl &&
                                <Link href={project.backendRepositoryUrl} target='_blank' className='flex items-center bg-chrome-gray rounded-sm py-2 px-6 border border-white border-r-3 border-b-3'>
                                    <NeonButton><p className='flex items-center gap-2'><FaServer size={25} /> BACKEND</p></NeonButton>
                                </Link>
                            }
                        </div>
                    }
                    <div className='flex flex-col gap-10 p-5 backdrop-blur-md rounded border border-chrome-gray'>
                        <div className="flex justify-center font-2p pt-10">
                            <div className="flex gap-5 flex-col items-center px-12 py-6 bg-black/50 rounded">
                                <h1 className="text-sm">COMPLEXITY</h1>
                                <StatsBar level={project.complexity} complexityMeter />
                            </div>
                        </div>
                        <div className='border-b-2'></div>
                        <ContentBoxComponent title='DESCRIPTION'>
                            <p className='text-lg'>
                                {project.description.english}
                            </p>
                        </ContentBoxComponent>
                        <div className='border-b-2'></div>
                        <ContentBoxComponent title='USED TECHNOLOGIES'>
                            <div className='flex flex-wrap gap-5 items-center justify-center'>
                                {
                                    project.technologies.map(tech => <TechnologyCard key={tech} technology={Technologies[tech as keyof typeof Technologies]} />)
                                }
                            </div>
                        </ContentBoxComponent>
                    </div>
                </div>
                :
                <div className='flex h-full justify-center items-center my-auto font-2p'>
                    <h2>PROJECT NOT FOUND</h2>
                </div>
        }
        <Footer />
    </TVComponent>
}

export default page