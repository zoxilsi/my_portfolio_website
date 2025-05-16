"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import {
  Sparkles,
  Code,
  Rocket,
  Zap,
  Lock,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Eye,
  Fingerprint,
  Shield,
  Cpu,
  Brain,
  Globe,
  Layers,
} from "lucide-react"
import { memo } from "react"

// Memoize the component to prevent unnecessary re-renders
const ProjectsSection = memo(function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // For the typing animation
  const [displayText, setDisplayText] = useState("")
  const fullText = "COMING SOON"
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  // State for expanded project cards
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  // State for revealed secrets
  const [revealedSecrets, setRevealedSecrets] = useState<{ [key: number]: boolean }>({})

  // State for access granted animation
  const [accessGranted, setAccessGranted] = useState<{ [key: number]: boolean }>({})

  // Function to toggle project expansion
  const toggleProjectExpansion = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

  // Function to reveal a secret
  const revealSecret = (index: number) => {
    // First show the "ACCESS GRANTED" animation
    setAccessGranted((prev) => ({ ...prev, [index]: true }))

    // Then after a delay, reveal the secret
    setTimeout(() => {
      setRevealedSecrets((prev) => ({ ...prev, [index]: true }))
    }, 1500)
  }

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isTypingComplete) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.substring(0, displayText.length + 1))
          if (displayText.length + 1 === fullText.length) {
            setIsTypingComplete(true)
          }
        }
      } else if (loopNum < 1) {
        // Wait a bit before starting to delete
        setTimeout(() => {
          setIsDeleting(true)
          setIsTypingComplete(false)
        }, 2000)
      }

      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(fullText.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [displayText, isTypingComplete, isDeleting, loopNum])

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  // Particles for the coming soon card
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  // Project loading animations data with mysterious hints instead of names
  // UPDATED: Reduced progress percentages to 1-10%
  const projectLoadingData = [
    {
      hint: "Project [CLASSIFIED]",
      secretName: "Something intelligent is coming...",
      icon: <Zap className="text-yellow-400 w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      progress: 10, // Reduced from 75% to 10%
      description: "A revolutionary way to interact with technology. That's all we can say for now.",
      tags: ["AI", "React", "Python"],
      secretIcon: <EyeOff className="w-4 h-4 mr-1" />,
      secretDetails: {
        codename: "NEXUS",
        features: [
          { icon: <Brain className="w-4 h-4 mr-2" />, text: "Advanced natural language processing" },
          { icon: <Cpu className="w-4 h-4 mr-2" />, text: "Real-time voice recognition" },
          { icon: <Shield className="w-4 h-4 mr-2" />, text: "Privacy-focused architecture" },
        ],
        targetDate: "Q3 2025",
        secretImage: "/placeholder.svg?height=200&width=300",
        accessLevel: "Level 3 Clearance",
      },
    },
    {
      hint: "Project [REDACTED]",
      secretName: "We can't reveal this yet",
      icon: <Code className="text-blue-400 w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      progress: 5, // Reduced from 45% to 5%
      description: "This could change how you work with code. More details coming soon.",
      tags: ["TypeScript", "Node.js", "API"],
      secretIcon: <Lock className="w-4 h-4 mr-1" />,
      secretDetails: {
        codename: "ARCHITECT",
        features: [
          { icon: <Code className="w-4 h-4 mr-2" />, text: "Automated code generation" },
          { icon: <Layers className="w-4 h-4 mr-2" />, text: "Component-based architecture" },
          { icon: <Globe className="w-4 h-4 mr-2" />, text: "Cross-platform compatibility" },
        ],
        targetDate: "Q1 2026",
        secretImage: "/placeholder.svg?height=200&width=300",
        accessLevel: "Level 2 Clearance",
      },
    },
    {
      hint: "Project [ENIGMA]",
      secretName: "Something out of this world",
      icon: <Rocket className="text-purple-400 w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      progress: 1, // Reduced from 30% to 1%
      description: "An immersive experience that will take you places. Stay tuned.",
      tags: ["3D", "WebGL", "React"],
      secretIcon: <Sparkles className="w-4 h-4 mr-1" />,
      secretDetails: {
        codename: "VOYAGER",
        features: [
          { icon: <Globe className="w-4 h-4 mr-2" />, text: "Immersive 3D environments" },
          { icon: <Zap className="w-4 h-4 mr-2" />, text: "Real-time physics simulation" },
          { icon: <Eye className="w-4 h-4 mr-2" />, text: "Advanced visual effects" },
        ],
        targetDate: "Q4 2025",
        secretImage: "/placeholder.svg?height=200&width=300",
        accessLevel: "Level 4 Clearance",
      },
    },
  ]

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Coming Soon Card */}
        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-3 hoverable relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden h-80 relative">
            {/* Animated particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-purple-500 opacity-40"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.4, 0.1, 0.4],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: particle.delay,
                }}
              />
            ))}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="relative"
                >
                  <Sparkles className="text-purple-500 w-16 h-16" />
                </motion.div>
              </motion.div>

              <div className="text-center">
                <motion.div
                  className="relative h-16 flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold tracking-wider">
                    <span className="text-gradient">{displayText}</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="inline-block ml-1 w-1 h-8 bg-purple-500"
                    ></motion.span>
                  </h3>
                </motion.div>

                <motion.p
                  className="text-gray-300 mt-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Exciting projects are in the works! Check back soon to see my latest creations and developments.
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="inline-block relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                    <button className="relative bg-black border-0 text-white font-bold py-3 px-8 rounded-full transform transition-transform duration-300 group-hover:scale-105">
                      Get Notified
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Animated gradient border */}
            <div className="absolute inset-0 p-[1px] rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 animate-gradient"></div>
            </div>
          </div>
        </motion.div>

        {/* Project cards with creative loading animations and mysterious hints */}
        {projectLoadingData.map((project, index) => (
          <motion.div
            key={index}
            className={`hoverable bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-500 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 ${
              expandedProject === index ? "lg:col-span-3 md:col-span-2" : ""
            }`}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            layout
          >
            <div
              className={`relative ${expandedProject === index ? "h-64" : "h-48"} overflow-hidden bg-gray-800 flex items-center justify-center cursor-pointer`}
              onClick={() => toggleProjectExpansion(index)}
            >
              {/* Top secret badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700 flex items-center z-20">
                <span className="text-xs font-semibold text-red-400 flex items-center">
                  {project.secretIcon}
                  TOP SECRET
                </span>
              </div>

              {/* Expand/collapse indicator */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm p-1.5 rounded-full border border-gray-700 flex items-center z-20">
                {expandedProject === index ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>

              {/* Unique loading animation for each project */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background glow effect */}
                <motion.div
                  className={`absolute w-32 h-32 rounded-full bg-gradient-to-r ${project.color} opacity-20 blur-xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Circular progress track */}
                <div className="relative w-24 h-24">
                  {/* Background track */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-700 opacity-30" />

                  {/* Animated progress */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="289.27"
                      initial={{ strokeDashoffset: 289.27 }}
                      animate={{
                        strokeDashoffset: 289.27 - (289.27 * project.progress) / 100,
                        rotate: [0, 360],
                      }}
                      transition={{
                        strokeDashoffset: {
                          duration: 2,
                          ease: "easeOut",
                        },
                        rotate: {
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                      }}
                      style={{ transformOrigin: "center" }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className={`stop-${project.color.split(" ")[0].replace("from-", "")}`} />
                        <stop offset="100%" className={`stop-${project.color.split(" ")[1].replace("to-", "")}`} />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon in center */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full bg-gradient-to-r ${project.color} w-2 h-2`}
                    style={{
                      left: `${50 + (Math.random() * 30 - 15)}%`,
                      top: `${50 + (Math.random() * 30 - 15)}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 60 - 30],
                      y: [0, Math.random() * 60 - 30],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="p-6">
              {/* Mysterious project hint instead of name */}
              <div className="mb-3">
                <h3 className="text-xl font-bold mb-1">{project.hint}</h3>
                <p className="text-sm italic text-gray-500">{project.secretName}</p>
              </div>

              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-4">
                <motion.div
                  className={`h-full bg-gradient-to-r ${project.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1.5, delay: 0.2 * index }}
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400">Development progress</p>
                <span className={`text-sm font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.progress}%
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive elements */}
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-800 pt-4 mt-2">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-gray-300">Additional Information</h4>

                        {/* Secret access button */}
                        {!revealedSecrets[index] && !accessGranted[index] && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              revealSecret(index)
                            }}
                            className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700`}
                          >
                            <Fingerprint className="w-3.5 h-3.5" />
                            Request Access
                          </button>
                        )}
                      </div>

                      {/* Access granted animation */}
                      <AnimatePresence>
                        {accessGranted[index] && !revealedSecrets[index] && (
                          <motion.div
                            className="relative overflow-hidden rounded-md bg-gray-800 border border-gray-700 p-4 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-green-500/10"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1 }}
                            />

                            <div className="flex items-center justify-center h-20">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="text-center"
                              >
                                <div className="flex items-center justify-center mb-2">
                                  <Shield className="text-green-500 w-6 h-6 mr-2" />
                                  <span className="text-green-500 font-bold text-lg">ACCESS GRANTED</span>
                                </div>
                                <p className="text-xs text-gray-400">Decrypting classified information...</p>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Revealed secret content */}
                      <AnimatePresence>
                        {revealedSecrets[index] && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                          >
                            <div className="bg-gray-800 rounded-md p-4 border border-gray-700">
                              <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center">
                                  <Shield className="text-green-500 w-4 h-4 mr-2" />
                                  <span className="text-xs text-green-500 font-semibold">CLASSIFIED INFORMATION</span>
                                </div>
                                <span className="text-xs text-gray-500">{project.secretDetails.accessLevel}</span>
                              </div>

                              <h5 className="text-lg font-bold mb-2">
                                Codename:{" "}
                                <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                  {project.secretDetails.codename}
                                </span>
                              </h5>

                              <div className="mb-3">
                                <h6 className="text-sm font-semibold mb-2 text-gray-400">Key Features:</h6>
                                <ul className="space-y-2">
                                  {project.secretDetails.features.map((feature, i) => (
                                    <motion.li
                                      key={i}
                                      className="flex items-center text-sm text-gray-300"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 * i }}
                                    >
                                      {feature.icon}
                                      {feature.text}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div className="text-sm text-gray-400">
                                <span className="font-semibold">Target Release:</span>{" "}
                                {project.secretDetails.targetDate}
                              </div>
                            </div>

                            <motion.div
                              className="relative h-40 bg-gray-800 rounded-md overflow-hidden"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                  src={project.secretDetails.secretImage || "/placeholder.svg"}
                                  alt="Classified project preview"
                                  className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3 text-center">
                                  <p className="text-xs text-gray-400">
                                    Classified project visualization - For authorized personnel only
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Non-revealed state */}
                      {!revealedSecrets[index] && !accessGranted[index] && (
                        <div className="bg-gray-800 rounded-md p-4 border border-gray-700 flex items-center justify-center h-24">
                          <div className="text-center">
                            <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">Classified information requires authorization</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
})

export default ProjectsSection
