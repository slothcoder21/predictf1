"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PixelCar } from "@/components/pixel-car"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Checkered pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmZmZmIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>

      {/* Racing track */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-700 border-t-4 border-b-4 border-yellow-400"></div>
      <div className="absolute bottom-16 left-0 right-0 h-2 bg-white"></div>
      <div className="absolute bottom-14 left-0 right-0 h-2 bg-white"></div>

      {/* Animated cars */}
      <div className="absolute bottom-8 animate-[car1_15s_linear_infinite]">
        <PixelCar color="red" />
      </div>
      <div className="absolute bottom-8 animate-[car2_12s_linear_infinite]">
        <PixelCar color="blue" />
      </div>
      <div className="absolute bottom-8 animate-[car3_18s_linear_infinite]">
        <PixelCar color="green" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 pixel-font">
            <span className="text-red-500">PIXEL</span>
            <span className="text-white">F1</span>
            <span className="text-blue-500">RACING</span>
          </h1>
          <p className="text-xl text-gray-300 pixel-font">The ultimate retro F1 experience</p>
        </div>

        <div className="w-full max-w-md bg-gray-800 border-4 border-gray-700 rounded-lg p-8 shadow-[0_0_10px_rgba(255,255,255,0.1)] pixel-border">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white pixel-font">Ready to Race?</h2>
              <p className="text-gray-400 mt-2">Sign in to continue your F1 journey</p>
            </div>

            <div className="space-y-4">
              <Link href="/login">
                <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold pixel-button">
                  LOGIN
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold pixel-button"
                >
                  REGISTER
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-lg mt-4 animate-pulse pixel-button">
                  START YOUR ENGINE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pixel art style */}
      <style jsx global>{`
        .pixel-font {
          font-family: 'Press Start 2P', system-ui, sans-serif;
          letter-spacing: 1px;
          line-height: 1.4;
        }
        
        .pixel-border {
          box-shadow: 
            0 0 0 4px rgba(255,255,255,0.1),
            0 0 0 8px rgba(0,0,0,0.2);
        }
        
        .pixel-button {
          image-rendering: pixelated;
          transition: all 0.1s ease;
        }
        
        .pixel-button:hover {
          transform: translateY(-2px);
        }
        
        .pixel-button:active {
          transform: translateY(1px);
        }
        
        @keyframes car1 {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes car2 {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes car3 {
          0% { transform: translateX(-300px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
      `}</style>
    </div>
  )
}

