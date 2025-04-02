"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({})

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme", ...props }) {
  const [theme, setTheme] = useState(() => {
    // Initialize with defaultTheme to avoid hydration mismatch
    return defaultTheme
  })

  // Initialize theme from localStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey)
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove both theme classes
    root.classList.remove("light", "dark")

    // Add the current theme class
    root.classList.add(theme)

    // Save to localStorage
    if (theme !== defaultTheme) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, defaultTheme, storageKey])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

