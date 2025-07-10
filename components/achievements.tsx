"use client"

import { motion } from "framer-motion"
import { Trophy, Award, BadgeIcon as Certificate, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    title: "Smart Parking System",
    type: "Hackathon Winner",
    description:
      "Developed an innovative smart parking solution using YOLO object detection and Python, winning recognition at a competitive hackathon.",
    tech: ["YOLO", "Python", "Computer Vision", "IoT"],
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    link: "#",
  },
  {
    title: "IBM GenAI Workshop",
    type: "Certification",
    description:
      "Successfully completed IBM's comprehensive Generative AI workshop, gaining expertise in cutting-edge AI technologies and applications.",
    tech: ["Generative AI", "IBM Watson", "Machine Learning", "AI Ethics"],
    icon: Certificate,
    gradient: "from-blue-500 to-indigo-500",
    link: "#",
  },
]

const stats = [
  { label: "Projects Completed", value: "10+", icon: Trophy },
  { label: "Technologies Mastered", value: "15+", icon: Award },
  { label: "Certifications Earned", value: "5+", icon: Certificate },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Achievement Icon */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${achievement.gradient} p-2 sm:p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-full h-full text-white" />
                </div>

                {/* Achievement Type Badge */}
                <div className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30 mb-3 sm:mb-4">
                  {achievement.type}
                </div>

                {/* Achievement Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">
                  {achievement.title}
                </h3>

                {/* Achievement Description */}
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {achievement.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent text-xs sm:text-sm"
                  asChild
                >
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Recognition & Awards</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Consistently recognized for technical excellence, innovation, and leadership in academic and professional
              settings. Committed to continuous learning and contributing to the AI and data science community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                🏆 Hackathon Winner
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                📜 IBM Certified
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                🎓 Academic Excellence
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
