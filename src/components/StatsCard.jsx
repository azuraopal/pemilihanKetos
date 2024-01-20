const colorVariants = {
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
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
