"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Braces,
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
} from "lucide-react"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"

// Consultation Button Component
const ConsultationBtn = ({
  href,
  target,
  rel,
  children,
}: { href: string; target?: string; rel?: string; children: React.ReactNode }) => (
  <Button
    asChild
    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <a href={href} target={target} rel={rel} className="flex items-center justify-center">
      <Mail className="w-5 h-5 mr-2" />
      {children}
    </a>
  </Button>
)

// Animated Grid Background Component
const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-purple-50/80" />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/50"
            />
          </pattern>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-100/40"
            />
          </pattern>
          <pattern id="largeGrid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-300/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#largeGrid)" />
      </svg>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-purple-400/40 to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              top: 0,
              bottom: 0,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleY: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

// Floating Code Elements
const FloatingCodeElements = () => {
  const codeSnippets = [
    "{ React }",
    "npm install",
    "const app = ()",
    "SELECT * FROM",
    "git commit",
    "API.get()",
    "useState()",
    "async/await",
    "JWT.verify()",
    "PostgreSQL",
    "Next.js",
    "Tailwind",
  ]
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
      {codeSnippets.map((snippet, i) => {
        const x = Math.random() * (windowSize.width - 100)
        const y = Math.random() * (windowSize.height - 50)
        return (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-blue-400/40 select-none"
            initial={{ x, y, opacity: 0 }}
            animate={{
              x: Math.random() * (windowSize.width - 100),
              y: Math.random() * (windowSize.height - 50),
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
            }}
          >
            {snippet}
          </motion.div>
        )
      })}
    </div>
  )
}

// Floating Bubbles Background Component
const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-indigo-400/20 backdrop-blur-sm border border-white/30"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Terminal Window Component
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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-900 rounded-lg p-4 font-mono text-sm shadow-2xl border border-gray-700 max-w-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">terminal</span>
      </div>
      <div className="text-green-400">
        <span className="text-blue-400">$</span>{" "}
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
    </motion.div>
  )
}

