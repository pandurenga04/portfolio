"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, Users, MessageSquare, Target, Lightbulb, Award } from "lucide-react"

const technicalSkills = [
  { name: "Python", level: 90, icon: Code },
  { name: "Java", level: 80, icon: Code },
  { name: "Power BI", level: 85, icon: Database },
  { name: "Excel", level: 90, icon: Database },
  { name: "SQL", level: 85, icon: Database },
  { name: "MongoDB", level: 75, icon: Database },
  { name: "TensorFlow", level: 75, icon: Brain },
  { name: "Keras", level: 75, icon: Brain },
]

const softSkills = [
  { name: "Communication", level: 95, icon: MessageSquare },
  { name: "Teamwork", level: 90, icon: Users },
  { name: "Leadership", level: 85, icon: Award },
  { name: "Problem Solving", level: 90, icon: Target },
  { name: "Critical Thinking", level: 88, icon: Lightbulb },
  { name: "Time Management", level: 90, icon: Lightbulb },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code className="mr-3 h-6 w-6 text-purple-400" />
              Technical Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2" />
                      <span className="text-sm sm:text-base text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm sm:text-base text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Users className="mr-3 h-6 w-6 text-purple-400" />
              Soft Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2" />
                      <span className="text-sm sm:text-base text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm sm:text-base text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Categories */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-white/10 text-center"
              >
                <Brain className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold">AI/ML</h4>
                <p className="text-gray-400 text-sm">Machine Learning & Deep Learning</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-white/10 text-center"
              >
                <Database className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold">Data Analysis</h4>
                <p className="text-gray-400 text-sm">Data Visualization & Analytics</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
