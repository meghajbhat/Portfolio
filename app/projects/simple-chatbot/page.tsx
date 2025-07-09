'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function SimpleBot() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentSection = 'overview'

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#0B1121] text-white pb-20">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg hover:bg-[#1A2333]/80 transition-all duration-300"
        >
          <FaArrowLeft className="text-emerald-400" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {['overview', 'features', 'tech-stack', 'key-functions', 'installation'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`block px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
              activeSection === section
                ? 'bg-emerald-400 text-[#0B1121]'
                : 'bg-[#1A2333] text-white hover:bg-[#1A2333]/80'
            }`}
          >
            {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </a>
        ))}
      </nav>

      <div className="container mx-auto max-w-4xl px-4 pt-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Simple Chatbot
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/yourusername/simple-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg hover:bg-[#1A2333]/80 transition-all duration-300"
            >
              <FaGithub className="text-emerald-400" />
              <span>View on GitHub</span>
            </a>
          </div>
        </header>

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="bg-[#1A2333] rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A simple yet effective chatbot built with Python that demonstrates natural language processing capabilities. The chatbot uses pattern matching and predefined responses to engage in basic conversations with users.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This project serves as an introduction to chatbot development and natural language processing, showcasing how to create a responsive and interactive conversational agent.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <div className="bg-[#1A2333] rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Features</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Natural language processing for understanding user input</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Pattern matching algorithm for response generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Customizable response templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Basic context awareness for more natural conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Command-line interface for easy interaction</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="mb-16">
          <div className="bg-[#1A2333] rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Core</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Python 3.8+</li>
                  <li>• NLTK</li>
                  <li>• Regular Expressions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Git</li>
                  <li>• Virtual Environment</li>
                  <li>• Unit Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Functions Section */}
        <section id="key-functions" className="mb-16">
          <div className="bg-[#1A2333] rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Key Functions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Input Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tokenization and normalization of user input for accurate pattern matching and response generation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Pattern Matching</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced pattern matching algorithms to identify user intent and generate appropriate responses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Response Generation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Template-based response system with context awareness for natural conversation flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation">
          <div className="bg-[#1A2333] rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Installation</h2>
            <div className="space-y-4 text-gray-300">
              <p className="mb-4">Follow these steps to set up the project locally:</p>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">1.</span>
                  <div>
                    <p className="font-semibold mb-2">Clone the repository:</p>
                    <code className="block bg-[#0B1121] p-3 rounded-lg">
                      git clone https://github.com/yourusername/simple-chatbot.git
                    </code>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">2.</span>
                  <div>
                    <p className="font-semibold mb-2">Create and activate virtual environment:</p>
                    <code className="block bg-[#0B1121] p-3 rounded-lg">
                      python -m venv venv<br />
                      source venv/bin/activate  # On Windows: venv\Scripts\activate
                    </code>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">3.</span>
                  <div>
                    <p className="font-semibold mb-2">Install dependencies:</p>
                    <code className="block bg-[#0B1121] p-3 rounded-lg">
                      pip install -r requirements.txt
                    </code>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">4.</span>
                  <div>
                    <p className="font-semibold mb-2">Run the chatbot:</p>
                    <code className="block bg-[#0B1121] p-3 rounded-lg">
                      python chatbot.py
                    </code>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 