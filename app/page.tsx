"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useSpring, useTransform, HTMLMotionProps } from "framer-motion"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Globe,
  Server,
  Palette,
  GitBranch,
  Menu,
  X,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Zap,
  FileCode,
  ChevronDown,
  Calendar,
  Check,
  ExternalLink,
  Star,
  Award,
  Building,
  MapPin,
  Heart,
  Coffee,
  Sparkles,
  Eye,
  Monitor,
  Compass,
  Chrome,
  Bot,
  Code2,
} from "lucide-react"
import { Button } from "./components/ui/button"
import { FuturisticLoader } from "./components/FuturisticLoader"

// --- NEW: CyberGridBackground ---
const CyberGridBackground = () => {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 })
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 })
  const [particles, setParticles] = useState<Array<{ width: number; height: number; left: string; delay: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    // Generate random particles only on client side
    const newParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 20 + 10,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10
    }))
    setParticles(newParticles)
  }, [])

  const gridX = useTransform(mouseX, (val) => val * 0.02)
  const gridY = useTransform(mouseY, (val) => val * 0.02)

  const GridLayer = ({
    layer,
    i,
  }: { layer: { size: number; stroke: number; opacity: number; parallax: number }; i: number }) => {
    const translateX = useTransform(gridX, (val) => val * layer.parallax)
    const translateY = useTransform(gridY, (val) => val * layer.parallax)

    return (
      <motion.svg
        key={`grid-layer-${i}`}
        className="absolute inset-0 w-full h-full"
        style={{
          translateX: translateX,
          translateY: translateY,
          opacity: layer.opacity,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`cyberGrid-${i}`} width={layer.size} height={layer.size} patternUnits="userSpaceOnUse">
            <path
              d={`M ${layer.size} 0 L 0 0 0 ${layer.size}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={layer.stroke}
              className="text-cyan-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#cyberGrid-${i})`} />
      </motion.svg>
    )
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Dynamic Aurora Lights */}
      <motion.div
        className="absolute top-0 left-0 w-[60vw] h-[60vh] bg-gradient-to-br from-cyan-700/20 via-purple-700/10 to-transparent opacity-50"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
          rotate: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-tl from-purple-700/20 via-indigo-700/10 to-transparent opacity-50"
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
          rotate: [0, -10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Parallax Grid Layers */}
      {[
        { size: 80, stroke: 0.3, opacity: 0.05, parallax: 1 },
        { size: 40, stroke: 0.2, opacity: 0.07, parallax: 0.7 },
        { size: 20, stroke: 0.1, opacity: 0.1, parallax: 0.4 },
      ].map((layer, i) => (
        <GridLayer key={i} layer={layer} i={i} />
      ))}

      {/* Animated Data Streams/Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute rounded-full bg-cyan-500"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: particle.left,
            opacity: 0,
          }}
          initial={{ y: '100vh' }}
          animate={{
            y: ['100vh', '-20vh'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// --- NEW: FuturisticCard ---
interface FuturisticCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  className?: string
  glowColor?: string // e.g., 'cyan' or 'purple'
}

const FuturisticCard = ({ children, className, glowColor = "cyan", ...props }: FuturisticCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const glowClass =
    glowColor === "purple"
      ? "shadow-[0_0_25px_rgba(192,132,252,0.3)] hover:shadow-[0_0_40px_rgba(192,132,252,0.5)] border-purple-500/30 hover:border-purple-500/60"
      : "shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] border-cyan-500/30 hover:border-cyan-500/60"

  return (
    <motion.div
      ref={cardRef}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 group ${glowClass} ${className}`}
      {...props}
    >
      {/* Animated border segments */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-${glowColor}-500 to-transparent`}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, originX: 1 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
            <motion.div
              className={`absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-transparent via-${glowColor}-500 to-transparent`}
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, originX: 0 }}
              transition={{ duration: 0.4, ease: "circOut", delay: 0.1 }}
            />
            <motion.div
              className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-${glowColor}-500 to-transparent`}
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, originY: 1 }}
              transition={{ duration: 0.4, ease: "circOut", delay: 0.2 }}
            />
            <motion.div
              className={`absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-transparent via-${glowColor}-500 to-transparent`}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, originY: 0 }}
              transition={{ duration: 0.4, ease: "circOut", delay: 0.3 }}
            />
          </>
        )}
      </AnimatePresence>
      {/* Scanline effect (optional, can be performance intensive) */}
      {/* <motion.div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, ${glowColor === 'purple' ? 'rgba(192,132,252,0.5)' : 'rgba(34,211,238,0.5)'} 1px, ${glowColor === 'purple' ? 'rgba(192,132,252,0.5)' : 'rgba(34,211,238,0.5)'} 2px)`,
          backgroundSize: "100% 3px",
        }}
        animate={{ y: ["0%", "-3px"] }}
        transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      /> */}
      <div className="relative z-10 p-1">
        {" "}
        {/* Added p-1 to prevent content overlap with border */}
        {children}
      </div>
    </motion.div>
  )
}

