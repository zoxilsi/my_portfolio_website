"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  FaGitlab,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaMedium,
  FaCode,
  FaYoutube,
} from "react-icons/fa"

export default function SocialLinks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    { name: "GitLab", icon: FaGitlab, url: "https://gitlab.com/zoxilsi", color: "hover:text-orange-500" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/zoxilsi", color: "hover:text-blue-500" },
    { name: "Twitter", icon: FaTwitter, url: "https://x.com/zoxilsi", color: "hover:text-blue-400" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/zoxilsi", color: "hover:text-purple-500" },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discord.com/users/1261363238793117849",
      color: "hover:text-indigo-500",
    },
    { name: "Email", icon: FaEnvelope, url: "mailto:hey.abhijith@gmail.com", color: "hover:text-red-500" },
    { name: "Medium", icon: FaMedium, url: "https://medium.com/@zoxilsi/", color: "hover:text-green-500" },
    { name: "LeetCode", icon: FaCode, url: "https://leetcode.com/u/zoxilsi/", color: "hover:text-yellow-500" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@zoxilsi", color: "hover:text-red-600" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="social" className="py-20" ref={ref}>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Connect With Me
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link hoverable flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-800 rounded-lg transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 ${link.color}`}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
                filter: [
                  "drop-shadow(0 0 0 rgba(124, 58, 237, 0))",
                  "drop-shadow(0 0 5px rgba(124, 58, 237, 0.5))",
                  "drop-shadow(0 0 0 rgba(124, 58, 237, 0))",
                ],
              }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + index * 0.1,
                  ease: "easeInOut",
                  delay: index * 0.05,
                },
                filter: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + index * 0.1,
                  ease: "easeInOut",
                  delay: index * 0.05,
                },
              }}
            >
              <link.icon className="social-icon text-3xl mb-2" />
            </motion.div>
            <span className="text-sm font-medium">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Abhijith T (zoxilsi). All rights reserved.</p>
      </motion.div>
    </section>
  )
}
