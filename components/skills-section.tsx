"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { memo } from "react"
import dynamic from "next/dynamic"

// Update the imports to include FaCuttlefish for C++ icon
const FaHtml5 = dynamic(() => import("react-icons/fa").then((mod) => mod.FaHtml5))
const FaCss3Alt = dynamic(() => import("react-icons/fa").then((mod) => mod.FaCss3Alt))
const FaJs = dynamic(() => import("react-icons/fa").then((mod) => mod.FaJs))
const FaReact = dynamic(() => import("react-icons/fa").then((mod) => mod.FaReact))
const FaNodeJs = dynamic(() => import("react-icons/fa").then((mod) => mod.FaNodeJs))
const FaPython = dynamic(() => import("react-icons/fa").then((mod) => mod.FaPython))
const FaDatabase = dynamic(() => import("react-icons/fa").then((mod) => mod.FaDatabase))
const FaGitAlt = dynamic(() => import("react-icons/fa").then((mod) => mod.FaGitAlt))
const FaCuttlefish = dynamic(() => import("react-icons/fa").then((mod) => mod.FaCuttlefish))
const FaLightbulb = dynamic(() => import("react-icons/fa").then((mod) => mod.FaLightbulb))

// Memoize the component to prevent unnecessary re-renders
const SkillsSection = memo(function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Replace the skills array with the updated one
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "C++", icon: FaCuttlefish, color: "text-purple-400" },
    { name: "Databases", icon: FaDatabase, color: "text-purple-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger time
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Faster animation
      },
    },
  }

  // Update the return statement to include the "Coming Soon" card
  return (
    <section id="skills" className="py-20 cv-auto" ref={ref}>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card hoverable bg-gray-900 border border-gray-800 rounded-lg p-6 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
            variants={itemVariants}
            whileHover={{ y: -5 }} // Simplified hover animation
          >
            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.1 }}
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 0 0 rgba(124, 58, 237, 0)",
                  "0 0 15px rgba(124, 58, 237, 0.5)",
                  "0 0 0 rgba(124, 58, 237, 0)",
                ],
              }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + index * 0.2,
                  ease: "easeInOut",
                  delay: index * 0.1,
                },
                boxShadow: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + index * 0.2,
                  ease: "easeInOut",
                  delay: index * 0.1,
                },
                scale: { duration: 0.2 },
              }}
            >
              {skill.icon && <skill.icon className={`skill-icon ${skill.color}`} />}
            </motion.div>
            <h3 className="text-lg font-bold">{skill.name}</h3>

            <div className="mt-4 relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}

        {/* Learning Card - Smaller Version */}
        <motion.div
          className="skill-card hoverable bg-gray-900 border border-gray-800 rounded-lg p-6 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          {/* Animated background particles */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
              animate={{
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 0.5,
              }}
            />
          ))}

          <motion.div
            className="flex justify-center mb-4 relative z-10"
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 0 0 rgba(124, 58, 237, 0)",
                "0 0 15px rgba(124, 58, 237, 0.5)",
                "0 0 0 rgba(124, 58, 237, 0)",
              ],
            }}
            transition={{
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              },
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              },
              scale: { duration: 0.2 },
            }}
          >
            <FaLightbulb className="skill-icon text-yellow-400" />
          </motion.div>

          <motion.h3
            className="text-lg font-bold"
            animate={{
              background: [
                "linear-gradient(to right, #7c3aed, #ec4899)",
                "linear-gradient(to right, #ec4899, #ef4444)",
                "linear-gradient(to right, #ef4444, #7c3aed)",
                "linear-gradient(to right, #7c3aed, #ec4899)",
              ],
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Never Stop Learning
          </motion.h3>

          <div className="mt-4 relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-red-500"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default SkillsSection
