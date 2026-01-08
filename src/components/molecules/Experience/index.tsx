import React from 'react'

const Experience = ({ company, date, role, children }: { company: string, date: string, role: string, children: React.ReactNode }) => {
    return <div className="w-full flex flex-col items-start">
        <h1 className="font-2p text-start text-lg">{company}
            <span className="text-sm text-chrome-gray italic"> {date}</span>
        </h1>
        <h2 className="text-lg text-start text-chrome-light-gray italic font-bold">{role}</h2>
        <ul className="flex flex-col items-start *:text-start *:list-disc *:ml-10">
            {children}
        </ul>
    </div>
}

export default Experience