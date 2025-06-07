"use client"

import { useState, useEffect, forwardRef } from "react"
import classNames from "classnames"

interface LetterFxProps {
  children: string
  speed?: "slow" | "medium" | "fast"
  trigger?: "hover" | "instant" | "custom"
  charset?: string
  className?: string
  onTrigger?: () => void
}

const LetterFx = forwardRef<HTMLDivElement, LetterFxProps>(
  (
    {
      children,
      speed = "medium",
      trigger = "hover",
      charset = "X@#$%^&*()_+-=[]{}|;:,.<>?",
      className,
      onTrigger,
      ...rest
    },
    ref,
  ) => {
    const [displayText, setDisplayText] = useState(children)
    const [isAnimating, setIsAnimating] = useState(false)

    const speedMap = {
      slow: 150,
      medium: 100,
      fast: 50,
    }

    const animateText = () => {
      if (isAnimating) return

      setIsAnimating(true)
      const originalText = children
      const duration = speedMap[speed]
      const iterations = 10

      let currentIteration = 0

      const interval = setInterval(() => {
        if (currentIteration < iterations) {
          // Generate random characters
          const randomText = originalText
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              // Gradually reveal the correct character
              const revealThreshold = (currentIteration / iterations) * originalText.length
              if (index < revealThreshold) {
                return originalText[index]
              }
              return charset[Math.floor(Math.random() * charset.length)]
            })
            .join("")

          setDisplayText(randomText)
          currentIteration++
        } else {
          setDisplayText(originalText)
          setIsAnimating(false)
          clearInterval(interval)
        }
      }, duration)
    }

    useEffect(() => {
      if (trigger === "instant") {
        // Delay the animation slightly for better visual effect
        const timer = setTimeout(() => {
          animateText()
        }, 500)
        return () => clearTimeout(timer)
      }
    }, [trigger])

    const handleTrigger = () => {
      if (trigger === "hover" || trigger === "custom") {
        animateText()
        onTrigger?.()
      }
    }

    return (
      <div
        ref={ref}
        className={classNames("inline-block cursor-pointer", className)}
        onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
        onClick={trigger === "custom" ? handleTrigger : undefined}
        {...rest}
      >
        {displayText}
      </div>
    )
  },
)

LetterFx.displayName = "LetterFx"
export { LetterFx }
