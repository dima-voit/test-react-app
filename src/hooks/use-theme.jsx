import { useLayoutEffect, useState } from "react"

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark).matches')
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('App') || defaultTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('App', theme)
  }, [theme])

  return { theme, setTheme }
}