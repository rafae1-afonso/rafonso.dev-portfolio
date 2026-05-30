import { Technologies } from '@/enums';

import { FaNodeJs, FaReact, FaAngular, FaJava, FaDocker } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript, SiSpring  } from 'react-icons/si';

const TechnologyCard = ({ technology }: { technology: string }) => {

    const iconSize = 20
    const styles = {
        "JavaScript": {
            bgColor: 'bg-yellow-500',
            content: (
                <>
                    &lt; <SiJavascript size={iconSize} /> JavaScript /&gt;
                </>
            )
        },
        "TypeScript": {
            bgColor: 'bg-blue-500',
            content: (
                <>
                    &lt; <SiTypescript size={iconSize} /> TypeScript /&gt;
                </>
            )
        },
        "TailwindCSS": {
            bgColor: 'bg-teal-400',
            content: (
                <>
                    &lt; <SiTailwindcss size={iconSize} /> TailwindCSS /&gt;
                </>
            )
        },
        "NodeJS": {
            bgColor: 'bg-green-600',
            content: (
                <>
                    &lt; <FaNodeJs size={iconSize} /> NodeJS /&gt;
                </>
            )
        },
        "ReactJS": {
            bgColor: 'bg-cyan-400',
            content: (
                <>
                    &lt; <FaReact size={iconSize} /> ReactJS /&gt;
                </>
            )
        },
        "NextJS"    : {
            bgColor: 'bg-gray-800',
            content: (
                <>
                    &lt; <SiNextdotjs size={iconSize} /> NextJS /&gt;
                </>
            )
        },
        "Angular": {
            bgColor: 'bg-red-500',
            content: (
                <>
                    &lt; <FaAngular size={iconSize} /> Angular /&gt;
                </>
            )
        },
        "SpringBoot": {
            bgColor: 'bg-green-500',
            content: (
                <>
                    &lt; <SiSpring size={iconSize} /> SpringBoot /&gt;
                </>
            )
        },
        "Java": {
            bgColor: 'bg-orange-700',
            content: (
                <>
                    &lt; <FaJava size={iconSize} /> Java /&gt;
                </>
            )
        },
        "Docker": {
            bgColor: 'bg-blue-700',
            content: (
                <>
                    &lt; <FaDocker size={iconSize} /> Docker /&gt;
                </>
            )

        }
    };

    return <div className={`
        flex items-center gap-2 ${styles[technology]?.bgColor || 'bg-gray-500'} rounded-sm py-1 px-3 border border-white border-r-3 border-b-3
        text-shadow-white hover:text-shadow-[0_0_10px_current] duration-200 text-xs font-2p
    `}>
        {styles[technology]?.content || technology}
    </div>
}

export default TechnologyCard