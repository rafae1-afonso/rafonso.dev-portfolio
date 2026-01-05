import Title from '@/components/atoms/Title'
import Image from 'next/image'

const SectionHeader = ({ imgSrc = '', title = '(title goes here)' }: { imgSrc?: string, title?: string }) => {
    return <div className="w-full flex justify-between items-center">
        <Image src={imgSrc} alt="about me icon" width={80} height={0} />
        <Title>{title}</Title>
        <Image src={imgSrc} alt="about me icon" width={80} height={0} />
    </div>
}

export default SectionHeader