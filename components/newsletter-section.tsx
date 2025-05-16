"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Sparkles } from "lucide-react"

export default function NewsletterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="newsletter" className="py-20" ref={ref}>
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Subscribe to My <span className="text-gradient">Newsletter</span>
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Stay updated with my latest projects, tech insights, and coding tips. I share valuable content that will
              help you grow as a developer.
            </motion.p>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://www.linkedin.com/newsletters/zoxilsi-s-newsletter-7312151221811781633"
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable flex items-center text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                <FaLinkedin className="mr-2" />
                Zoxilsi's LinkedIn Newsletter
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center text-lg font-medium text-gray-500">
                <FaEnvelope className="mr-2" />
                Email Newsletter{" "}
                <span className="ml-2 text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-bold mb-4">Email Newsletter Coming Soon</h3>
            <p className="text-gray-400 mb-6">
              I'm currently working on setting up my email newsletter. Check back soon for updates!
            </p>

            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
              <div className="flex items-center">
                <div className="mr-3 text-yellow-500">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-6 w-6" />
                  </motion.div>
                </div>
                <p className="text-sm text-gray-300">
                  In the meantime, you can follow me on LinkedIn for regular updates and content.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.linkedin.com/newsletters/zoxilsi-s-newsletter-7312151221811781633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
                >
                  <FaLinkedin className="mr-2" />
                  Follow on LinkedIn
                </a>
              </motion.div>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">I'll announce when the email newsletter is ready!</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
