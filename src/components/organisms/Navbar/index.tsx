import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useLenis } from '@/context/LenisContext'
import database from '@/database'

const Navbutton = ({ href, download, children }: { href: string, download?: boolean, children: React.ReactNode }) => {
    const { lenis } = useLenis()

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (download || !href.startsWith('#')) return;

        const target = document.querySelector(href) as HTMLElement | null

        if (target && lenis?.scrollTo) {
            event.preventDefault()
            lenis.scrollTo(target, {
                duration: 1,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
            })
        }
    }

    return <a href={href} download={download} onClick={handleClick} className='duration-200 hover:text-shadow-[0_0_10px_white] active:brightness-50'>
        {children}
    </a>
}

const Navbar = () => {
    const { language, setLanguage } = useLanguage()

    return <nav className='duration-1000 absolute flex gap-5 text-xs left-[50%] translate-x-[-50%] top-[10%] lg:left-[6%] lg:translate-x-0 rounded backdrop-blur-sm px-1 py-2 z-20 font-2p'>
        
                <Navbutton href="#start">
                    {database.navbar.home[language]}
                </Navbutton>

                <Navbutton href="#aboutme">
                    {database.navbar.about[language]}
                </Navbutton>
                <Navbutton href="#projects">
                    {database.navbar.projects[language]}
                </Navbutton>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'pt')}
                    className='bg-transparent text-white border-none outline-none cursor-pointer'
                >
                    <option value="en" className='bg-black'>EN</option>
                    <option value="pt" className='bg-black'>PT</option>
                </select>
    </nav>
}

export default Navbar