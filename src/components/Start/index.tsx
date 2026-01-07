import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import TextType from '../TextType'
import { TbFileCv } from 'react-icons/tb'

const Start = () => {
    return <section className="group duration-1000 font-2p flex flex-col items-center gap-10 my-[38vh] cursor-default px-20">
        <TextType
            className='text-sm color-animated-text'
            text="Web Developer"
            as={'h2'}
            cursorCharacter="_"
            loop={false}
        />
        <div className="duration-1000 text-4xl lg:text-5xl flex justify-center items-center gap-5 group-hover:text-shadow-[0_0_10px_white]">
            <span className='hidden lg:block'>&lt;</span>
            <h1 className='mr-15'>RAFAEL <br /> <span className="ml-30">AF0NSO</span></h1>
            <span className="hidden lg:flex items-center "><span className="text-6xl ml-10">/</span>&gt;</span>
        </div>
        <div className="flex gap-10">
            <Link
                href='https://www.linkedin.com/in/rafaelafonsofl'
                target="_blank"
                className="duration-200 text-blue-400 hover:opacity-50 animate-[levitation_1s_infinite]"
            >
                <FaLinkedinIn size={45} />
            </Link>
            <Link
                href=''
                className="duration-200 text-gray-400 hover:opacity-50 animate-[levitation_1s_infinite_reverse]"
            >
                <TbFileCv size={45} />
            </Link>
            <Link
                href='https://github.com/rafae1-afonso'
                target="_blank"
                className="duration-200 text-violet-700 hover:opacity-50 animate-[levitation_1s_infinite]"
            >
                <FaGithub size={45} />
            </Link>
        </div>
    </section>
}

export default Start