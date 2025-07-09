'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaPython, FaSpotify, FaBrain } from 'react-icons/fa'

export default function MusicPlaylistGeneratorProject() {
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
                Music Playlist Generator
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/meghajbhat/music-playlist-generator" 
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
              src="/images/projects/music-playlist.png" 
              alt="Music Playlist Generator" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Overview Section */}
          <section id="overview" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              An AI-powered music recommendation system that creates personalized playlists based on user preferences, listening history, and music features. The system uses machine learning algorithms to analyze audio features and generate playlists that match the user's taste.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Core Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Personalized playlist generation</li>
                  <li>Music taste analysis</li>
                  <li>Genre-based filtering</li>
                  <li>Mood-based recommendations</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">User Experience</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Intuitive interface</li>
                  <li>Real-time updates</li>
                  <li>Playlist export</li>
                  <li>Social sharing</li>
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
                  <li>Flask</li>
                  <li>SQLAlchemy</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaBrain className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">ML/AI</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Scikit-learn</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaSpotify className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">APIs</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Spotify API</li>
                  <li>Last.fm API</li>
                  <li>Genius API</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Functions Section */}
          <section id="key-functions" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Key Functions</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Music Analysis</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Audio feature extraction</li>
                  <li>Genre classification</li>
                  <li>Mood detection</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Recommendation Engine</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Collaborative filtering</li>
                  <li>Content-based filtering</li>
                  <li>Hybrid recommendation system</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">User Management</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>User preferences tracking</li>
                  <li>Playlist management</li>
                  <li>Social features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Section */}
          <section id="installation" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Installation</h2>
            <div className="space-y-6">
              <p className="text-gray-400">Follow these steps to set up the project locally:</p>
              <div className="bg-[#0B1121] rounded-lg p-4 font-mono text-sm">
                <pre className="text-gray-400">
                  <code>{`# Clone the repository
git clone https://github.com/meghajbhat/music-playlist-generator.git

# Navigate to project directory
cd music-playlist-generator

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env

# Initialize database
flask db upgrade

# Run the application
flask run`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 