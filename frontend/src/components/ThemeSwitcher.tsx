'use client'
import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true'
        console.log(isDarkMode)
        setDarkMode(isDarkMode)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode as boolean)
        localStorage.setItem('darkMode', darkMode + '')
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    return <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
}
export default ThemeSwitcher
