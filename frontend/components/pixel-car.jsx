export function PixelCar({ color }) {
    const colorMap = {
      red: "bg-red-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
    }
  
    const carColor = colorMap[color] || "bg-gray-500"
  
    return (
      <div className="relative w-16 h-8">
        {/* Car body */}
        <div className={`absolute top-2 left-2 w-12 h-4 ${carColor}`}></div>
        <div className={`absolute top-1 left-4 w-8 h-2 ${carColor}`}></div>
        <div className={`absolute top-0 left-5 w-6 h-1 ${carColor}`}></div>
  
        {/* Wheels */}
        <div className="absolute top-6 left-2 w-3 h-2 bg-black"></div>
        <div className="absolute top-6 left-11 w-3 h-2 bg-black"></div>
  
        {/* Windows */}
        <div className="absolute top-1 left-6 w-4 h-1 bg-cyan-300"></div>
  
        {/* Details */}
        <div className="absolute top-3 left-13 w-1 h-2 bg-yellow-400"></div>
        <div className="absolute top-3 left-1 w-1 h-2 bg-yellow-400"></div>
      </div>
    )
  }
  
  