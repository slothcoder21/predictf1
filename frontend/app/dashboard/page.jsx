"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Flag, User, Clock, Settings, LogOut, Sun, Moon, Search } from "lucide-react"
import { VoxelDriver } from "@/components/voxel-driver"
import { StatsCard } from "@/components/stats-card"
import { CircuitPreview } from "@/components/circuit-preview"

// Mock data
const seasons = ["2023", "2022", "2021", "2020", "2019"]
const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing", color: "blue" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes", color: "teal" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari", color: "red" },
  { id: 4, name: "Lando Norris", team: "McLaren", color: "orange" },
  { id: 5, name: "Fernando Alonso", team: "Aston Martin", color: "green" },
]
const circuits = [
  { id: 1, name: "Monaco", country: "Monaco", image: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Silverstone", country: "United Kingdom", image: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Monza", country: "Italy", image: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Spa", country: "Belgium", image: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "Suzuka", country: "Japan", image: "/placeholder.svg?height=100&width=200" },
]

export default function DashboardPage() {
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [selectedTeam, setSelectedTeam] = useState("")
  const [driverSearch, setDriverSearch] = useState("")
  const [selectedCircuit, setSelectedCircuit] = useState(null)

  // Filter drivers based on search
  const filteredDrivers = drivers.filter((driver) => driver.name.toLowerCase().includes(driverSearch.toLowerCase()))

  // Set team based on selected driver
  useEffect(() => {
    if (selectedDriver) {
      const driver = drivers.find((d) => d.id === selectedDriver)
      if (driver) {
        setSelectedTeam(driver.team)
      }
    }
  }, [selectedDriver])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="pixel-loading">
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
          </div>
          <p className="text-white mt-4 pixel-font">LOADING DASHBOARD...</p>
        </div>

        <style jsx>{`
          .pixel-font {
            font-family: 'Press Start 2P', system-ui, sans-serif;
          }
          
          .pixel-loading {
            display: flex;
            gap: 8px;
          }
          
          .pixel {
            width: 16px;
            height: 16px;
            background-color: white;
            animation: pulse 1s infinite alternate;
          }
          
          .pixel:nth-child(2) {
            animation-delay: 0.2s;
          }
          
          .pixel:nth-child(3) {
            animation-delay: 0.4s;
          }
          
          @keyframes pulse {
            0% {
              opacity: 0.3;
              transform: scale(1);
            }
            100% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} transition-colors duration-200`}>
      {/* Header */}
      <header
        className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b px-6 py-4`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Flag className={`h-6 w-6 ${theme === "dark" ? "text-red-500" : "text-red-600"} mr-2`} />
            <h1 className="text-xl font-bold pixel-font">PIXEL F1 DASHBOARD</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>

            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 pixel-tabs">
            <TabsTrigger value="dashboard" className="pixel-font text-xs">
              DASHBOARD
            </TabsTrigger>
            <TabsTrigger value="stats" className="pixel-font text-xs">
              STATS
            </TabsTrigger>
            <TabsTrigger value="settings" className="pixel-font text-xs">
              SETTINGS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="RACES"
                value="23"
                icon={<Flag className="h-5 w-5" />}
                description="Total races in season"
                color="red"
              />
              <StatsCard
                title="DRIVERS"
                value="20"
                icon={<User className="h-5 w-5" />}
                description="Competing drivers"
                color="blue"
              />
              <StatsCard
                title="NEXT RACE"
                value="3d 4h"
                icon={<Clock className="h-5 w-5" />}
                description="Time until next race"
                color="green"
              />
            </div>

            {/* Form section */}
            <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"} pixel-border`}>
              <CardHeader>
                <CardTitle className="pixel-font text-lg">RACE INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left column */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="season" className="pixel-font text-xs">
                        SEASON
                      </Label>
                      <Select>
                        <SelectTrigger className="pixel-input">
                          <SelectValue placeholder="Select season" />
                        </SelectTrigger>
                        <SelectContent>
                          {seasons.map((season) => (
                            <SelectItem key={season} value={season}>
                              {season}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="driver" className="pixel-font text-xs">
                        DRIVER
                      </Label>
                      <div className="relative">
                        <Input
                          id="driver"
                          value={driverSearch}
                          onChange={(e) => setDriverSearch(e.target.value)}
                          placeholder="Search driver..."
                          className="pixel-input pr-10"
                        />
                        <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                      </div>

                      {driverSearch && (
                        <div
                          className={`mt-1 ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border rounded-md max-h-40 overflow-y-auto`}
                        >
                          {filteredDrivers.map((driver) => (
                            <div
                              key={driver.id}
                              className={`px-3 py-2 cursor-pointer hover:${theme === "dark" ? "bg-gray-600" : "bg-gray-200"}`}
                              onClick={() => {
                                setSelectedDriver(driver.id)
                                setDriverSearch(driver.name)
                              }}
                            >
                              {driver.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="team" className="pixel-font text-xs">
                        TEAM
                      </Label>
                      <Input
                        id="team"
                        value={selectedTeam}
                        readOnly
                        placeholder="Team auto-populates based on driver"
                        className="pixel-input bg-gray-700/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="qualifying" className="pixel-font text-xs">
                        QUALIFYING POSITION
                      </Label>
                      <Select>
                        <SelectTrigger className="pixel-input">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 20 }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              P{i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="circuit" className="pixel-font text-xs">
                        CIRCUIT
                      </Label>
                      <Select onValueChange={(value) => setSelectedCircuit(Number.parseInt(value))}>
                        <SelectTrigger className="pixel-input">
                          <SelectValue placeholder="Select circuit" />
                        </SelectTrigger>
                        <SelectContent>
                          {circuits.map((circuit) => (
                            <SelectItem key={circuit.id} value={circuit.id.toString()}>
                              {circuit.name}, {circuit.country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedCircuit && (
                      <CircuitPreview circuit={circuits.find((c) => c.id === selectedCircuit) || circuits[0]} />
                    )}

                    {selectedDriver && (
                      <div className="flex flex-col items-center mt-4 p-4 border rounded-md">
                        <h3 className="pixel-font text-sm mb-2">SELECTED DRIVER</h3>
                        <VoxelDriver driver={drivers.find((d) => d.id === selectedDriver) || drivers[0]} />
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full h-12 bg-green-600 hover:bg-green-700 pixel-button">
                  SAVE RACE INFORMATION
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"} pixel-border`}>
              <CardHeader>
                <CardTitle className="pixel-font text-lg">SEASON STATISTICS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="pixel-font text-sm">DRIVER STANDINGS</h3>
                    <div className={`p-4 ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} rounded-md`}>
                      {drivers.map((driver, index) => (
                        <div key={driver.id} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div className="flex items-center">
                            <span className="w-6 text-center font-bold">{index + 1}</span>
                            <span className="ml-2">{driver.name}</span>
                          </div>
                          <span className="font-bold">{300 - index * 50} pts</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="pixel-font text-sm">TEAM STANDINGS</h3>
                    <div className={`p-4 ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} rounded-md`}>
                      {Array.from(new Set(drivers.map((d) => d.team))).map((team, index) => (
                        <div key={team} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div className="flex items-center">
                            <span className="w-6 text-center font-bold">{index + 1}</span>
                            <span className="ml-2">{team}</span>
                          </div>
                          <span className="font-bold">{500 - index * 100} pts</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"} pixel-border`}>
              <CardHeader>
                <CardTitle className="pixel-font text-lg">RACE RESULTS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`p-4 ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} rounded-md`}>
                  {circuits.slice(0, 3).map((circuit, index) => (
                    <div key={circuit.id} className="mb-4 last:mb-0">
                      <h4 className="font-bold mb-2">{circuit.name} Grand Prix</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div
                          className={`p-2 ${theme === "dark" ? "bg-yellow-500/20" : "bg-yellow-100"} rounded flex items-center`}
                        >
                          <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                          <span>{drivers[index % drivers.length].name}</span>
                        </div>
                        <div
                          className={`p-2 ${theme === "dark" ? "bg-gray-600/50" : "bg-gray-200"} rounded flex items-center`}
                        >
                          <span>P2: {drivers[(index + 1) % drivers.length].name}</span>
                        </div>
                        <div
                          className={`p-2 ${theme === "dark" ? "bg-amber-700/20" : "bg-amber-100"} rounded flex items-center`}
                        >
                          <span>P3: {drivers[(index + 2) % drivers.length].name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"} pixel-border`}>
              <CardHeader>
                <CardTitle className="pixel-font text-lg">USER SETTINGS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="pixel-font text-xs">
                    USERNAME
                  </Label>
                  <Input id="username" defaultValue="RacingFan123" className="pixel-input" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="pixel-font text-xs">
                    EMAIL
                  </Label>
                  <Input id="email" defaultValue="user@example.com" className="pixel-input" />
                </div>

                <div className="space-y-2">
                  <Label className="pixel-font text-xs">THEME</Label>
                  <div className="flex space-x-4">
                    <Button
                      variant={theme === "light" ? "default" : "outline"}
                      onClick={() => setTheme("light")}
                      className="flex-1 pixel-button"
                    >
                      <Sun className="mr-2 h-4 w-4" />
                      LIGHT
                    </Button>
                    <Button
                      variant={theme === "dark" ? "default" : "outline"}
                      onClick={() => setTheme("dark")}
                      className="flex-1 pixel-button"
                    >
                      <Moon className="mr-2 h-4 w-4" />
                      DARK
                    </Button>
                  </div>
                </div>

                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 pixel-button">SAVE SETTINGS</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer
        className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-t px-6 py-4 mt-8`}
      >
        <div className="container mx-auto text-center">
          <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            © {new Date().getFullYear()} Pixel F1 Racing. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .pixel-font {
          font-family: 'Press Start 2P', system-ui, sans-serif;
          letter-spacing: 1px;
        }
        
        .pixel-border {
          box-shadow: 
            0 0 0 2px rgba(255,255,255,0.1),
            0 0 0 4px rgba(0,0,0,0.1);
        }
        
        .pixel-input {
          image-rendering: pixelated;
        }
        
        .pixel-input:focus {
          box-shadow: 0 0 0 2px rgba(0,100,255,0.5);
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
        
        .pixel-tabs [data-state="active"] {
          background-color: #4CAF50;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

