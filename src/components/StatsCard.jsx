const colorVariants = {
  blue: "bg-blue-400",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  green: "bg-green-400",
  red: "bg-red-400",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
}

const StatsCard = ({ icon: Icon, count, color, children }) => {
  return (
    <>
      <div className={`mb-6 flex items-center justify-between rounded-md p-4 ${colorVariants[color]}`}>
        <div>
          <h2 className="text-2xl font-semibold text-white">{count}</h2>
          <p className="text-white/80">
            {children}
          </p>
        </div>
        <div className="text-gray-900/30">
          {Icon && <Icon size={64} />}
        </div>
      </div>
    </>
  )
}

export default StatsCard;
