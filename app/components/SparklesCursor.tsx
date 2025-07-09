'use client'
import React, { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  createdAt: number
  color: string
}

export default function SparklesCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const colors = [
    'url(#sparkleGradient1)',
    'url(#sparkleGradient2)',
    'url(#sparkleGradient3)',
    'url(#sparkleGradient4)',
    'url(#sparkleGradient5)',
    'url(#sparkleGradient6)'
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Create new sparkle
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        createdAt: Date.now(),
        color: colors[Math.floor(Math.random() * colors.length)]
      }

      setSparkles(prevSparkles => [...prevSparkles, newSparkle])
    }

    // Clean up old sparkles
    const cleanupInterval = setInterval(() => {
      setSparkles(prevSparkles => 
        prevSparkles.filter(sparkle => Date.now() - sparkle.createdAt < 1000)
      )
    }, 100)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        >
          <div className="animate-sparkle">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="12" cy="12" r="12" fill={sparkle.color} />
              <defs>
                <radialGradient
                  id="sparkleGradient1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) rotate(90) scale(12)"
                >
                  <stop stopColor="#FF6B6B" />
                  <stop offset="1" stopColor="#FF6B6B" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="sparkleGradient2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) rotate(90) scale(12)"
                >
                  <stop stopColor="#4ECDC4" />
                  <stop offset="1" stopColor="#4ECDC4" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="sparkleGradient3"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) rotate(90) scale(12)"
                >
                  <stop stopColor="#FFD93D" />
                  <stop offset="1" stopColor="#FFD93D" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="sparkleGradient4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) rotate(90) scale(12)"
                >
                  <stop stopColor="#6C5CE7" />
                  <stop offset="1" stopColor="#6C5CE7" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="sparkleGradient5"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) rotate(90) scale(12)"
                >
                  <stop stopColor="#A8E6CF" />
                  <stop offset="1" stopColor="#A8E6CF" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="sparkleGradient6"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) rotate(90) scale(12)"
                >
                  <stop stopColor="#FF9A9E" />
                  <stop offset="1" stopColor="#FF9A9E" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
} 