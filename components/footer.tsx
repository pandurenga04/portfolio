"use client"

import { motion } from "framer-motion"
import { Heart, Code, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="py-12 border-t border-white/10 backdrop-blur-md bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
          >
            <span>© 2025 Pandurenga</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>Made with passion</span>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 text-gray-400 mb-4 md:mb-0"
          >
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span className="text-sm"></span>
            </div>
            <div className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span className="text-sm"></span>
            </div>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-400 hover:text-white hover:bg-white/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>

        {/* Additional Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Passionate about turning data into insights and building intelligent solutions. Always open to new
            opportunities and collaborations in AI, ML, and Data Science.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
