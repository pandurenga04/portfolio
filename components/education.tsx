"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "B.Tech in AI & Data Science",
    institution: "Kongu Engineering College",
    period: "2023 - 2026",
    location: "Erode, Tamil Nadu",
    status: "Currently Pursuing",
    description:
      "Specializing in Artificial Intelligence, Machine Learning, and Data Science with focus on practical applications and research.",
    highlights: ["Machine Learning", "Deep Learning", "Data Analytics", "AI Ethics"],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "AK Polytechnic College",
    period: "2020 - 2023",
    location: "Tamil Nadu",
    status: "Completed",
    description: "Comprehensive foundation in computer science fundamentals, programming, and software development.",
    highlights: ["Programming Fundamentals", "Database Management", "Software Engineering", "Web Development"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Node - Hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10" />

                {/* Content */}
                <div className="w-full lg:w-5/12 lg:mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="backdrop-blur-md bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 mr-2" />
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.status === "Currently Pursuing"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-base sm:text-lg text-purple-400 font-semibold mb-3">{edu.institution}</h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 mb-4">{edu.description}</p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
