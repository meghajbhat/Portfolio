'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function PhotoEditor() {
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
              Photo Editor
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/yourusername/photo-editor"
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
              A versatile photo editing application built with Python and OpenCV. This desktop application provides users with a range of image processing tools and filters for quick and easy photo manipulation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The project demonstrates the implementation of various image processing algorithms and provides a user-friendly interface for applying these effects to images.
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
                <span>Basic image adjustments (brightness, contrast, saturation)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Image filters (blur, sharpen, grayscale, sepia)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Color balance and temperature adjustments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Image cropping and resizing tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Support for multiple image formats</span>
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
                  <li>• OpenCV (cv2)</li>
                  <li>• NumPy</li>
                  <li>• Tkinter</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Git</li>
                  <li>• PIL/Pillow</li>
                  <li>• Virtual Environment</li>
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
                <h3 className="text-xl font-semibold mb-3 text-white">Image Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Core image manipulation functions including brightness adjustment, contrast enhancement, and color balance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Filter Application</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementation of various image filters and effects using OpenCV and NumPy operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">File Operations</h3>
                <p className="text-gray-300 leading-relaxed">
                  Handling image file operations including loading, saving, and format conversion.
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
                      git clone https://github.com/yourusername/photo-editor.git
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
                    <p className="font-semibold mb-2">Run the application:</p>
                    <code className="block bg-[#0B1121] p-3 rounded-lg">
                      python photo_editor.py
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