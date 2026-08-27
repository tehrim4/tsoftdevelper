import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -20, y: -20 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    if (!pointerQuery.matches) return

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => setActive(Boolean(e.target.closest('a,button,[data-cursor]')))

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
    }
  }, [])

  return <motion.div className="cursor-dot" animate={{ x: pos.x, y: pos.y, scale: active ? 1.7 : 1 }} transition={{ type: 'spring', stiffness: 900, damping: 45 }} />
}
