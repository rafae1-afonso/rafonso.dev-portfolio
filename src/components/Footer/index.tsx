import React from 'react'

const Footer = () => {
    return <footer className='flex justify-center items-center gap-5 p-5'>
        &copy; <span>{new Date().getFullYear()}</span> rafonso.dev
    </footer>
}

export default Footer