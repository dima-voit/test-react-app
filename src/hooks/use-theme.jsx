import { useLayoutEffect, useState } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('App') || 'light')

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('App', theme)
  }, [theme])

  return { theme, setTheme }
}