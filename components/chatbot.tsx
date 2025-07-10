"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const knowledgeBase = {
  name: "Pandurengasrinivasan G",
  role: "ML Engineer | Data Analyst | AI Enthusiast",
  education: {
    current: "B.Tech in AI & Data Science at Kongu Engineering College (2023-2026)",
    completed: "Diploma in Computer Engineering from AK Polytechnic College (2020-2023)",
  },
  skills: {
    technical: ["Python", "Java", "Power BI", "Excel", "SQL", "MongoDB", "TensorFlow", "Keras", "Scikit-learn"],
    soft: ["Communication", "Leadership", "Teamwork", "Problem Solving", "Critical Thinking"],
  },
  experience: [
    "Computer Vision Engineer at EVAI Technologies (Feb 2025 - Present)",
    "Student Intern (GenAI) at Generative AI Consortium (Nov 2024 - April 2025)",
    "Data Analyst Intern at Unified Mentor (April 2024 - May 2024)",
  ],
  projects: [
    "Supermarket Data Analysis using Power BI and Excel",
    "Facial Landmark Detection with TensorFlow.js",
    "Sentiment Analysis System using Python and LSTM",
    "Task Management System with React and Node.js",
  ],
  achievements: [
    "Smart Parking System winner at Hackathon using YOLO",
    "IBM GenAI Workshop certification",
    "Multiple technical certifications",
  ],
  contact: {
    email: "pandurengasrinivasang@gmail.com",
    phone: "+91 99409 47158",
    location: "Rajapalayam, Tamil Nadu, India",
    github: "https://github.com/pandurenga04",
    linkedin: "https://www.linkedin.com/in/pandurengasrinivasan-g/",
  },
  languages: ["English (Fluent)", "Tamil (Fluent)"],
}

const getResponse = (question: string): string => {
  const q = question.toLowerCase()

  // Greetings
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return `Hello! I'm here to help you learn about ${knowledgeBase.name}. Feel free to ask me about his education, skills, projects, experience, or anything else you'd like to know!`
  }

  // Name and basic info
  if (q.includes("name") || q.includes("who")) {
    return `This is ${knowledgeBase.name}, an aspiring ${knowledgeBase.role}. He's currently pursuing B.Tech in AI & Data Science and has hands-on experience in machine learning, data analysis, and computer vision.`
  }

  // Education
  if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("degree")) {
    return `${knowledgeBase.name} is currently pursuing ${knowledgeBase.education.current}. He previously completed ${knowledgeBase.education.completed}. His academic focus is on AI, machine learning, and data science applications.`
  }

  // Skills
  if (q.includes("skill") || q.includes("technology") || q.includes("programming")) {
    return `${knowledgeBase.name} has strong technical skills including: ${knowledgeBase.skills.technical.join(", ")}. He also excels in soft skills like ${knowledgeBase.skills.soft.join(", ")}. His expertise spans machine learning, data analysis, and web development.`
  }

  // Experience
  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("intern")) {
    return `${knowledgeBase.name} has valuable professional experience: ${knowledgeBase.experience.join("; ")}. He's gained hands-on experience in AI research, data analysis, and computer vision applications.`
  }

  // Projects
  if (q.includes("project") || q.includes("portfolio") || q.includes("built") || q.includes("developed")) {
    return `${knowledgeBase.name} has worked on several impressive projects: ${knowledgeBase.projects.join("; ")}. These projects showcase his skills in data analysis, machine learning, computer vision, and full-stack development.`
  }

  // Achievements
  if (q.includes("achievement") || q.includes("award") || q.includes("certification") || q.includes("hackathon")) {
    return `${knowledgeBase.name} has notable achievements including: ${knowledgeBase.achievements.join("; ")}. He's consistently recognized for technical excellence and innovation.`
  }

  // Contact
  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) {
    return `You can contact ${knowledgeBase.name} at ${knowledgeBase.contact.email} or ${knowledgeBase.contact.phone}. He's located in ${knowledgeBase.contact.location}. You can also find him on GitHub and LinkedIn through the social links on this website.`
  }

  // Location
  if (q.includes("location") || q.includes("where") || q.includes("live")) {
    return `${knowledgeBase.name} is based in ${knowledgeBase.contact.location}. He's open to remote opportunities and collaborations worldwide.`
  }

  // Languages
  if (q.includes("language") || q.includes("speak")) {
    return `${knowledgeBase.name} speaks ${knowledgeBase.languages.join(" and ")}. This enables him to work effectively in diverse, multicultural environments.`
  }

  // AI/ML specific
  if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("data science")) {
    return `${knowledgeBase.name} specializes in AI and Data Science with expertise in machine learning frameworks like TensorFlow, Keras, and Scikit-learn. He's worked on projects involving computer vision, sentiment analysis, and data visualization. His current role as a Computer Vision Engineer at EVAI Technologies involves developing models for object detection and image classification.`
  }

  // Career goals
  if (q.includes("goal") || q.includes("future") || q.includes("career") || q.includes("aspiration")) {
    return `${knowledgeBase.name} is passionate about leveraging AI and data science to solve real-world problems. He aims to contribute to innovative AI solutions and drive data-driven decision-making in organizations. He's always eager to learn new technologies and collaborate on challenging projects.`
  }

  // Default response
  return `I'd be happy to help you learn more about ${knowledgeBase.name}! You can ask me about his education, skills, projects, work experience, achievements, or how to contact him. What would you like to know?`
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hi! I'm here to help you learn about ${knowledgeBase.name}. Ask me anything about his education, skills, projects, or experience!`,
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        {isOpen ? (
          <X className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 w-80 sm:w-96 h-96 sm:h-[500px] backdrop-blur-md bg-black/80 rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">AI Assistant</h3>
                  <p className="text-white/80 text-xs">Ask me about Pandurenga</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 sm:p-4 h-64 sm:h-80 overflow-y-auto space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? "" : "flex-row-reverse space-x-reverse"}`}
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500"
                      }`}
                    >
                      {message.isBot ? (
                        <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      ) : (
                        <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl p-2 sm:p-3 ${
                        message.isBot
                          ? "bg-white/10 text-white"
                          : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-2xl p-2 sm:p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 text-xs sm:text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-4"
                >
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
