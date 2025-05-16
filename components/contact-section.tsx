"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h3 className="text-2xl font-bold mb-6 text-gradient" variants={itemVariants}>
            Let's Talk
          </motion.h3>

          <motion.p className="text-gray-300 mb-8" variants={itemVariants}>
            Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to
            discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <motion.div className="space-y-6" variants={itemVariants}>
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
                <FaEnvelope className="text-purple-500" />
              </motion.div>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <a
                  href="mailto:hey.abhijith@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  hey.abhijith@gmail.com
                </a>
              </div>
            </div>

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
                    delay: 0.5,
                  },
                  scale: { duration: 0.2 },
                }}
              >
                <FaMapMarkerAlt className="text-purple-500" />
              </motion.div>
              <div>
                <h4 className="text-lg font-bold">Location</h4>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900 p-6 rounded-xl border border-gray-800"
        >
          <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

          <form className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 border-gray-700 focus:border-purple-500"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 border-gray-700 focus:border-purple-500"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Subject"
                className="bg-gray-800 border-gray-700 focus:border-purple-500"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-gray-800 border-gray-700 focus:border-purple-500 min-h-[120px]"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
