"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      {/* Checkered pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmZmZmIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>

      <Card className="w-full max-w-md border-4 border-gray-700 bg-gray-800 text-white shadow-[0_0_20px_rgba(0,100,255,0.2)] pixel-border">
        <CardHeader>
          <CardTitle className="text-2xl text-center pixel-font">REGISTER</CardTitle>
          <CardDescription className="text-center text-gray-400">Create your racing account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="pixel-font text-sm">
                USERNAME
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="racingfan123"
                required
                className="bg-gray-700 border-2 border-gray-600 h-12 pixel-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="pixel-font text-sm">
                EMAIL
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-gray-700 border-2 border-gray-600 h-12 pixel-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="pixel-font text-sm">
                PASSWORD
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="bg-gray-700 border-2 border-gray-600 h-12 pixel-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="pixel-font text-sm">
                CONFIRM PASSWORD
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                className="bg-gray-700 border-2 border-gray-600 h-12 pixel-input"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 mt-4 pixel-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  CREATING ACCOUNT...
                </>
              ) : (
                "REGISTER"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </div>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-300 text-center">
            Back to home
          </Link>
        </CardFooter>
      </Card>

      <style jsx global>{`
        .pixel-font {
          font-family: 'Press Start 2P', system-ui, sans-serif;
          letter-spacing: 1px;
        }
        
        .pixel-border {
          box-shadow: 
            0 0 0 4px rgba(255,255,255,0.1),
            0 0 0 8px rgba(0,0,0,0.2);
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
      `}</style>
    </div>
  )
}

