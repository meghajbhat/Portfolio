'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaLink, FaPython, FaRobot, FaBrain } from 'react-icons/fa'

export default function UniversityAdmissionChatbotProject() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || ''
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#0B1121] text-white">
      {/* Back Button */}
      <div className="fixed top-24 left-4 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg text-gray-400 hover:text-emerald-400 transition-colors duration-300 border border-emerald-500/10 hover:border-emerald-500/30"
        >
          <span>←</span> Back
        </Link>
      </div>

      {/* Vertical Navigation */}
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="bg-[#1A2333] p-4 rounded-lg border border-emerald-500/10">
          <h3 className="text-sm font-medium text-emerald-400 mb-4">Quick Navigation</h3>
          <ul className="space-y-4">
            <li>
              <a href="#overview" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Overview</a>
            </li>
            <li>
              <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Features</a>
            </li>
            <li>
              <a href="#tech-stack" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Tech Stack</a>
            </li>
            <li>
              <a href="#key-functions" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Key Functions</a>
            </li>
            <li>
              <a href="#installation" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Installation</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-32">
        <div className="space-y-16">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                University Admission Chatbot
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/meghajbhat/University-Admission-Chatbot" 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg text-gray-400 hover:text-emerald-400 transition-colors duration-300 border border-emerald-500/10 hover:border-emerald-500/30"
              >
                <FaGithub className="text-xl" />
                <span>View on GitHub</span>
              </a>
            </div>
          </header>

          {/* Project Image */}
          <div className="bg-[#1A2333] rounded-2xl p-2 border border-emerald-500/10">
            <img 
              src="/images/projects/admission-chatbot.png" 
              alt="University Admission Chatbot" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Overview Section */}
          <section id="overview" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              An intelligent chatbot system designed to assist prospective students with university admission inquiries. Built using Python and natural language processing techniques, the chatbot provides instant, accurate responses to common admission-related questions, streamlining the admission process for both students and university staff.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Core Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Natural language understanding</li>
                  <li>Context-aware responses</li>
                  <li>Multi-language support</li>
                  <li>24/7 availability</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Information Coverage</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Admission requirements</li>
                  <li>Course information</li>
                  <li>Application deadlines</li>
                  <li>Fee structure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaPython className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">Core</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Python</li>
                  <li>NLTK</li>
                  <li>TensorFlow</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaRobot className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">NLP</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>SpaCy</li>
                  <li>Transformers</li>
                  <li>Word2Vec</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaBrain className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">ML/AI</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Scikit-learn</li>
                  <li>Keras</li>
                  <li>NumPy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Functions Section */}
          <section id="key-functions" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Key Functions</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Natural Language Processing</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Intent classification</li>
                  <li>Entity recognition</li>
                  <li>Sentiment analysis</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Response Generation</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Context-aware responses</li>
                  <li>Dynamic information retrieval</li>
                  <li>Fallback mechanisms</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">User Experience</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Interactive conversations</li>
                  <li>Multi-turn dialogue</li>
                  <li>Error handling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Section */}
          <section id="installation" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Installation</h2>
            <div className="space-y-6">
              <p className="text-gray-400">Follow these steps to set up the chatbot locally:</p>
              <div className="bg-[#0B1121] rounded-lg p-4 font-mono text-sm">
                <pre className="text-gray-400">
                  <code>{`# Clone the repository
git clone https://github.com/meghajbhat/University-Admission-Chatbot.git

# Navigate to project directory
cd University-Admission-Chatbot

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Download required NLTK data
python -c "import nltk; nltk.download('punkt'); nltk.download('averaged_perceptron_tagger'); nltk.download('wordnet')"

# Run the chatbot
python chatbot.py`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 