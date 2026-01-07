import Link from 'next/link'
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti'

const Footer = () => {
    return <footer className='flex flex-col justify-center items-center gap-15 p-10 mt-[20%] font-2p'>
        <div className='flex justify-center items-center gap-10'>
            <Link href={'https://www.linkedin.com/in/rafaelafonsofl'} target='_blank' className='icon-color-animated'>
                <TiSocialLinkedinCircular size={60}/>
            </Link>
            <Link href={'https://github.com/rafae1-afonso'} target='_blank' className='icon-color-animated'>
                <TiSocialGithubCircular size={60}/>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-5'>
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