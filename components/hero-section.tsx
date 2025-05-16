"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { memo, useState } from "react"

// Memoize the component to prevent unnecessary re-renders
const HeroSection = memo(function HeroSection() {
  const [letterHovered, setLetterHovered] = useState<number | null>(null)

  // Split the name into individual letters for animation
  const nameLetters = "ABHIJITH T".split("")

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I'm{" "}
          <span
            className="whitespace-nowrap inline-flex overflow-hidden"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              display: "inline-block",
            }}
          >
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                className={`inline-block relative ${letter === " " ? "mr-2" : ""}`}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: -90,
                  z: -50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  z: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.08,
                  type: "spring",
                  stiffness: 80,
                  damping: 10,
                }}
                onHoverStart={() => setLetterHovered(index)}
                onHoverEnd={() => setLetterHovered(null)}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotateY: [-5, 5, 0],
                  rotateX: 5,
                  z: 20,
                  transition: {
                    duration: 0.3,
                    rotateY: {
                      duration: 0.6,
                      repeat: 0,
                      ease: "easeInOut",
                    },
                  },
                }}
                style={{
                  background: `linear-gradient(to right, 
                    hsl(${(index * 15) % 360}, 80%, 60%), 
                    hsl(${(index * 15 + 30) % 360}, 80%, 60%))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradient 8s ease infinite",
                  textShadow:
                    letterHovered === index
                      ? "0 0 15px rgba(124, 58, 237, 0.8), 0 10px 10px rgba(0,0,0,0.15)"
                      : "0 5px 5px rgba(0,0,0,0.1)",
                  filter: `drop-shadow(0 ${letterHovered === index ? 6 : 3}px 3px rgba(0,0,0,0.2))`,
                  transformStyle: "preserve-3d",
                  transition: "text-shadow 0.3s ease, filter 0.3s ease",
                }}
              >
                {letter}

                {/* 3D shadow/reflection effect */}
                <motion.span
                  className="absolute left-0 bottom-0 opacity-20"
                  style={{
                    transform: "rotateX(80deg) translateY(0.6em) scale(1, 0.35)",
                    filter: "blur(4px)",
                    background: `linear-gradient(to right, 
                      hsl(${(index * 15) % 360}, 80%, 60%), 
                      hsl(${(index * 15 + 30) % 360}, 80%, 60%))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transformOrigin: "bottom",
                  }}
                  animate={{
                    opacity: letterHovered === index ? 0.3 : 0.15,
                    y: letterHovered === index ? 2 : 0,
                  }}
                >
                  {letter}
                </motion.span>

                {letterHovered === index && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 rounded-full"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      boxShadow: "0 0 10px rgba(124, 58, 237, 0.8)",
                      z: 30,
                    }}
                    exit={{ opacity: 0 }}
                    style={{
                      transform: "translateZ(10px)",
                    }}
                  />
                )}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="typing-text relative">Developer & MCA Student</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Welcome to my portfolio. I create digital experiences with a focus on clean design and smooth interactions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <motion.a
            href="#contact"
            className="hoverable relative overflow-hidden px-8 py-3 rounded-full font-bold text-lg inline-block group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Pulsing border */}
            <motion.div
              className="absolute -inset-0.5 rounded-full opacity-70 blur-sm"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 0 4px rgba(168, 85, 247, 0.4)",
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Button text with shine effect */}
            <span className="relative z-10 text-white flex items-center">
              <span>Contact Me</span>

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{ skewX: "-20deg" }}
              />

              {/* Subtle particle effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: "50%",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    repeatDelay: 1,
                  }}
                />
              ))}
            </span>
          </motion.a>

          <motion.a
            href="#about"
            className="hoverable relative overflow-hidden px-8 py-3 rounded-full font-bold text-lg inline-block"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Transparent background with animated border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            />

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(to right, #ffffff, #a855f7, #ec4899, #ffffff)",
                backgroundOrigin: "border-box",
                backgroundClip: "border-box",
                WebkitBackgroundClip: "border-box",
                maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "300% 100%" }}
            />

            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0)",
                  "0 0 8px 2px rgba(255, 255, 255, 0.3)",
                  "0 0 0 0 rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Button text with subtle animation */}
            <motion.span
              className="relative z-10 text-white"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 4px rgba(255, 255, 255, 0.5)",
                  "0 0 0px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Learn More
              {/* Subtle dot animation */}
              <motion.span
                className="absolute -right-1 -top-1 w-1.5 h-1.5 rounded-full bg-white opacity-0"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 flex justify-center"
      >
        <motion.div
          className="profile-border-container w-64 h-64 md:w-80 md:h-80"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="profile-border-inner">
            <Image
              src="/images/profile.jpg"
              alt="Abhijith T"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              priority
              className="blend-profile object-cover transition-all duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default HeroSection
