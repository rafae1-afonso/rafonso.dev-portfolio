import Link from 'next/link'
import TextType from '../../atoms/TextType'
import { useLanguage } from '@/lib/LanguageContext'
import database from '@/database'

const Start = () => {
    const { language } = useLanguage()

    return <section className="group duration-1000 font-2p flex flex-col items-center gap-10 my-[45vh] cursor-default px-20">
        <div className="duration-1000 text-4xl lg:text-5xl flex justify-center items-center gap-5 group-hover:text-shadow-[0_0_10px_white]">
            <span className='hidden lg:block'>&lt;</span>
            <h1 className='mr-15'>RAFAEL <br /> <span className="ml-30">AF0NSO</span></h1>
            <span className="hidden lg:flex items-center "><span className="text-6xl ml-10">/</span>&gt;</span>
        </div>
        <TextType
            className='text-sm color-animated-text'
            text={database.start.role}
            as={'h2'}
            cursorCharacter="_"
            loop={false}
        />
    </section>
}

export default Start