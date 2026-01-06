import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return <footer className='flex justify-center items-center gap-5 p-10 mt-32 font-2p'>
        &copy;
        <span>{new Date().getFullYear()}</span>
        <Link 
            href='https://github.com/rafae1-afonso/rafonso.dev-portfolio'
            target='_blank'
            className='link'
        >
            rafonso.dev
        </Link>
    </footer>
}

export default Footer