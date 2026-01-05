import React from 'react'

const ContentBoxComponent = ({ title, children }: { title?: string, children?: React.ReactNode }) => {
    return (
        <div className='group w-full flex flex-col items-center gap-12 p-6 rounded-lg border-2 border-chrome-gray shadow-2xl'>
            {
                title &&
                <h1 className='text-shadow-white group-hover:text-shadow-[0_0_10px_current] duration-200'>
                    &lt; {title} /&gt;
                </h1>
            }
            {children}
        </div>
    )
}

export default ContentBoxComponent;