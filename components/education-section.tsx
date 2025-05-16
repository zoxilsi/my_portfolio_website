"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "RIT College",
      university: "APJ Abdul Kalam University",
      period: "2024 - Present",
      description: "Specializing in advanced computing concepts and application development.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Kannur University",
      university: "Kannur University",
      period: "2019 - 2022",
      description: "Focused on core computer science principles and programming fundamentals.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="education" className="py-20" ref={ref}>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {education.map((item, index) => (
          <motion.div key={index} className="education-card hoverable relative" variants={itemVariants}>
            {item.period === "2024 - Present" && (
              <>
                {/* Animated vertical timeline bar */}
                <motion.div
                  className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-600 via-pink-500 to-red-500"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "100%", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />

                {/* Timeline dots */}
                <motion.div
                  className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-purple-600 border-2 border-black"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    boxShadow: [
                      "0 0 0 rgba(124, 58, 237, 0)",
                      "0 0 15px rgba(124, 58, 237, 0.7)",
                      "0 0 0 rgba(124, 58, 237, 0)",
                    ],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                    boxShadow: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    },
                  }}
                />

                <motion.div
                  className="absolute -left-[14px] bottom-0 w-6 h-6 rounded-full bg-red-500 border-2 border-black"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    boxShadow: [
                      "0 0 0 rgba(239, 68, 68, 0)",
                      "0 0 15px rgba(239, 68, 68, 0.7)",
                      "0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1.3,
                    boxShadow: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      delay: 0.5,
                    },
                  }}
                />

                {/* Timeline label */}
                <motion.div
                  className="absolute -left-36 top-2 flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(124, 58, 237, 0)",
                        "0 0 15px rgba(124, 58, 237, 0.7)",
                        "0 0 0 rgba(124, 58, 237, 0)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      },
                    }}
                  >
                    <span>2024</span>
                    <motion.div
                      className="mx-1 w-8 h-[2px] bg-white"
                      animate={{ width: [8, 20, 8] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    />
                    <motion.span
                      animate={{
                        color: ["#ffffff", "#22d3ee", "#ffffff"],
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 5px rgba(255,255,255,0.8)",
                          "0 0 0px rgba(255,255,255,0)",
                        ],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      }}
                    >
                      Present
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* "In Progress" animated badge */}
                <motion.div
                  className="absolute -right-2 top-2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.div
                    className="bg-black border border-purple-500 text-purple-400 px-3 py-1 rounded-full text-xs font-medium flex items-center"
                    animate={{
                      borderColor: ["rgba(168, 85, 247, 0.5)", "rgba(168, 85, 247, 1)", "rgba(168, 85, 247, 0.5)"],
                      boxShadow: [
                        "0 0 0px rgba(168, 85, 247, 0)",
                        "0 0 8px rgba(168, 85, 247, 0.5)",
                        "0 0 0px rgba(168, 85, 247, 0)",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full bg-green-500 mr-2"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                      }}
                    />
                    In Progress
                  </motion.div>
                </motion.div>
              </>
            )}

            {item.period === "2019 - 2022" && (
              <>
                {/* Completed vertical bar */}
                <motion.div
                  className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-emerald-700"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "100%", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />

                {/* Completed checkmark */}
                <motion.div
                  className="absolute -left-[18px] top-1/2 transform -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: [0, 5, -5, 0] }}
                  transition={{
                    scale: { duration: 0.5, delay: 0.8 },
                    rotate: {
                      repeat: 3,
                      duration: 0.3,
                      delay: 1.3,
                    },
                  }}
                >
                  <motion.div
                    className="bg-black rounded-full p-1 border-2 border-green-500"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(34, 197, 94, 0)",
                        "0 0 15px rgba(34, 197, 94, 0.7)",
                        "0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      },
                    }}
                  >
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </motion.div>
                </motion.div>

                {/* Completed date range */}
                <motion.div
                  className="absolute -left-36 top-2 flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(34, 197, 94, 0)",
                        "0 0 15px rgba(34, 197, 94, 0.7)",
                        "0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      },
                    }}
                  >
                    <span>2019</span>
                    <span className="mx-1">-</span>
                    <span>2022</span>
                  </motion.div>
                </motion.div>

                {/* Completed badge */}
                <motion.div
                  className="absolute -right-2 top-2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.div
                    className="bg-black border border-green-500 text-green-400 px-3 py-1 rounded-full text-xs font-medium flex items-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ["rgba(34, 197, 94, 0.5)", "rgba(34, 197, 94, 1)", "rgba(34, 197, 94, 0.5)"],
                      boxShadow: [
                        "0 0 0px rgba(34, 197, 94, 0)",
                        "0 0 8px rgba(34, 197, 94, 0.5)",
                        "0 0 0px rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  >
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                      className="mr-1"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                    </motion.div>
                    Completed
                  </motion.div>
                </motion.div>

                {/* Achievement stars */}
                <motion.div
                  className="absolute -right-4 bottom-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <motion.div
                    className="flex space-x-1"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="text-yellow-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                        transition={{
                          scale: { duration: 0.3, delay: 1.8 + i * 0.1 },
                          rotate: { delay: 1.8 + i * 0.1, duration: 0.5 },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <motion.h3
                className="text-2xl font-bold text-gradient"
                whileHover={{ scale: 1.02 }}
                animate={{
                  textShadow: [
                    "0 0 0 rgba(124, 58, 237, 0)",
                    "0 0 10px rgba(124, 58, 237, 0.5)",
                    "0 0 0 rgba(124, 58, 237, 0)",
                  ],
                }}
                transition={{
                  textShadow: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                }}
              >
                {item.degree}
              </motion.h3>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">{item.institution}</p>
              <p className="text-gray-400">{item.university}</p>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
