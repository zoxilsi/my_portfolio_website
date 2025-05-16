"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function ParticleBackground() {
  // Only render particles after component mounts to avoid SSR issues
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  // Optimized particle settings with fewer particles and simpler animations
  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 40, // Reduced from 80
            density: {
              enable: true,
              area: 1000, // Increased area = fewer particles
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8, // Reduced from 1
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          size: {
            value: { min: 1, max: 2 }, // Smaller particles
          },
          opacity: {
            value: 0.2, // Reduced opacity
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false, // Disabled parallax for better performance
              },
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
          },
        },
        detectRetina: false, // Disabled for better performance
      }}
    />
  )
}