// --- NEW: DigitalTextReveal ---
const DigitalTextReveal = ({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: { text: string; className?: string; delay?: number; stagger?: number }) => {
  const variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: delay + i * stagger,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.span className={`inline-block ${className}`} aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Consultation Button Component (Updated)
const ConsultationBtn = ({
  href,
  target,
  rel,
  children,
}: { href: string; target?: string; rel?: string; children: React.ReactNode }) => (
  <Button
    asChild
    className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 text-lg shadow-[0_0_20px_rgba(0,255,255,0.4),0_0_30px_rgba(192,132,252,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_40px_rgba(192,132,252,0.4)] transition-all duration-300 group"
  >
    <a href={href} target={target} rel={rel} className="flex items-center justify-center">
      <motion.span
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear", delay: 0.2 }}
      />
      <Mail className="w-5 h-5 mr-2 relative z-10" />
      <span className="relative z-10">{children}</span>
    </a>
  </Button>
)

// Floating Glyphs (Replaces FloatingCodeElements)
const FloatingGlyphs = () => {
  const glyphs = ["✧", "✦", "✵", "✶", "✷", "✸", "✹", "✺", "※", "⁂", "⁑", "⌑", "⌬", "⏣", "⎔", "◊"]
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== "undefined") {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }
    updateSize()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateSize)
      return () => window.removeEventListener("resize", updateSize)
    }
    return () => {}
  }, [])

  if (windowSize.width === 0 || windowSize.height === 0) return null

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {glyphs.map((glyph, i) => {
        const x = Math.random() * (windowSize.width - 50)
        const y = Math.random() * (windowSize.height - 50)
        const size = Math.random() * 12 + 8
        return (
          <motion.div
            key={i}
            className="absolute text-cyan-400/50 select-none"
            style={{ fontSize: `${size}px` }}
            initial={{ x, y, opacity: 0, scale: 0.5 }}
            animate={{
              x: Math.random() * (windowSize.width - 50),
              y: Math.random() * (windowSize.height - 50),
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            {glyph}
          </motion.div>
        )
      })}
    </div>
  )
}

// Terminal Window Component (Slightly updated for theme)
const TerminalWindow = ({ commands = [] }: { commands?: string[] }) => {
  const [currentCommand, setCurrentCommand] = useState(0)

  useEffect(() => {
    if (!commands || commands.length === 0) return
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [commands])

  return (
    <FuturisticCard glowColor="purple" className="p-4 font-mono text-sm max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">zsh:/portfolio/v2</span>
      </div>
      <div className="text-green-400">
        <span className="text-cyan-400">$</span>{" "}
        <motion.span
          key={currentCommand}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ duration: 1 }}
        >
          {commands[currentCommand]}
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="text-white"
        >
          |
        </motion.span>
      </div>
    </FuturisticCard>
  )
}

// --- NEW: TypewriterRole Component ---
const TypewriterRole = ({ roles, className }: { roles: string[]; className?: string }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const typingSpeed = 100
  const deletingSpeed = 50
  const delayBetweenRoles = 1500

  useEffect(() => {
    let timer: NodeJS.Timeout
    const currentRole = roles[currentRoleIndex]

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.substring(0, prev.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    } else {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => currentRole.substring(0, prev.length + 1))
        }, typingSpeed)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenRoles)
      }
    }
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, delayBetweenRoles])

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="inline-block w-0.5 h-full bg-cyan-400 ml-1"
        style={{ height: "1em", verticalAlign: "text-bottom" }}
      />
    </span>
  )
}

