import database from '@/database'
import { useLanguage } from '@/lib/LanguageContext'
import { htmlStringToReactNodes } from '@/lib/utils'
import Link from 'next/link'
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti'

const Footer = () => {
    const { language } = useLanguage() 

    return <footer className='flex flex-col justify-center items-center gap-15 p-10 mt-[20%]'>
        <div className='flex lg:flex-row flex-col lg:px-20 justify-between items-center gap-10 w-full animate-[opacity-anim_2s_infinite_alternate_ease-in-out]'>
            <h1 className='text-center text-5xl p-2 font-2p'>?</h1>
            <p className='text-start text-lg'>{htmlStringToReactNodes(database.aboutthisproject[language])}</p>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <Link href={'https://www.linkedin.com/in/rafaelafonsofl'} target='_blank' className='icon-color-animated'>
                <TiSocialLinkedinCircular size={60}/>
            </Link>
            <Link href={'https://github.com/rafae1-afonso'} target='_blank' className='icon-color-animated'>
                <TiSocialGithubCircular size={60}/>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-5 font-2p'>
            &copy;
            <span>{new Date().getFullYear()}</span>
            <Link
                href='https://github.com/rafae1-afonso/rafonso.dev-portfolio'
                target='_blank'
                className='link'
            >
                rafonso.dev
            </Link>
        </div>
    </footer>
}

export default Footer