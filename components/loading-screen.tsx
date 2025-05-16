"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SkipForward, Sparkles } from "lucide-react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSkipButton, setShowSkipButton] = useState(false)
  const [progress, setProgress] = useState(0)

  // Check if this is an internal navigation (from a hash link)
  useEffect(() => {
    // If there's a hash in the URL, skip the loading screen
    if (window.location.hash) {
      setIsLoading(false)
      return
    }

    // Show skip button immediately
    setShowSkipButton(true)

    // Increased loading time to 3 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 3.33 // Increase by ~3.33% every 100ms to reach 100% in 3 seconds
      })
    }, 100)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(progressInterval)
    }
  }, [])

  // Skip button handler
  const handleSkip = () => {
    setIsLoading(false)
  }

  // Split the name into letters for animation
  const letters = "ZOXILSI".split("")

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {/* Skip button */}
          {showSkipButton && (
            <button
              className="absolute top-4 right-4 z-50 flex items-center space-x-1 px-2 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={handleSkip}
              aria-label="Skip loading screen"
            >
              <span className="text-xs font-medium">Skip</span>
              <SkipForward size={12} />
            </button>
          )}

          {/* Background particles for longer animation */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
              }}
              animate={{
                x: [0, Math.random() * 80 - 40],
                y: [0, Math.random() * 80 - 40],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: Math.random() * 0.5,
                repeat: 1,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Animated logo container */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Multiple sparkle effects for longer animation */}
            <motion.div
              className="absolute -top-6 -right-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0, 1], scale: [0, 1, 0.8, 1], rotate: [0, 15, -5, 0] }}
              transition={{ duration: 2, delay: 0.3 }}
            >
              <Sparkles className="text-purple-500 w-8 h-8" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0, 1], scale: [0, 1, 0.8, 1], rotate: [0, -15, 5, 0] }}
              transition={{ duration: 2, delay: 0.6 }}
            >
              <Sparkles className="text-pink-500 w-6 h-6" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-12 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0, 1], scale: [0, 1, 0.8, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, delay: 0.9 }}
            >
              <Sparkles className="text-blue-400 w-7 h-7" />
            </motion.div>

            {/* Animated letters with longer delays */}
            <div className="flex items-center justify-center">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl md:text-7xl font-bold inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    textShadow: [
                      "0 0 0px rgba(124, 58, 237, 0)",
                      "0 0 10px rgba(124, 58, 237, 0.5)",
                      "0 0 0px rgba(124, 58, 237, 0)",
                      "0 0 10px rgba(124, 58, 237, 0.5)",
                      "0 0 0px rgba(124, 58, 237, 0)",
                    ],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * i,
                    textShadow: {
                      repeat: 1,
                      duration: 2,
                      delay: 0.8 + 0.1 * i,
                    },
                  }}
                  style={{
                    background: "linear-gradient(to right, #7c3aed, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Animated underline with longer animation */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />

            {/* Tagline that appears after the logo */}
            <motion.p
              className="text-center text-gray-400 text-sm mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Developer & MCA Student
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
