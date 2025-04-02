"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"

export function StatsCard({ title, value, icon, description, color }) {
  const { theme } = useTheme()

  const colorMap = {
    red: {
      bg: theme === "dark" ? "bg-red-500/10" : "bg-red-50",
      border: "border-red-500",
      text: "text-red-500",
      shadow: "shadow-red-500/20",
    },
    blue: {
      bg: theme === "dark" ? "bg-blue-500/10" : "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-500",
      shadow: "shadow-blue-500/20",
    },
    green: {
      bg: theme === "dark" ? "bg-green-500/10" : "bg-green-50",
      border: "border-green-500",
      text: "text-green-500",
      shadow: "shadow-green-500/20",
    },
  }

  const colors = colorMap[color]

  return (
    <Card
      className={`${colors.bg} border-2 ${colors.border} ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg hover:shadow-xl transition-shadow duration-200 pixel-card`}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium pixel-font">{title}</CardTitle>
        <div className={`p-2 rounded-md ${colors.bg}`}>
          <div className={colors.text}>{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold pixel-font">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>

      <style jsx global>{`
        .pixel-card {
          image-rendering: pixelated;
          transition: all 0.2s ease;
        }
        
        .pixel-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </Card>
  )
}

