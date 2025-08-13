"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Student Intern (GenAI)",
    company: "Generative AI Consortium",
    period: "Nov 2024 - April 2025",
    location: "Remote",
    type: "Completed",
    description:
      "Working on cutting-edge generative AI projects and research, contributing to innovative solutions in artificial intelligence.",
    achievements: [
      "Developing generative AI models and applications",
      "Collaborating with industry experts on AI research",
      "Contributing to open-source AI projects",
      "Learning advanced machine learning techniques",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "April 2024 - May 2024",
    location: "Remote",
    type: "Completed",
    description:
      "Gained hands-on experience in data analysis, visualization, and business intelligence using industry-standard tools.",
    achievements: [
      "Analyzed large datasets to extract meaningful insights",
      "Created interactive dashboards using Power BI",
      "Performed statistical analysis and data modeling",
      "Presented findings to stakeholders and team members",
    ],
  },
  {
    title: "Computer Vision Engineer",
    company: "EVAI Technologies",
    period: "Feb 2025 - Aug 2025",
    location: "Remote",
    type: "Completed",
    description:
      "Gained hands-on experience in computer vision, image processing, and deep learning using state-of-the-art frameworks.",
    achievements: [
      "Developed models for object detection and image classification",
      "Preprocessed image datasets for training and evaluation",
      "Utilized TensorFlow and OpenCV for feature extraction and analysis",
      "Presented visual results and model performance to stakeholders",
    ],
  },
    {
    title: "Founder & CMO",
    company: "Bit Patterns",
    period: "Apr 2025 - Present",
    location: "Coimbatore",
    type: "Current",
    description:
      "creating exceptional software solutions that drive business growth and innovation.",
    vision: [
      "To empower businesses through innovative digital solutions that solve complex problems",
      "enhance efficiency, and drive growth. We strive to deliver exceptional",
      "value through technical excellence and client-focused development.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Node - Hidden on mobile */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 hidden md:block" />

                {/* Content */}
                <div className="md:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="backdrop-blur-md bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2" />
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === "Current" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-base sm:text-lg text-purple-400 font-semibold mb-3 sm:mb-4">{exp.company}</h4>

                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{exp.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center text-white font-medium text-sm sm:text-base">
                        <TrendingUp className="h-4 w-4 text-purple-400 mr-2" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm sm:text-base text-gray-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
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