// Project Card Component
type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  gradient?: string
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <Card className="backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden h-56">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
          <div className="absolute top-4 right-4 flex gap-2">
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
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
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            />
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-700 leading-relaxed mb-6 flex-1">{project.description}</p>
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Experience Card Component
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-4 sm:p-6 md:p-8 text-white">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
              >
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2"
                >
                  {experience.title}
                </motion.h3>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-blue-100 text-base sm:text-lg font-medium flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="line-clamp-1">{experience.company}</span>
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 flex-shrink-0" />
              <span className="text-blue-100 font-medium bg-white/20 px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/30 text-sm sm:text-base">
                {experience.period}
              </span>
            </motion.div>
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-4 sm:mb-6"
          >
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
              Key Projects & Achievements
            </h4>
            <p className="text-sm sm:text-base text-gray-600">
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
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
                <div className="pl-4 sm:pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200/50 cursor-pointer"
                    onClick={() => toggleProject(projectIndex)}
                  >
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h5 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">{project.client}</h5>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedProject === projectIndex ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </motion.div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {project.description}
                    </p>
                    <AnimatePresence>
                      {expandedProject === projectIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white/80 rounded-lg sm:rounded-xl p-3 sm:p-5 mt-3 sm:mt-4 border border-blue-200/30">
                            <h6 className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              Key Achievements
                            </h6>
                            <div className="grid gap-2 sm:gap-3">
                              {project.achievements.map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-md sm:rounded-lg border border-green-200/50"
                                >
                                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                  </div>
                                  <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
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
      </Card>
    </motion.div>
  )
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
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

  const techStack: { name: string; icon: any; color: string; delay: number }[] = [
    { name: "HTML", icon: Code, color: "from-orange-400 to-orange-600", delay: 0 },
    { name: "CSS", icon: Palette, color: "from-blue-400 to-blue-600", delay: 0.1 },
    { name: "JavaScript", icon: Braces, color: "from-yellow-400 to-yellow-600", delay: 0.2 },
    { name: "React", icon: Layers, color: "from-cyan-400 to-cyan-600", delay: 0.3 },
    { name: "Node.js", icon: Server, color: "from-green-400 to-green-600", delay: 0.4 },
    { name: "Express", icon: Zap, color: "from-gray-400 to-gray-600", delay: 0.5 },
    { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-blue-700", delay: 0.6 },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700", delay: 0.7 },
    { name: "Tailwind", icon: Palette, color: "from-teal-400 to-teal-600", delay: 0.8 },
    { name: "Git", icon: GitBranch, color: "from-red-400 to-red-600", delay: 0.9 },
    { name: "Next.js", icon: Globe, color: "from-black to-gray-800", delay: 1.0 },
  ]

  const projects = [
    {
      title: "Leonard Corporate Solutions CRM",
      description:
        "A comprehensive Customer Relationship Management system built for corporate solutions with advanced analytics and client management features. Features include lead tracking, automated workflows, and real-time reporting dashboards.",
      tech: ["React", "Node.js", "PostgreSQL", "Express", "JWT", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=500",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Sure Second Opinion Platform",
      description:
        "A healthcare platform connecting patients with medical professionals for second opinions, featuring secure communication, appointment scheduling, and HIPAA-compliant data handling.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Socket.io", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
      gradient: "from-green-500 to-blue-600",
    },
  ]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Sidzsol Technologies",
      period: "July 2024 – Present",
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

  const certifications = [
    {
      title: "Frontend Development",
      issuer: "Coding Ninjas",
      description: "Comprehensive frontend development certification covering modern web technologies",
      date: "2024",
      icon: FileCode,
      certificateUrl: "https://certificate.codingninjas.com/view/5e4fecf8e856e512",
    },
    {
      title: "Backend / Full Stack Development",
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
    "npm create next-app",
    "git clone repository",
    "npm run dev",
    "docker compose up",
    "yarn build",
    "git push origin main",
  ]

  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vishalsinghecs99@gmail.com&su=${encodeURIComponent(
    "Hello Vishal - Let's Connect!",
  )}&body=${encodeURIComponent(
    "Hi Vishal,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards,",
  )}`

  return (
    <div className="min-h-screen">
      <AnimatedGrid />
      <FloatingCodeElements />
      <div className="relative z-20 min-h-screen">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 cursor-pointer">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
                >
                  <Code className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Vishal Singh
                </span>
              </motion.div>
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
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
                  className="rounded-xl"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
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
                className="lg:hidden backdrop-blur-xl bg-white/90 border-t border-gray-200/50"
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 rounded-xl transition-all duration-300"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm text-blue-700 text-sm font-medium border border-blue-200/50"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  />
                  Available for work
                </motion.div>
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                  >
                    Hi, I'm{" "}
                    <motion.span
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Vishal
                    </motion.span>
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Cpu className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600">
                      Full Stack Developer
                    </h2>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                >
                  I'm a passionate Full Stack Developer with 1 year of experience in building scalable web applications
                  using React, Node.js, PostgreSQL, and Next.js. I love creating digital experiences that make a
                  difference.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-2xl hover:shadow-blue-1/25 transition-all duration-300 group"
                    >
                      <a
                        href="https://drive.google.com/uc?export=download&id=1SkWSCVvK4uiLOFvsrvIPqFjq73NzAvLW"
                        download="Vishal_resume_fullstack.pdf"
                        className="flex items-center"
                      >
                        <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        Download Resume
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      onClick={() => scrollToSection("contact")}
                      className="border-2 border-blue-600/30 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl text-lg font-medium backdrop-blur-sm bg-white/50 transition-all duration-300 group"
                    >
                      <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Contact Me
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Github, href: "https://github.com/Vishalecs", color: "from-gray-600 to-gray-800" },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/vishalecs",
                        color: "from-blue-600 to-blue-800",
                      },
                      { icon: Mail, href: emailUrl, color: "from-red-500 to-red-700" },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <motion.div whileHover={{ scale: 1.05 }} className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 opacity-20 blur-3xl"
                    />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 shadow-2xl">
                      <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/50">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <Code className="w-32 h-32 lg:w-40 lg:h-40 text-blue-600" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  {[
                    { icon: Terminal, position: "top-4 right-4", color: "from-green-400 to-green-600", delay: 0 },
                    { icon: Database, position: "bottom-4 left-4", color: "from-blue-400 to-blue-600", delay: 1 },
                    { icon: Server, position: "top-1/2 -left-8", color: "from-purple-400 to-purple-600", delay: 2 },
                    { icon: Globe, position: "top-1/2 -right-8", color: "from-orange-400 to-orange-600", delay: 3 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3 + index, repeat: Number.POSITIVE_INFINITY, delay: item.delay }}
                      className={`absolute ${item.position} w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl backdrop-blur-sm`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-8 -left-8 hidden lg:block"
                  >
                    <TerminalWindow commands={terminalCommands} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-16"
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.button>
            </motion.div>
          </div>
        </section>
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              />
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
                    <p className="text-gray-600 leading-relaxed">
                      I'm a Full Stack Developer with a passion for building scalable and user-friendly web
                      applications. With a strong foundation in both frontend and backend technologies, I specialize in
                      creating seamless digital experiences using modern frameworks like React, Next.js, and Node.js. My
                      journey in tech began with a curiosity for problem-solving, which led me to master tools like
                      PostgreSQL, MongoDB, and Tailwind CSS. I thrive on transforming ideas into reality and am always
                      eager to learn new technologies to stay ahead in the ever-evolving tech landscape.
                    </p>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900">Tech Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: tech.delay, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        boxShadow: "0 8px 32px 0 rgba(0, 118, 255, 0.25)",
                      }}
                      className={`flex items-center p-4 rounded-xl bg-gradient-to-r ${tech.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ scale: [0, 1.5, 0], opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: tech.delay }}
                      />
                      <motion.div whileHover={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }}>
                        <tech.icon className="w-6 h-6 mr-3" />
                      </motion.div>
                      <span className="relative z-10">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              />
              <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
                Explore my recent projects showcasing my skills in full-stack development, from CRM systems to
                healthcare platforms.
              </p>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              />
              <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
                My professional journey building gloire solutions for clients across different industries.
              </p>
            </motion.div>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="certifications"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              />
              <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
                Professional certifications that validate my expertise in modern web development technologies.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4"
                      >
                        <cert.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{cert.title}</h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{cert.description}</p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          View Certificate
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              />
              <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
                Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              <Card className="backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.03) 50%, rgba(99, 102, 241, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(99, 102, 241, 0.03) 50%, rgba(59, 130, 246, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.03) 50%, rgba(99, 102, 241, 0.05) 100%)",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6"
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-gray-900 mb-4 text-center"
                  >
                    Get in Touch
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-8 text-center leading-relaxed"
                  >
                    Feel free to reach out for collaboration, opportunities, or just to say hi! I'm always excited to
                    discuss new projects and ideas.
                  </motion.p>
                  <div className="flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ConsultationBtn href={emailUrl} target="_blank" rel="noopener noreferrer">
                        Email Me
                      </ConsultationBtn>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-2 border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white py-3 text-lg transition-all duration-300 group backdrop-blur-sm bg-white/50"
                      >
                        <a href="https://www.linkedin.com/in/vishalecs" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          Connect on LinkedIn
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
    <footer className="relative py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white overflow-hidden">
  {/* Enhanced Grid Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-blue-950/95 to-purple-950/95" />
    <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="footerGrid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footerGrid)" />
    </svg>

    {/* Animated Gradient Orbs */}
    <motion.div
      className="absolute top-12 left-12 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/25 to-purple-600/25 blur-4xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.25, 0.55, 0.25],
        x: [-15, 15, -15],
        y: [-15, 15, -15],
      }}
      transition={{
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-gradient-to-br from-purple-600/25 to-indigo-600/25 blur-4xl"
      animate={{
        scale: [1.3, 1, 1.3],
        opacity: [0.3, 0.65, 0.3],
        x: [15, -15, 15],
        y: [15, -15, 15],
      }}
      transition={{
        duration: 12,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 3,
      }}
    />
    <motion.div
      className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600/25 to-blue-600/25 blur-3xl"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.5, 0.2],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 14,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 5,
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center"
    >
      {/* Logo Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 15 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-6 mb-8"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl backdrop-blur-md bg-opacity-30 border border-white/20">
            <Code className="w-8 h-8 text-white" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <div className="text-left">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight">
            Vishal Singh
          </span>
          <p className="text-blue-200 text-sm font-semibold tracking-wide">Full Stack Developer</p>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 relative"
      >
        <motion.div
          className="absolute -top-4 -left-4 text-6xl text-blue-400/20 font-serif"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          "
        </motion.div>
        <p className="text-lg text-blue-100 italic leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
          Crafting digital experiences that inspire and connect, one pixel at a time.
        </p>
        <motion.div
          className="absolute -bottom-4 -right-4 text-6xl text-purple-400/20 font-serif rotate-180"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
        >
          "
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-8 mb-10"
      >
        {[
          {
            icon: Github,
            href: "https://github.com/Vishalecs",
            label: "GitHub",
            color: "from-gray-600 to-gray-800",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/vishalecs",
            label: "LinkedIn",
            color: "from-blue-600 to-blue-800",
          },
          { icon: Mail, href: emailUrl, label: "Email", color: "from-red-600 to-red-800" },
        ].map((social, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.25, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-500`}
              animate={{ scale: [1, 1.1, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.6 }}
            />
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-white/50 group-hover:shadow-lg"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-200 font-semibold whitespace-nowrap"
            >
              {social.label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative mb-8"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 text-blue-200"
      >
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="w-5 h-5 text-red-400" />
            </motion.div>
            <span className="text-sm font-medium tracking-wide">Crafted with passion and</span>
            <motion.div
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <Coffee className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <span className="text-sm font-medium tracking-wide">endless coffee</span>
          </div>
        </motion.div>

        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-xs font-bold">©</span>
          </div>
          <p className="text-sm font-semibold tracking-wide">2025 Vishal Singh. All rights reserved.</p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-16 right-16 opacity-15"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Code className="w-8 h-8 text-blue-300" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-16 opacity-15"
        animate={{ y: [10, -10, 10], rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Terminal className="w-6 h-6 text-purple-300" />
      </motion.div>
    </motion.div>
  </div>
</footer>
      </div>
    </div>
  )
}
