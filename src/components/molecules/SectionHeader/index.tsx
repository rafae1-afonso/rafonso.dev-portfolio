import Title from '@/components/atoms/Title'
import Image from 'next/image'

const SectionHeader = ({ imgSrc, title = '(title goes here)' }: { imgSrc?: string, title?: string }) => {
    return <div className={
            imgSrc ? "w-full flex justify-center lg:justify-between items-center" : "w-full flex justify-center items-center"
        }>
        {imgSrc && <Image src={imgSrc} alt="about me icon" width={80} height={0} className='hidden lg:block' />}
        <Title>{title}</Title>
        {imgSrc && <Image src={imgSrc} alt="about me icon" width={80} height={0} className='hidden lg:block' />}
    </div>
}

export default SectionHeader