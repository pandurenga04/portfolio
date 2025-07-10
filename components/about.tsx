"use client"

import { motion } from "framer-motion"
import { MapPin, Globe, MessageCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a passionate and dedicated individual pursuing a B.Tech in Artificial Intelligence and Data
                Science. With a strong foundation in programming and data analysis, I am committed to leveraging
                technology to solve real-world problems and drive innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in the field of AI and Data Science has equipped me with both technical expertise and soft
                skills essential for collaborative and impactful work. I thrive in environments that challenge me to
                think critically and creatively.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 text-center"
              >
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Location</p>
                <p className="text-sm sm:text-base text-white font-semibold">Rajapalayam, Tamil Nadu</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 text-center"
              >
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Languages</p>
                <p className="text-sm sm:text-base text-white font-semibold">English 🇬🇧 | Tamil 🇮🇳</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 text-center"
              >
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Communication</p>
                <p className="text-sm sm:text-base text-white font-semibold">Excellent</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
              <div className="space-y-4">
                {[
                  { title: "Innovation", desc: "Constantly seeking new ways to solve problems" },
                  { title: "Collaboration", desc: "Working effectively with diverse teams" },
                  { title: "Excellence", desc: "Striving for the highest quality in every project" },
                  { title: "Learning", desc: "Continuously expanding knowledge and skills" },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
