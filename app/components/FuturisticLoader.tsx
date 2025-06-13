"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const FuturisticLoader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const duration = 5000 // 5 seconds minimum loading time

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress)
      } else {
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }

    requestAnimationFrame(updateProgress)

    return () => {
      setIsLoading(false)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative w-full max-w-4xl mx-auto px-4">
            {/* Central Loading Element */}
            <div className="relative w-40 h-40 mx-auto">
              {/* Outer Hexagon */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border-2 border-cyan-500/30 clip-path-hexagon" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-purple-500/30"
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-cyan-500/30"
                animate={{
                  rotate: 360,
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Center Circle */}
              <motion.div
                className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI * 2) / 12) * 40,
                      Math.cos((i * Math.PI * 2) / 12) * 60,
                      Math.cos((i * Math.PI * 2) / 12) * 40,
                    ],
                    y: [
                      Math.sin((i * Math.PI * 2) / 12) * 40,
                      Math.sin((i * Math.PI * 2) / 12) * 60,
                      Math.sin((i * Math.PI * 2) / 12) * 40,
                    ],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI * 2) / 6) * 70,
                      Math.cos((i * Math.PI * 2) / 6) * 70,
                    ],
                    y: [
                      Math.sin((i * Math.PI * 2) / 6) * 70,
                      Math.sin((i * Math.PI * 2) / 6) * 70,
                    ],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Loading Text and Progress */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-6"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SYSTEM INITIALIZING
                </span>
              </motion.h2>

              {/* Progress Bar */}
              <div className="relative w-64 h-2 mx-auto bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="mt-2 text-sm font-mono text-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 