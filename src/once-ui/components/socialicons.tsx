"use client"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"

export function SocialIcons() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: "#",
      color: "hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: "#",
      color: "hover:text-gray-300",
    },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={social.href}
            className={`text-gray-400 transition-colors duration-300 ${social.color}`}
            aria-label={social.name}
          >
            <IconComponent />
          </a>
        )
      })}
    </div>
  )
}
