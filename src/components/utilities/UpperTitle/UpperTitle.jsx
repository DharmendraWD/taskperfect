// src/hooks/usePageTitle.js
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function usePageTitle() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    if (path === '/') {
      document.title = 'Home'
    } else {
      // Remove leading slash and capitalize
      const page = path.substring(1)
      document.title = page.charAt(0).toUpperCase() + page.slice(1)
    }
  }, [location])
}
