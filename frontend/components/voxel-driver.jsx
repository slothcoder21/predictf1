export function VoxelDriver({ driver }) {
    const colorMap = {
      red: "bg-red-500",
      blue: "bg-blue-600",
      teal: "bg-teal-500",
      orange: "bg-orange-500",
      green: "bg-green-600",
    }
  
    const helmetColor = colorMap[driver.color] || "bg-gray-500"
  
    return (
      <div className="relative w-32 h-32 mx-auto">
        {/* Driver voxel representation */}
        <div className="absolute top-0 left-0 right-0 mx-auto w-full h-full flex flex-col items-center">
          {/* Helmet */}
          <div className={`w-16 h-12 ${helmetColor} rounded-t-lg relative`}>
            {/* Visor */}
            <div className="absolute top-4 left-2 right-2 h-4 bg-black rounded"></div>
            <div className="absolute top-4 left-3 right-3 h-2 bg-cyan-400 rounded opacity-50"></div>
  
            {/* Helmet details */}
            <div className="absolute top-0 left-0 w-full h-2 bg-white opacity-20"></div>
            <div className="absolute top-2 right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
  
          {/* Racing suit */}
          <div className={`w-12 h-16 ${helmetColor.replace("500", "700").replace("600", "800")} relative`}>
            {/* Suit details */}
            <div className="absolute top-0 left-2 right-2 h-4 bg-white opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-12 h-2 bg-black"></div>
          </div>
  
          {/* Arms */}
          <div className="absolute top-12 left-1 w-3 h-10 bg-gray-800 transform -rotate-15"></div>
          <div className="absolute top-12 right-1 w-3 h-10 bg-gray-800 transform rotate-15"></div>
  
          {/* Legs */}
          <div className="absolute bottom-0 left-3 w-4 h-8 bg-gray-800"></div>
          <div className="absolute bottom-0 right-3 w-4 h-8 bg-gray-800"></div>
        </div>
  
        {/* Driver name */}
        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs font-bold">{driver.name.split(" ")[0]}</div>
      </div>
    )
  }
  
  