const colorVariants = {
  blue: "bg-blue-400",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  green: "bg-green-400",
  red: "bg-red-400",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
}

const Card = ({ icon: Icon, count, text, color }) => {
  return (
    <>
      <div className={`flex justify-between items-center p-4 mb-6 rounded-md ${colorVariants[color]}`}>
        <div>
          <h2 className="text-2xl font-semibold text-white">{count}</h2>
          <p className="text-white/80">{text}</p>
        </div>
        <div className="text-gray-900/30 right-0">
          {Icon && <Icon size={64} />}
        </div>
      </div>
    </>
  )
}

export default Card;
