"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { memo } from "react"

// Memoize the component to prevent unnecessary re-renders
const AboutSection = memo(function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20 cv-auto" ref={ref}>
      <motion.h2
        className="section-heading"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="hoverable"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Who I Am</h3>
          <p className="text-gray-300 mb-4">
            I'm Abhijith T, also known as zoxilsi. I'm currently pursuing my MCA at RIT College, APJ Abdul Kalam
            University, with a background in Computer Science from Kannur University.
          </p>
          <p className="text-gray-300">
            My passion lies in creating digital experiences that are both functional and aesthetically pleasing. I
            believe in the power of clean code and intuitive design to solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="hoverable"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">What I Do</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <motion.div
                className="mr-4 bg-gray-800 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(124, 58, 237, 0)",
                    "0 0 8px rgba(124, 58, 237, 0.5)",
                    "0 0 0 rgba(124, 58, 237, 0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  },
                  scale: { duration: 0.2 },
                }}
              >
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-xl font-bold">Web Development</h4>
                <p className="text-gray-400">Creating responsive and interactive web applications</p>
              </div>
            </div>

            <div className="flex items-start">
              <motion.div
                className="mr-4 bg-gray-800 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(236, 72, 153, 0)",
                    "0 0 8px rgba(236, 72, 153, 0.5)",
                    "0 0 0 rgba(236, 72, 153, 0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                  scale: { duration: 0.2 },
                }}
              >
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-xl font-bold">Database Design</h4>
                <p className="text-gray-400">Designing efficient database structures</p>
              </div>
            </div>

            <div className="flex items-start">
              <motion.div
                className="mr-4 bg-gray-800 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(239, 68, 68, 0)",
                    "0 0 8px rgba(239, 68, 68, 0.5)",
                    "0 0 0 rgba(239, 68, 68, 0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                  },
                  scale: { duration: 0.2 },
                }}
              >
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-xl font-bold">Problem Solving</h4>
                <p className="text-gray-400">Finding elegant solutions to complex problems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default AboutSection
