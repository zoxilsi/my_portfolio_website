"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch - don't render custom cursor on touch devices
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
          window.matchMedia("(max-width: 768px)").matches,
      )
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only add mouse event listeners if not on mobile
    if (!isMobile) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      const updateOutlinePosition = (e: MouseEvent) => {
        setOutlinePosition({ x: e.clientX, y: e.clientY })
      }

      const handleMouseEnter = () => setIsVisible(true)
      const handleMouseLeave = () => setIsVisible(false)

      document.addEventListener("mousemove", updatePosition, { passive: true })
      document.addEventListener("mousemove", updateOutlinePosition, { passive: true })
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        document.removeEventListener("mousemove", updatePosition)
        document.removeEventListener("mousemove", updateOutlinePosition)
        document.removeEventListener("mouseenter", handleMouseEnter)
        document.removeEventListener("mouseleave", handleMouseLeave)
        window.removeEventListener("resize", checkMobile)
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  // Don't render custom cursor on mobile/touch devices
  if (isMobile || typeof window === "undefined") return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${outlinePosition.x}px`,
          top: `${outlinePosition.y}px`,
          opacity: isVisible ? 1 : 0,
          transition:
            "left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease-in-out, width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  )
}
