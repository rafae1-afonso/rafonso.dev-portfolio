import { Technologies } from '@/enums';

import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaAngular } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const TechnologyCard = ({ technology }: { technology: Technologies }) => {

    const iconSize = 20
    const styles = {
        HTML: {
            bgColor: 'bg-orange-600',
            content: (
                <>
                    &lt; <FaHtml5 size={iconSize} /> HTML /&gt;
                </>
            )
        },
        CSS: {
            bgColor: 'bg-blue-400',
            content: (
                <>
                    &lt; <FaCss3Alt size={iconSize} /> CSS /&gt;
                </>
            )
        },
        JavaScript: {
            bgColor: 'bg-yellow-500',
            content: (
                <>
                    &lt; <SiJavascript size={iconSize} /> JavaScript /&gt;
                </>
            )
        },
        TypeScript: {
            bgColor: 'bg-blue-500',
            content: (
                <>
                    &lt; <SiTypescript size={iconSize} /> TypeScript /&gt;
                </>
            )
        },
        TailwindCSS: {
            bgColor: 'bg-teal-400',
            content: (
                <>
                    &lt; <SiTailwindcss size={iconSize} /> TailwindCSS /&gt;
                </>
            )
        },
        NodeJS: {
            bgColor: 'bg-green-600',
            content: (
                <>
                    &lt; <FaNodeJs size={iconSize} /> NodeJS /&gt;
                </>
            )
        },
        ReactJS: {
            bgColor: 'bg-cyan-400',
            content: (
                <>
                    &lt; <FaReact size={iconSize} /> ReactJS /&gt;
                </>
            )
        },
        NextJS: {
            bgColor: 'bg-gray-800',
            content: (
                <>
                    &lt; <SiNextdotjs size={iconSize} /> NextJS /&gt;
                </>
            )
        },
        Angular: {
            bgColor: 'bg-red-500',
            content: (
                <>
                    &lt; <FaAngular size={iconSize} /> Angular /&gt;
                </>
            )
        }
    };

    return <div className={`
        flex items-center gap-2 ${styles[technology].bgColor} rounded-sm py-2 px-6 border border-white border-r-3 border-b-3
        text-shadow-white hover:text-shadow-[0_0_10px_current] duration-200 text-sm
    `}>
        {styles[technology].content}
    </div>
}

export default TechnologyCard