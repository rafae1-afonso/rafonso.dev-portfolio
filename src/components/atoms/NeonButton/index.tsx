import React from 'react'

const NeonButton = ({ children, styleAdd, onClick }: { children: React.ReactNode, styleAdd?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return <button onClick={onClick} className={`
        cursor-pointer text-shadow-white duration-200
        group-hover:text-shadow-[0_0_10px_white] hover:text-shadow-[0_0_10px_white]
      group-hover:text-white hover:text-white
        group-active:duration-75 active:duration-75 group-active:opacity-0 active:opacity-0 group-active:scale-125 active:scale-125 ${styleAdd}`}>
        {children}
    </button>
}

export default NeonButton