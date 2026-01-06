import Link from 'next/link'
import React from 'react'

const Navbutton = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return <a href={href} className='duration-200 hover:text-shadow-[0_0_10px_white] active:brightness-50'>
        {children}
    </a>
}

const Navbar = ({ homeOnly = false }: { homeOnly?: boolean }) => {
    return <nav className='duration-1000 absolute flex gap-5 text-xs top-[10%] left-[6%] rounded backdrop-blur-sm px-1 py-2 z-10 font-2p'>
        {
            !homeOnly ?
                <Navbutton href={'/#start'}>
                    HOME
                </Navbutton>
                :
                <Link href={'/'} className='duration-200 hover:text-shadow-[0_0_10px_white] active:brightness-50'>
                    HOME
                </Link>
        }
        {
            !homeOnly &&
            <>
                <Navbutton href={'/#aboutme'}>
                    ABOUT
                </Navbutton>
                <Navbutton href={'/#projects'}>
                    PROJECTS
                </Navbutton>
            </>
        }
    </nav>
}

export default Navbar