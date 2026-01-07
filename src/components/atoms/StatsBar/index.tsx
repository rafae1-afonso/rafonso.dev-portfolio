const StatsBar = ({ level = 0, complexityMeter}: { level?: number, complexityMeter?: boolean }) => {
    let levelColor = ''
    switch(level) {
        case 1:
            levelColor = complexityMeter ? 'bg-green-500' : 'bg-red-400'
            break
        case 2:
            levelColor = 'bg-yellow-200'
            break
        case 3:
            levelColor = complexityMeter ? 'bg-red-400' : 'bg-lime-300'
            break
        case 4:
            levelColor = 'bg-green-500'
            break
        default:
            levelColor = 'bg-gray-900'

    }

    return <div className="flex gap-2 items-center justify-start">
        <div className={level >= 1 ? `${levelColor} w-15 h-1.5` : "bg-gray-900 w-15 h-1.5"} />
        <div className={level >= 2 ? `${levelColor} w-15 h-1.5` : "bg-gray-900 w-15 h-1.5"} />
        <div className={level >= 3 ? `${levelColor} w-15 h-1.5` : "bg-gray-900 w-15 h-1.5"} />
        {!complexityMeter && <div className={level >= 4 ? `${levelColor} w-15 h-1.5` : "bg-gray-900 w-15 h-1.5"} />}
    </div>
}

export default StatsBar