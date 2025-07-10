"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, BarChart3, Brain, Eye, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Supermarket Data Analysis",
    description:
      "Comprehensive analysis of supermarket sales data using Power BI and Excel to identify trends, patterns, and business insights.",
    tech: ["Power BI", "Excel", "Data Analysis", "Visualization"],
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/pandurenga04",
  },
  {
    title: "Facial Landmark Detection",
    description:
      "Real-time facial landmark detection system using TensorFlow.js and HTML5 Canvas for web-based computer vision applications.",
    tech: ["TensorFlow.js", "HTML5", "JavaScript", "Computer Vision"],
    icon: Eye,
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/pandurenga04",
  },
  {
    title: "Sentiment Analysis System",
    description:
      "Advanced sentiment analysis model using Python and LSTM networks to classify text emotions and sentiments with high accuracy.",
    tech: ["Python", "LSTM", "NLP", "TensorFlow"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/pandurenga04",
  },
  {
    title: "Task Management System",
    description:
      "Modern task management application built with React and Node.js, featuring real-time updates and collaborative features.",
    tech: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    icon: Layout,
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/pandurenga04",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing expertise in AI, data analysis, and web development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Project Icon */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${project.gradient} p-2 sm:p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-full h-full text-white" />
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
