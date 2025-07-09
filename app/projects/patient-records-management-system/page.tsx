'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaLink, FaPython, FaDatabase, FaServer } from 'react-icons/fa'

export default function PatientRecordsProject() {
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
                Patient Records Management System
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/meghajbhat/Patient-Records-Management-System" 
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
              src="/images/projects/patient-records.png" 
              alt="Patient Records Management System" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Overview Section */}
          <section id="overview" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              A comprehensive healthcare management system built with Python Flask, designed to streamline patient record management, appointment scheduling, and medical history tracking. The system provides a secure and efficient way for healthcare providers to manage patient information and medical records.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Patient Management</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Patient registration and profile management</li>
                  <li>Medical history tracking</li>
                  <li>Document upload and management</li>
                  <li>Search and filter patient records</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Appointment System</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Schedule and manage appointments</li>
                  <li>Automated reminders</li>
                  <li>Calendar integration</li>
                  <li>Appointment history tracking</li>
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
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Python</li>
                  <li>Flask</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaDatabase className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <FaServer className="text-2xl text-emerald-400" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Functions Section */}
          <section id="key-functions" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Key Functions</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Authentication & Authorization</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Secure user authentication system</li>
                  <li>Role-based access control</li>
                  <li>Password encryption and security measures</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Data Management</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>CRUD operations for patient records</li>
                  <li>File upload and storage system</li>
                  <li>Data validation and sanitization</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Reporting</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Generate patient reports</li>
                  <li>Export data in various formats</li>
                  <li>Statistical analysis and insights</li>
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
git clone https://github.com/meghajbhat/Patient-Records-Management-System.git

# Navigate to project directory
cd Patient-Records-Management-System

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