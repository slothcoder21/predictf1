"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { Flag } from "lucide-react"

export function CircuitPreview({ circuit }) {
  const { theme } = useTheme()

  return (
    <Card
      className={`${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-200"} overflow-hidden`}
    >
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={circuit.image || "/placeholder.svg"}
            alt={circuit.name}
            width={300}
            height={150}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold">{circuit.name}</h3>
              <div className="flex items-center text-white/80 text-xs">
                <Flag className="h-3 w-3 mr-1" />
                {circuit.country}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

