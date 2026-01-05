const Title = ({ children }: { children: string }) => {
    return <div className="duration-1000 text-xl flex justify-center items-center gap-5 group-hover:text-shadow-[0_0_10px_white]">
        <span className="text-sm">&lt;</span>
        <h1>{children}</h1>
        <span className="flex items-center text-sm"><span className="text-lg">/</span>&gt;</span>
    </div>
}

export default Title;