// Project Card Component (Using FuturisticCard)
type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  gradient?: string
  link?: string
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <FuturisticCard className="h-full flex flex-col relative overflow-hidden" glowColor="cyan">
        {/* Project Image Container */}
        <div className="relative overflow-hidden h-64">
          <motion.div
            animate={isHovered ? { scale: 1.1, filter: "brightness(1.2)" } : { scale: 1, filter: "brightness(1)" }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <img
              src={project.image || "/placeholder.svg?height=300&width=500"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
          ></div>
          
          {/* Tech Stack Tags */}
          <div className="absolute top-4 right-4 flex gap-2">
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/20 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {project.title}
            </motion.h3>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 leading-relaxed mb-6 flex-1"
          >
            {project.description}
          </motion.p>

          {/* Technologies Section */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-700/60 hover:bg-cyan-800/70 hover:text-cyan-100 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </FuturisticCard>
    </motion.div>
  )
}

// Experience Card Component (Using FuturisticCard)
type Experience = {
  title: string
  company: string
  period: string
  projects: {
    client: string
    description: string
    achievements: string[]
  }[]
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [expandedProject, setExpandedProject] = useState<number>(0)

  const toggleProject = (projectIndex: number) => {
    setExpandedProject(expandedProject === projectIndex ? -1 : projectIndex)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <FuturisticCard glowColor="purple" className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-800/50 via-purple-800/50 to-indigo-800/50 p-4 sm:p-6 md:p-8 text-white rounded-t-2xl relative">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }} />
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/20 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200"
                >
                  {experience.title}
                </motion.h3>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: 0.5 }}
                  className="text-cyan-200 text-base sm:text-lg font-medium flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="line-clamp-1">{experience.company}</span>
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 flex-shrink-0" />
              <span className="text-cyan-100 font-medium bg-black/30 px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/20 text-sm sm:text-base relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{experience.period}</span>
              </span>
            </motion.div>
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-8 relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-4 sm:mb-6"
          >
            <h4 className="text-lg sm:text-xl font-bold text-gray-200 mb-2 flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
              </motion.div>
              Key Projects & Achievements
            </h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Explore the impactful projects I've delivered during my tenure
            </p>
          </motion.div>
          <div className="space-y-4 sm:space-y-6">
            {experience.projects.map((project, projectIndex) => (
              <motion.div
                key={projectIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-indigo-500 rounded-full shadow-lg">
                  <motion.div
                    className="absolute inset-0 bg-white"
                    animate={{
                      y: ["0%", "100%"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="pl-4 sm:pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
                    className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-500/30 cursor-pointer relative overflow-hidden"
                    onClick={() => toggleProject(projectIndex)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                            animate={{
                              backgroundPosition: ["0% 0%", "100% 100%"],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                          />
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white relative z-10" />
                        </motion.div>
                        <h5 className="text-lg sm:text-xl font-bold text-gray-200 line-clamp-1">{project.client}</h5>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedProject === projectIndex ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                      </motion.div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4 relative z-10">
                      {project.description}
                    </p>
                    <AnimatePresence>
                      {expandedProject === projectIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden relative z-10"
                        >
                          <div className="bg-slate-950/70 rounded-lg sm:rounded-xl p-3 sm:p-5 mt-3 sm:mt-4 border border-cyan-800/40 relative overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            <h6 className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2 relative z-10">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              >
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              </motion.div>
                              Key Achievements
                            </h6>
                            <div className="grid gap-2 sm:gap-3 relative z-10">
                              {project.achievements.map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  whileHover={{ scale: 1.02, x: 5 }}
                                  transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-slate-800/80 to-slate-800/60 rounded-md sm:rounded-lg border border-cyan-900/60 relative overflow-hidden"
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
                                    animate={{
                                      x: ["-100%", "100%"],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                  />
                                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 relative overflow-hidden">
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20"
                                      animate={{
                                        backgroundPosition: ["0% 0%", "100% 100%"],
                                      }}
                                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    />
                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white relative z-10" />
                                  </div>
                                  <span className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed relative z-10">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FuturisticCard>
    </motion.div>
  )
}

// Main Page Component
export default function FuturisticPortfolioV2Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  const navItems = [
    { id: "home", label: "Home" },
    { id: "my-journey", label: "My Journey" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const projectsData = [
    {
      title: "Leonard Corporate Solutions CRM",
      description:
        "I built a CRM for legal document management using Node.js, Drizzle ORM, React, and Next.js with role-based access. It automated lead handling and employee workflows, improving team efficiency.",
      tech: ["React", "Node.js", "PostgreSQL", "Express", "JWT", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-cyan-600/70 to-purple-700/70",
    },
    {
      title: "Sure Second Opinion Platform",
      description:
        "A healthcare platform connecting patients with medical professionals for second opinions, featuring secure communication, appointment scheduling, and HIPAA-compliant data handling.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Node.js", "JWT"],
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-green-600/70 to-cyan-700/70",
    },
  ]

  const experiencesData = [
    {
      title: "Full Stack Developer",
      company: "Sidzsol Technologies",
      period: "April 2024 – Present",
      projects: [
        {
          client: "Leonard Corporate Solutions Pvt. Ltd.",
          description:
            "Designed and developed a full-stack legal CRM platform to manage patents and trademarks, enhancing lead conversion efficiency by 50%.",
          achievements: [
            "Integrated JustDial and IndiaMart APIs to automate lead capture, reducing response time by 40% and optimizing employee workload distribution.",
            "Built dynamic and scalable role-based dashboards (Admin, Employee, Customer) using React.js and Next.js with real-time data synchronization.",
            "Implemented advanced analytics and reporting features that improved client retention rates by 25%.",
          ],
        },
        {
          client: "Sure Second Opinion",
          description:
            "Engineered the backend for a doctor-patient appointment system using Node.js and PostgreSQL, improving booking reliability and system integrity by 60%.",
          achievements: [
            "Implemented secure JWT-based role access control (Doctor, Patient, Admin), ensuring HIPAA-style data protection and compliance.",
            "Contributed to seamless frontend integration using Tailwind CSS, Next.js, and reusable UI components, reducing development time by 30%.",
            "Developed real-time notification system using Socket.io for instant appointment updates and communication.",
          ],
        },
      ],
    },
  ]

  const certificationsData = [
    {
      title: "Frontend Development",
      issuer: "Coding Ninjas",
      description: "Comprehensive frontend development certification covering modern web technologies",
      date: "2024",
      icon: FileCode,
      certificateUrl: "https://certificate.codingninjas.com/view/5e4fecf8e856e512",
    },
    {
      title: "Full Stack Development",
      issuer: "Coding Ninjas",
      description: "Advanced backend and full-stack development certification",
      date: "2024",
      icon: Server,
      certificateUrl: "https://certificate.codingninjas.com/view/5e4fecf8e856e512",
    },
    {
      title: "React Development",
      issuer: "Coding Ninjas",
      description: "Specialized React development certification with advanced concepts",
      date: "2024",
      icon: Layers,
      certificateUrl: "https://certificate.codingninjas.com/view/7b3641864ad8ca6a",
    },
  ]

  const terminalCommands = [
    "npx create-next-app@latest --ts",
    "git clone https://github.com/user/repo.git",
    "npm run dev -- --turbo",
    "docker-compose up -d --build",
    "vercel deploy --prod --yes",
    "git commit -m 'feat: deploy v2.0'",
  ]

  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vishalsinghecs99@gmail.com&su=${encodeURIComponent(
    "Project Inquiry | Vishal Singh Portfolio",
  )}&body=${encodeURIComponent(
    "Hi Vishal,\n\nI discovered your portfolio and I'm impressed by your work. I'd like to discuss a potential project or opportunity.\n\nLooking forward to connecting,\n[Your Name]",
  )}`

  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-cyan-500 selection:text-black">
      <FuturisticLoader />
      <CyberGridBackground />
      <FloatingGlyphs />
      <div className="relative z-20 min-h-screen">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 cursor-pointer">
                <motion.div
                  animate={{
                    rotate: [0, 15, -10, 5, 0],
                    scale: [1, 1.1, 0.9, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-md shadow-cyan-500/30"
                >
                  <Code className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent tracking-wider">
                  VISHAL SINGH
                </span>
              </motion.div>
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                      activeSection === item.id ? "text-cyan-300" : "text-gray-400 hover:text-cyan-300"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="rounded-lg text-gray-300 hover:text-cyan-300 hover:bg-cyan-900/40"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close-icon"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.25, ease: "circOut" }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu-icon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.25, ease: "circOut" }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden bg-black/90 backdrop-blur-md border-t border-cyan-500/30"
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-cyan-300 hover:bg-cyan-900/40 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <section id="home" className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
          className="space-y-8"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-900/60 backdrop-blur-sm text-cyan-300 text-sm font-medium border border-cyan-500/40 shadow-md shadow-cyan-500/20"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-2.5 h-2.5 bg-cyan-400 rounded-full mr-2.5 shadow-[0_0_8px_rgba(0,255,255,0.7)]"
            />
            AVAILABLE FOR WORK
          </motion.div>
          <div className="space-y-4">
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-50 whitespace-nowrap leading-tight relative"
            >
              <span className="relative inline-block">
                <DigitalTextReveal text="Hi, I'm " className="inline-block" />
                <span className="text-cyan-300 font-bold">Vishal</span>
              </span>
            </motion.h1>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Cpu className="w-7 h-7 text-cyan-400" />
              </motion.div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-400 tracking-wide whitespace-nowrap">
                <DigitalTextReveal text="Full Stack Developer" stagger={0.02} />
              </h2>
            </motion.div>
          </div>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl"
          >
            Architecting robust, scalable web applications with a focus on innovative user experiences. Proficient
            in React, Node.js, PostgreSQL, and Next.js, I transform complex challenges into elegant digital
            solutions.
          </motion.p>
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                },
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-gradient-to-r from-cyan-400 to-purple-400 text-cyan-300 px-8 py-4 text-md sm:text-lg font-semibold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-500"
                style={{
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)",
                  backdropFilter: "blur(8px)",
                  background: "linear-gradient(90deg, rgba(0,255,255,0.1), rgba(192,132,252,0.1))",
                  borderImage: "linear-gradient(to right, #22d3ee, #a5b4fc, #f472b6) 1",
                }}
                onMouseMove={(event) => {
                  const button = event.currentTarget;
                  const rect = button.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;
                  button.style.setProperty("--x", `${x}px`);
                  button.style.setProperty("--y", `${y}px`);
                  for (let i = 0; i < 10; i++) {
                    const particle = document.createElement("div");
                    particle.style.position = "absolute";
                    particle.style.width = `${Math.random() * 5 + 3}px`;
                    particle.style.height = particle.style.width;
                    particle.style.borderRadius = "50%";
                    particle.style.backgroundColor = ["#22d3ee", "#a5b4fc", "#f472b6"][Math.floor(Math.random() * 3)];
                    particle.style.left = `${x}px`;
                    particle.style.top = `${y}px`;
                    particle.style.pointerEvents = "none";
                    particle.style.boxShadow = "0 0 12px currentColor, 0 0 20px currentColor";
                    button.appendChild(particle);
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 50 + 30;
                    const duration = Math.random() * 0.7 + 0.5;
                    particle.animate(
                      [
                        { transform: "translate(-50%, -50%) scale(1)", opacity: 0.9 },
                        {
                          transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.1)`,
                          opacity: 0,
                        },
                      ],
                      {
                        duration: duration * 1000,
                        easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                      }
                    );
                    setTimeout(() => particle.remove(), duration * 1000);
                  }
                }}
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=14zaxrcP-A68LL_iKN5NBhT2O0DdOkv0_"
                  download="Vishal_resume_fullstack.pdf"
                  className="flex items-center relative z-10"
                >
                  <Download className="w-6 h-6 mr-3 group-hover:animate-pulse transition-transform duration-300" />
                  <span className="tracking-wide">Download Resume</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-3 transition-transform duration-300" />
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                    style={{
                      left: "var(--x)",
                      top: "var(--y)",
                      transform: "translate(-50%, -50%)",
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      filter: "blur(60px)",
                    }}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                },
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-gradient-to-r from-purple-400 to-cyan-400 text-purple-300 px-8 py-4 text-md sm:text-lg font-semibold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:shadow-[0_0_30px_rgba(192,132,252,0.6)] transition-all duration-500"
                style={{
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)",
                  backdropFilter: "blur(8px)",
                  background: "linear-gradient(90deg, rgba(192,132,252,0.1), rgba(0,255,255,0.1))",
                  borderImage: "linear-gradient(to right, #a5b4fc, #22d3ee, #f472b6) 1",
                }}
                onMouseMove={(event) => {
                  const button = event.currentTarget;
                  const rect = button.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;
                  button.style.setProperty("--x", `${x}px`);
                  button.style.setProperty("--y", `${y}px`);
                  for (let i = 0; i < 10; i++) {
                    const particle = document.createElement("div");
                    particle.style.position = "absolute";
                    particle.style.width = `${Math.random() * 5 + 3}px`;
                    particle.style.height = particle.style.width;
                    particle.style.borderRadius = "50%";
                    particle.style.backgroundColor = ["#a5b4fc", "#22d3ee", "#f472b6"][Math.floor(Math.random() * 3)];
                    particle.style.left = `${x}px`;
                    particle.style.top = `${y}px`;
                    particle.style.pointerEvents = "none";
                    particle.style.boxShadow = "0 0 12px currentColor, 0 0 20px currentColor";
                    button.appendChild(particle);
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 50 + 30;
                    const duration = Math.random() * 0.7 + 0.5;
                    particle.animate(
                      [
                        { transform: "translate(-50%, -50%) scale(1)", opacity: 0.9 },
                        {
                          transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.1)`,
                          opacity: 0,
                        },
                      ],
                      {
                        duration: duration * 1000,
                        easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                      }
                    );
                    setTimeout(() => particle.remove(), duration * 1000);
                  }
                }}
              >
                <Mail className="w-6 h-6 mr-3 group-hover:animate-pulse transition-transform duration-300" />
                <span className="tracking-wide">Contact Me</span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                  style={{
                    left: "var(--x)",
                    top: "var(--y)",
                    transform: "translate(-50%, -50%)",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-6 pt-2"
          >
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Vishalecs",
                  label: "GitHub",
                  color: "from-gray-500 to-gray-700",
                  shadow: "shadow-gray-500/30",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vishalecs",
                  label: "LinkedIn",
                  color: "from-blue-500 to-blue-700",
                  shadow: "shadow-blue-500/30",
                },
                {
                  icon: Mail,
                  href: emailUrl,
                  label: "Email",
                  color: "from-red-500 to-red-700",
                  shadow: "shadow-red-500/30",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl ${social.shadow} hover:${social.shadow.replace("30", "50")} transition-all duration-300 cursor-pointer group`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_5px_cyan]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Right Side - Enhanced Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end group"
        >
          <div className="relative">
            <motion.div whileHover={{ scale: 1.03 }} className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-600/30 via-purple-600/20 to-indigo-600/30 opacity-60 blur-3xl group-hover:opacity-80 transition-opacity"
              />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-500/80 to-purple-600/80 p-1.5 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full bg-slate-950/90 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-black/30">
                  <motion.div
                    animate={{
                      rotateY: [0, 20, -20, 0],
                      scale: [1, 1.05, 0.95, 1],
                      filter: [
                        "drop-shadow(0 0 10px rgba(0,255,255,0.4))",
                        "drop-shadow(0 0 20px rgba(0,255,255,0.6))",
                        "drop-shadow(0 0 10px rgba(0,255,255,0.4))",
                      ],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Code className="w-32 h-32 lg:w-40 lg:h-40 text-cyan-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            {[
              {
                icon: Terminal,
                position: "top-2 right-2",
                color: "bg-green-500/70",
                delay: 0.2,
                size: "w-14 h-14",
              },
              {
                icon: Database,
                position: "bottom-2 left-2",
                color: "bg-blue-500/70",
                delay: 0.4,
                size: "w-14 h-14",
              },
              {
                icon: Server,
                position: "top-1/3 -left-10",
                color: "bg-purple-500/70",
                delay: 0.6,
                size: "w-16 h-16",
              },
              {
                icon: Globe,
                position: "bottom-1/3 -right-10",
                color: "bg-orange-500/70",
                delay: 0.8,
                size: "w-16 h-16",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [-8, 8, -8],
                  rotate: [0, 3, -3, 0],
                  filter: [
                    "drop-shadow(0 0 5px currentColor)",
                    "drop-shadow(0 0 10px currentColor)",
                    "drop-shadow(0 0 5px currentColor)",
                  ],
                }}
                transition={{
                  opacity: { delay: 1 + item.delay, duration: 0.5 },
                  scale: { delay: 1 + item.delay, duration: 0.5 },
                  y: {
                    duration: 3 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1 + item.delay,
                  },
                  rotate: {
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1 + item.delay,
                  },
                  filter: {
                    duration: 3 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1 + item.delay,
                  },
                }}
                className={`absolute ${item.position} ${item.size} ${item.color.replace("bg-", "text-").replace("/70", "")} rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/10`}
                style={{ color: item.color.match(/-(.*?)-/)?.[1] || "white" }}
              >
                <item.icon className="w-2/3 h-2/3 text-white/90" />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8, ease: "backOut" }}
              className="absolute -bottom-10 -left-10 hidden lg:block"
            >
              <TerminalWindow commands={terminalCommands} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="text-center mt-20"
      >
        <motion.button
          onClick={() => scrollToSection("my-journey")}
          whileHover={{ scale: 1.1, y: -3, filter: "drop-shadow(0 0 8px rgba(0,255,255,0.5))" }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ y: { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } }}
          className="text-gray-500 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-cyan-900/30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </div>
  </section>

  <section id="my-journey" style={{ padding: '6rem 1rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(0, 0, 0, 0.8), rgba(107, 33, 168, 0.3))', filter: 'blur(1.5rem)', opacity: 0.6 }}>
        {/* Futuristic half-Earth background */}
        <div 
          style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', animation: 'rotateEarth 60s linear infinite', clipPath: 'circle(50% at 50% 100%)' }}
        ></div>
      </div>
      <style>
        {`
          @keyframes rotateEarth {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Animated Heading: "My Journey" */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          style={{ fontSize: '2.25rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.75rem' }}
        >
          <DigitalTextReveal text="My Journey" stagger={0.08} className="inline-block" />
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          style={{ fontSize: '1.125rem', color: '#d1d5db', lineHeight: '1.75', maxWidth: '48rem', margin: '0 auto 4rem auto', textAlign: 'center' }}
        >
          As a Full Stack Developer, I'm driven by the art of crafting scalable, user-centric web applications. My
          expertise spans the full spectrum of development, leveraging modern frameworks like React, Next.js, and
          Node.js to build seamless digital ecosystems. My technological voyage began with an insatiable curiosity
          for complex problem-solving, guiding me to master tools such as PostgreSQL, MongoDB, and Tailwind CSS. I
          find immense satisfaction in transforming abstract concepts into tangible, impactful realities, constantly
          seeking new technologies to remain at the vanguard of the ever-evolving digital frontier.
        </motion.div>

        {/* Enhanced Core Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.75rem' }}>
            <DigitalTextReveal text="Core Technologies" stagger={0.05} />
          </h2>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: 'center' }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false }}
            style={{ height: '0.25rem', width: '8rem', background: 'linear-gradient(to right, #06b6d4, #a855f7)', margin: '0 auto', borderRadius: '9999px', boxShadow: '0 0 12px rgba(0, 255, 255, 0.4)' }}
          ></motion.div>
        </motion.div>

        {/* Technology Categories */}
        {[
          {
            category: "Frontend",
            technologies: [
              { name: "HTML", icon: FileCode, color: "from-orange-500/50 to-orange-700" },
              { name: "CSS", icon: Palette, color: "from-blue-400/50 to-blue-600" },
              { name: "JavaScript", icon: Code, color: "from-yellow-400/50 to-yellow-600" },
              { name: "React.js", icon: Layers, color: "from-cyan-400/50 to-cyan-600" },
              { name: "Redux", icon: Cpu, color: "from-purple-400/50 to-purple-600" },
              { name: "Next.js", icon: Globe, color: "from-gray-100/50 to-indigo-600" },
              { name: "Tailwind CSS", icon: Palette, color: "from-teal-400/50 to-teal-600" },
            ],
          },
          {
            category: "Backend",
            technologies: [
              { name: "Node.js", icon: Server, color: "from-green-500/50 to-green-700" },
              { name: "Express.js", icon: Zap, color: "from-gray-400/50 to-gray-600" },
              { name: "PostgreSQL", icon: Database, color: "from-sky-500/50 to-sky-700" },
              { name: "MongoDB", icon: Database, color: "from-emerald-500/50 to-emerald-700" },
              { name: "Mongoose", icon: Database, color: "from-red-600/50 to-orange-600" },
              { name: "Drizzle ORM", icon: Database, color: "from-blue-500/50 to-blue-700" },
              { name: "RESTful APIs", icon: Globe, color: "from-indigo-400/50 to-indigo-600" },
            ],
          }
        ].map((category, index) => (
          <motion.div
            key={category.category}
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#67e8f9', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <motion.div
                style={{ width: '1.5rem', height: '1.5rem' }}
              >
                <Cpu style={{ width: '1.5rem', height: '1.5rem' }} />
              </motion.div>
              <DigitalTextReveal text={category.category} stagger={0.03} />
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {category.technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="w-[140px] sm:w-[160px]"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.random() * 0.2, type: "spring", stiffness: 100 }}
                  viewport={{ once: false }}
                >
                  <div className="relative w-full aspect-square">
                    {/* Container Background */}
                    <div className="absolute inset-0 bg-slate-900/90 rounded-xl overflow-hidden">
                      {/* Animated Border */}
                      <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-xl transition-all duration-300"></div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                      
                      {/* Grid Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-4">
                        {/* Icon Container */}
                        <motion.div className="relative mb-4">
                          {/* Icon Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-sm"></div>
                          <div className="relative">
                            <tech.icon className="w-10 h-10 text-white" />
                          </div>
                        </motion.div>

                        {/* Technology Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="text-center"
                        >
                          <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                            {tech.name}
                          </span>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"
                          ></motion.div>
                        </motion.div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-xl"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-50 mb-4 whitespace-nowrap">
                <DigitalTextReveal text="Featured Projects" />
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />
              <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
                A showcase of my capabilities in full-stack development, demonstrating innovative solutions from complex
                CRM systems to specialized healthcare platforms.
              </p>
            </motion.div>
            <div className="grid gap-10 lg:grid-cols-2">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-50 mb-4 whitespace-nowrap">
                <DigitalTextReveal text="Professional Experience" />
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />
              <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                Detailing my professional trajectory and contributions to impactful projects across diverse industries.
              </p>
            </motion.div>
            <div className="space-y-10">
              {experiencesData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/5 to-purple-500/5" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-50 mb-4 whitespace-nowrap">
                <DigitalTextReveal text="Certifications & Accolades" />
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />
              <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                Validating my expertise and commitment to continuous learning in the ever-evolving landscape of web
                development.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group h-full"
                >
                  <FuturisticCard 
                    className="p-6 h-full flex flex-col relative overflow-hidden" 
                    glowColor={index % 2 === 0 ? "cyan" : "purple"}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
                    </div>
                    
                    {/* Certificate Content */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div
                          whileHover={{ rotate: [0, 10, -5, 0], scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                          className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <cert.icon className="w-7 h-7 text-white relative z-10" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-100 mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-400 font-medium flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse" />
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-6 flex-1 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {cert.description}
                      </p>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }} 
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                      >
                        <Button
                          asChild
                          className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500/80 to-purple-600/80 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center py-3"
                          >
                            <motion.span
                              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear", delay: 0.3 }}
                            />
                            <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform relative z-10" />
                            <span className="relative z-10 font-medium">View Certificate</span>
                            <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform relative z-10" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </FuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-50 mb-4 whitespace-nowrap">
                <DigitalTextReveal text="Initiate Connection" />
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />
              <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
                Ready to transform your concepts into digital reality? Let's collaborate and engineer something
                extraordinary.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              <FuturisticCard className="p-8" glowColor="cyan">
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/40"
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-gray-100 mb-4 text-center"
                  >
                    <DigitalTextReveal text="Establish Contact" delay={0.2} />
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-gray-400 mb-8 text-center leading-relaxed"
                  >
                    Reach out for collaborations, project inquiries, or to explore innovative ideas. I'm always eager to
                    engage with new challenges and opportunities.
                  </motion.p>
                  <div className="flex flex-col gap-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600/90 to-cyan-500/90 hover:from-blue-500 hover:to-cyan-400 text-white py-3 text-lg transition-all duration-500 group font-semibold rounded-lg"
                        style={{
                          boxShadow: "0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.2)"
                        }}
                      >
                        <a href={emailUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100"
                            animate={{
                              x: ["-100%", "100%"],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                              ease: "linear"
                            }}
                          />
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(34, 211, 238, 0.2) 0%, transparent 50%)",
                              opacity: 0,
                              transition: "opacity 0.3s"
                            }}
                            onMouseMove={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = ((e.clientX - rect.left) / rect.width) * 100;
                              const y = ((e.clientY - rect.top) / rect.height) * 100;
                              e.currentTarget.style.setProperty("--x", `${x}%`);
                              e.currentTarget.style.setProperty("--y", `${y}%`);
                              e.currentTarget.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = "0";
                            }}
                          />
                          <Mail className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                          <span className="relative z-10 font-mono tracking-wider">Transmit Email</span>
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform duration-300 relative z-10" />
                          <motion.div
                            className="absolute inset-0 border border-cyan-500/30"
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(34, 211, 238, 0.2)",
                                "0 0 30px rgba(34, 211, 238, 0.4)",
                                "0 0 20px rgba(34, 211, 238, 0.2)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut"
                            }}
                          />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600/90 to-pink-500/90 hover:from-purple-500 hover:to-pink-400 text-white py-3 text-lg transition-all duration-500 group font-semibold rounded-lg"
                        style={{
                          boxShadow: "0 0 20px rgba(244, 114, 182, 0.3), inset 0 0 20px rgba(244, 114, 182, 0.2)"
                        }}
                      >
                        <a href="https://www.linkedin.com/in/vishalecs" target="_blank" rel="noopener noreferrer">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100"
                            animate={{
                              x: ["-100%", "100%"],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                              ease: "linear"
                            }}
                          />
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(244, 114, 182, 0.2) 0%, transparent 50%)",
                              opacity: 0,
                              transition: "opacity 0.3s"
                            }}
                            onMouseMove={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = ((e.clientX - rect.left) / rect.width) * 100;
                              const y = ((e.clientY - rect.top) / rect.height) * 100;
                              e.currentTarget.style.setProperty("--x", `${x}%`);
                              e.currentTarget.style.setProperty("--y", `${y}%`);
                              e.currentTarget.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = "0";
                            }}
                          />
                          <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="relative z-10 font-mono tracking-wider">Link In // LinkedIn</span>
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform duration-300 relative z-10" />
                          <motion.div
                            className="absolute inset-0 border border-pink-500/30"
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(244, 114, 182, 0.2)",
                                "0 0 30px rgba(244, 114, 182, 0.4)",
                                "0 0 20px rgba(244, 114, 182, 0.2)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut"
                            }}
                          />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </FuturisticCard>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-20 py-10 px-4 sm:px-8 lg:px-12 bg-black text-white">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-black/95 pointer-events-none" />
          {/* Cyberpunk Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerGridPattern)" />
          </svg>
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-12 left-12 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-600/10 to-purple-600/10 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15], x: [-10, 10, -10], y: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-12 right-12 w-36 h-36 rounded-full bg-gradient-to-br from-purple-600/10 to-cyan-600/10 blur-3xl pointer-events-none"
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.45, 0.2], x: [10, -10, 10], y: [10, -10, 10] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 whitespace-nowrap">
                <DigitalTextReveal text="SYSTEM // CONNECT" />
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)]"
              />
            </motion.div>
            {/* Social Links and Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-6 mb-6"
            >
              {/* Social Links */}
              <div className="flex items-center justify-center gap-6">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Vishalecs",
                    label: "GitHub",
                    color: "from-gray-600 to-gray-800",
                    glow: "shadow-[0_0_20px_rgba(156,163,175,0.4)]",
                    hoverGlow: "shadow-[0_0_30px_rgba(156,163,175,0.6)]",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/vishalecs",
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-800",
                    glow: "shadow-[0_0_20px_rgba(37,99,235,0.4)]",
                    hoverGlow: "shadow-[0_0_30px_rgba(37,99,235,0.6)]",
                  },
                  {
                    icon: Mail,
                    href: emailUrl,
                    label: "Email",
                    color: "from-red-600 to-red-800",
                    glow: "shadow-[0_0_20px_rgba(220,38,38,0.4)]",
                    hoverGlow: "shadow-[0_0_30px_rgba(220,38,38,0.6)]",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative group p-4 rounded-xl bg-gradient-to-br ${social.color} ${social.glow} hover:${social.hoverGlow} transition-all duration-300 border border-white/10`}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 50%)",
                        backgroundSize: "200% 200%",
                        animation: "gradientMove 3s linear infinite",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
              {/* Copyright */}
              <div className="flex flex-col items-center gap-2 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  Crafted with passion and
                  <Coffee className="w-4 h-4 text-yellow-400" />
                  endless coffee
                </span>
                <span className="font-semibold tracking-wider">2025 Vishal Singh. All rights reserved.</span>
              </div>
            </motion.div>
          </div>
          {/* Cyberpunk Border Effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 pointer-events-none" />
        </footer>
      </div>
    </div>
  )
}
