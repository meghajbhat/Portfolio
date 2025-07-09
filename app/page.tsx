'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaArrowRight } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init("-UCnHkBHJrirqj0Kf")

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeHackathon, setActiveHackathon] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHackathon((prev) => (prev === 0 ? 1 : 0))
    }, 3000) // Switch every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#0B1121] text-white">
      {/* Hero Section - "Hi I'm Megha Bhat" */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Megha Bhat
              </span>
            </h1>
            <h2 className="text-3xl font-medium text-gray-400 mb-12">Computer Science student at PES University</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Exploring the intersection of technology and creativity. Passionate about building innovative solutions and learning new technologies.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a 
                href="https://github.com/meghajbhat" 
                target="_blank" 
                className="w-14 h-14 rounded-2xl bg-[#1A2333]/80 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/megha-bhat-20baaa293/" 
                target="_blank" 
                className="w-14 h-14 rounded-2xl bg-[#1A2333]/80 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://leetcode.com/meghajbhat" 
                target="_blank" 
                className="w-14 h-14 rounded-2xl bg-[#1A2333]/80 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <FaCode className="text-2xl" />
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white font-medium hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 border border-emerald-500/50 rounded-full text-emerald-400 font-medium hover:bg-emerald-500/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              About.
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto perspective-3d group">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 animate-pulse"></div>
                
                {/* Floating circles animation */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Main image container with 3D effect */}
                <div 
                  className="relative aspect-square rounded-2xl border-2 border-emerald-500/30 overflow-hidden hover:scale-105 transition-all duration-500 transform-gpu hover:rotate-2 group-hover:border-emerald-500/70 shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    const rotateX = (y - 0.5) * 20;
                    const rotateY = (x - 0.5) * 20;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Profile image */}
                  <img 
                    src="/images/projects/profile.jpg" 
                    alt="Megha Bhat" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-400">
                I'm a Computer Science student at PES University, passionate about exploring new technologies and building innovative solutions. My journey in tech has led me to work on various projects, from web applications to machine learning models.
              </p>
              <p className="text-lg text-gray-400">
                Currently, I'm focused on developing my skills in full-stack development, artificial intelligence, and cloud computing. I love taking on challenging projects that push my boundaries and help me grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-8xl font-bold text-center mb-24">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h1>

          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Company List */}
            <div className="col-span-4 space-y-8">
              <button onClick={() => {
                const cdsamlDetails = document.getElementById('cdsaml-details');
                const nexusDetails = document.getElementById('nexus-details');
                const cdsamlButton = document.getElementById('cdsaml-button');
                const nexusButton = document.getElementById('nexus-button');
                if (cdsamlDetails) cdsamlDetails.classList.remove('hidden');
                if (nexusDetails) nexusDetails.classList.add('hidden');
                if (cdsamlButton) cdsamlButton.classList.add('active-company');
                if (nexusButton) nexusButton.classList.remove('active-company');
              }} className="w-full" id="cdsaml-button">
                <div className="group flex items-center gap-4 cursor-pointer p-4 rounded-xl border-2 border-transparent hover:border-emerald-500/30 hover:bg-[#1A2333]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#0B1121] border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                    <img src="/images/projects/pes-logo.png" alt="CDSAML" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Research Intern - CDSAML</h3>
                    <p className="text-gray-400">CDSAML</p>
                  </div>
                </div>
              </button>

              <button onClick={() => {
                const cdsamlDetails = document.getElementById('cdsaml-details');
                const nexusDetails = document.getElementById('nexus-details');
                const cdsamlButton = document.getElementById('cdsaml-button');
                const nexusButton = document.getElementById('nexus-button');
                if (nexusDetails) nexusDetails.classList.remove('hidden');
                if (cdsamlDetails) cdsamlDetails.classList.add('hidden');
                if (nexusButton) nexusButton.classList.add('active-company');
                if (cdsamlButton) cdsamlButton.classList.remove('active-company');
              }} className="w-full" id="nexus-button">
                <div className="group flex items-center gap-4 cursor-pointer p-4 rounded-xl border-2 border-transparent hover:border-emerald-500/30 hover:bg-[#1A2333]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#0B1121] border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                    <img src="/images/projects/nexus-logo.png" alt="Nexus Info" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">AIML Intern</h3>
                    <p className="text-gray-400">Nexus Info</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Right Column - Experience Details */}
            <div className="col-span-8">
              <div id="cdsaml-details" className="bg-[#0B1121] rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Research Intern - CDSAML</h2>
                <p className="text-emerald-400 text-lg mb-4">Bengaluru, India</p>
                <p className="text-gray-400 mb-6">July 2024 – August 2024</p>
                <p className="text-2xl font-bold text-white mb-4">Project: Measuring and Reducing Hallucinations in LLMs</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implemented general code, React and Chain Of Verification processes for hallucination reduction.</span>
                  </li>
                </ul>
              </div>

              <div id="nexus-details" className="bg-[#0B1121] rounded-2xl p-8 hidden">
                <h2 className="text-3xl font-bold text-white mb-4">AIML Intern - Nexus Info</h2>
                <p className="text-emerald-400 text-lg mb-4">Bengaluru, India</p>
                <p className="text-gray-400 mb-6">May 2024 – June 2024</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Developed a general-purpose chatbot using advanced AIML techniques.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Created a specialized chatbot for university admissions FAQ's.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implemented two foundational AIML projects during the internship period.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">MY WORK</h2>
          <h1 className="text-8xl font-bold text-center mb-24">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h1>

          {/* 3D Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">
            {/* Music Playlist Generator */}
            <Link href="/experience/music-playlist" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2 hover:translate-y-[-10px] preserve-3d">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Content */}
                <div className="relative h-full bg-[#1A2333]/90 backdrop-blur-sm p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        Music Playlist Generator
                      </h3>
                      <p className="text-gray-400">Music Management System</p>
                    </div>
                    <a 
                      href="https://github.com/meghajbhat/Music-Playlist-Generator" 
                      target="_blank" 
                      className="w-12 h-12 rounded-xl bg-[#0B1121]/80 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-xl text-gray-400 group-hover:text-emerald-400" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-8 line-clamp-3">
                    A C-based program for managing music playlists with YouTube integration, featuring user management, playlist operations, and stack-based playback history.
                  </p>

                  {/* Tech Stack */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">C</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Python</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">YouTube API</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>

            {/* Photo Editor */}
            <Link href="/experience/photo-editor" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:translate-y-[-10px] preserve-3d">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Content */}
                <div className="relative h-full bg-[#1A2333]/90 backdrop-blur-sm p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        Photo Editor
                      </h3>
                      <p className="text-gray-400">Image Processing Application</p>
                    </div>
                    <a 
                      href="https://github.com/meghajbhat/Photo-Editor" 
                      target="_blank" 
                      className="w-12 h-12 rounded-xl bg-[#0B1121]/80 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-xl text-gray-400 group-hover:text-emerald-400" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-8 line-clamp-3">
                    A Python-based application for image processing with various filters and transformations, featuring a user-friendly interface built with Tkinter and OpenCV.
                  </p>

                  {/* Tech Stack */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Python</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">OpenCV</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Tkinter</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>

            {/* Patient Records Management System */}
            <Link href="/experience/patient-records" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:translate-y-[-10px] preserve-3d">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Content */}
                <div className="relative h-full bg-[#1A2333]/90 backdrop-blur-sm p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        Patient Records Management System
                      </h3>
                      <p className="text-gray-400">Hospital Operations Management</p>
                    </div>
                    <a 
                      href="https://github.com/meghajbhat/patient-records" 
                      target="_blank" 
                      className="w-12 h-12 rounded-xl bg-[#0B1121]/80 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-xl text-gray-400 group-hover:text-emerald-400" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-8 line-clamp-3">
                    A web-based application for efficient hospital operations management, featuring patient records, appointments, prescriptions, and billing with role-based access control.
                  </p>

                  {/* Tech Stack */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">MySQL</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Python</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Flask</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>

            {/* AI-Powered Chatbot */}
            <Link href="/experience/chatbot" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2 hover:translate-y-[-10px] preserve-3d">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Content */}
                <div className="relative h-full bg-[#1A2333]/90 backdrop-blur-sm p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        AI-Powered Chatbot
                      </h3>
                      <p className="text-gray-400">Intelligent Conversational AI</p>
                    </div>
                    <a 
                      href="https://github.com/meghajbhat/chatbot" 
                      target="_blank" 
                      className="w-12 h-12 rounded-xl bg-[#0B1121]/80 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-xl text-gray-400 group-hover:text-emerald-400" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-8 line-clamp-3">
                    A simple chatbot using OpenAI's GPT-3.5-turbo model with client-server architecture for natural language processing and intelligent responses.
                  </p>

                  {/* Tech Stack */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Python</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">ChatGPT API</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Networks</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>

            {/* University Admission Chatbot */}
            <Link href="/experience/university-chatbot" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:translate-y-[-10px] preserve-3d">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Content */}
                <div className="relative h-full bg-[#1A2333]/90 backdrop-blur-sm p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        University Admission Chatbot
                      </h3>
                      <p className="text-gray-400">Student Support System</p>
                    </div>
                    <a 
                      href="https://github.com/meghajbhat/university-chatbot" 
                      target="_blank" 
                      className="w-12 h-12 rounded-xl bg-[#0B1121]/80 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-xl text-gray-400 group-hover:text-emerald-400" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-8 line-clamp-3">
                    An intelligent chatbot designed to assist prospective students with admission procedures, courses, and campus facilities using AIML and TensorFlow.
                  </p>

                  {/* Tech Stack */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Python</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">AIML</span>
                      <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">TensorFlow</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">TECHNICAL PROFICIENCIES</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Skills.
            </span>
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Programming Category */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-6">&lt;Programming&gt;</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/python.png" alt="Python" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">Python</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/cpp.png" alt="C++" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">C++</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/js.png" alt="JavaScript" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">JavaScript</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/golang.png" alt="GoLang" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">GoLang</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/kotlin.png" alt="Kotlin" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">Kotlin</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/matlab.png" alt="MATLAB" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">MATLAB</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] text-right">&lt;/Programming&gt;</h3>
            </div>

            {/* Libraries/Frameworks Category */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-6">&lt;Libraries&gt;</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/react.png" alt="React" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">React</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/node.png" alt="Node.js" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">Node.js</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/tensorflow.png" alt="TensorFlow" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">TensorFlow</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/opencv.png" alt="OpenCV" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">OpenCV</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/flask.png" alt="Flask" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">Flask</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] text-right">&lt;/Libraries&gt;</h3>
            </div>

            {/* Tools Category */}
            <div>
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-6">&lt;Tools&gt;</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/github.png" alt="GitHub" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">GitHub</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/vscode.png" alt="VS Code" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">VS Code</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/kafka.png" alt="Kafka" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">Kafka</p>
                </div>
                <div className="group">
                  <div className="skill-icon">
                    <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                      <img src="/images/projects/hadoop.png" alt="Hadoop" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-2">Hadoop</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] text-right">&lt;/Tools&gt;</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">CONTINUOUS LEARNING</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Hackathons.
            </span>
          </h1>

          {/* Carousel Container */}
          <div className="relative perspective-1000 max-w-4xl mx-auto">
            <div 
              className="flex gap-8 transition-transform duration-500 ease-out" 
              style={{ 
                transform: `translateX(-${activeHackathon * 100}%) translateZ(-100px)`,
              }}
            >
              {/* Dining Cost Estimator Card- EPOCH */}
              <div className="w-full flex-shrink-0 bg-[#1A2333]/90 backdrop-blur-lg rounded-3xl p-8 hover:transform hover:rotate-y-12 transition-all duration-500 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">DINING COST ESTIMATOR FOR TWO</h3>
                  <p className="text-emerald-400 text-lg">2023</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30">Python</span>
                    <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30">Data Analytics</span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    This project aims to develop a sophisticated predictive model to estimate the average dinner costs at
                    restaurants in Bengaluru, utilizing data from popular eateries and Zomato. Through meticulous data
                    analysis, cleansing, and strategic feature engineering, the dataset is optimized for accurate predictions.
                    This project was undertaken during my college hackathon, Epoch, showcasing our commitment to
                    practical, data-driven solutions.
                  </p>
                  
                  <a 
                    href="https://drive.google.com/file/d/1LxPOOFp06ao65BFUbHsfI0y9nncpK59w/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    View Certificate
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Speech Coach Card- Nexgen */}
              <div className="w-full flex-shrink-0 bg-[#1A2333]/90 backdrop-blur-lg rounded-3xl p-8 hover:transform hover:rotate-y-12 transition-all duration-500 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">SPEECH COACH</h3>
                  <p className="text-emerald-400 text-lg">2024</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30">Python</span>
                    <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30">NodeJS</span>
                    <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30">MongoDB</span>
                    <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30">React</span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    Grammar Correction: iSpeak records your speech and instantly corrects any grammatical errors it
                    detects. Whether it's a misplaced comma, punctuation or a pronoun issue, iSpeak ensures your speech
                    is grammatically correct. In addition to this, it could also convert real time communication to written
                    words, as well as it could read written lines out loud. The project could also convert English to Japanese,
                    Chinese and French.
                  </p>
                  
                  <div className="h-[52px]"></div> {/* Spacer to align with other card's button */}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              <button 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeHackathon === 0 ? 'bg-emerald-500' : 'bg-gray-600'}`}
                onClick={() => setActiveHackathon(0)}
              ></button>
              <button 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeHackathon === 1 ? 'bg-emerald-500' : 'bg-gray-600'}`}
                onClick={() => setActiveHackathon(1)}
              ></button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">WHAT I HAVE STUDIED SO FAR</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Education.
            </span>
          </h1>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-500/20"></div>

            {/* PES University */}
            <div className="relative mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-[#0B1121] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/projects/pes-logo.png" alt="PES University" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="ml-[calc(50%+48px)] max-w-[500px] bg-[#0B1121] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">Computer Science Bachelors</h3>
                <p className="text-emerald-400 text-lg mb-2">PES University, Bengaluru, India</p>
                <p className="text-gray-400 mb-1">September 2022 - May 2026</p>
                <p className="text-gray-400">CGPA: 7.47</p>
              </div>
            </div>

            {/* BASE PU College */}
            <div className="relative mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-[#0B1121] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/projects/base-logo.png" alt="BASE PU College" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="mr-[calc(50%+48px)] max-w-[500px] bg-[#0B1121] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">Class XI & XII PU, State Board</h3>
                <p className="text-emerald-400 text-lg mb-2">BASE PU College, Bengaluru, India</p>
                <p className="text-gray-400 mb-1">July 2020 - May 2022</p>
                <p className="text-gray-400">Physics, Chemistry, Mathematics, Computer Science</p>
              </div>
            </div>

            {/* PSBB LLA */}
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-[#0B1121] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/projects/psbb-logo.png" alt="PSBB LLA" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="ml-[calc(50%+48px)] max-w-[500px] bg-[#0B1121] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">Nursery to Class X School</h3>
                <p className="text-emerald-400 text-lg mb-2">PSBB LLA, Bengaluru, India</p>
                <p className="text-gray-400 mb-1">July 2006 - July 2020</p>
                <p className="text-gray-400">Physics, Chemistry, Social Science, Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase relative z-10">MY ACHIEVEMENTS</h2>
          <h1 className="text-8xl font-bold text-center mb-16 relative z-10">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Certificates.
            </span>
          </h1>

          <div className="certificates-grid relative z-10">
            

            {/* Generative AI Certificate */}
            <div 
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/coursera.png" alt="Coursera" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Introduction to Generative AI for Software Development</h3>
                        <p className="text-blue-400">Coursera</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/19ekVX1QYbL5twJjjVf7_bUmAY7hLrQrD/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-xl text-blue-400 hover:bg-blue-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>

            {/* Pandas Certificate */}
            <div 
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/kaggle.png" alt="Kaggle" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Pandas</h3>
                        <p className="text-purple-400">Kaggle</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/10j_FCCwXHr122mFIIyguiSgo0Fa3xGMs/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-xl text-purple-400 hover:bg-purple-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>

            {/* Machine Learning Certificate */}
            <div 
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 group-hover:border-pink-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/kaggle.png" alt="Kaggle" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">Intro To Machine Learning</h3>
                        <p className="text-pink-400">Kaggle</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/158-LGU5K0PXMUWq34UKozraz6U9Y2qBe/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-xl text-pink-400 hover:bg-pink-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>

            {/* Data Science Certificate */}
            <div 
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 group-hover:border-red-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/coursera.png" alt="Coursera" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">What is Data Science?</h3>
                        <p className="text-red-400">Coursera</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/18Upa_pyLfHxWYQ6PEFh-5B85GZpnJ3D7/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-xl text-red-400 hover:bg-red-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>

            {/* OpenCV Certificate */}
            <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 group-hover:border-green-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/pes-logo.png" alt="PESU" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Introduction to OpenCV Using Python</h3>
                        <p className="text-green-400">PESU</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => window.open('https://drive.google.com/file/d/1eK-NmivkYieuMvwN5UyDwosnavXYMsbw/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-xl text-green-400 hover:bg-green-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Python Certificate */}
            <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 group-hover:border-teal-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/coursera.png" alt="Coursera" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">Getting Started With Python</h3>
                        <p className="text-teal-400">Coursera</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => window.open('https://drive.google.com/file/d/1uZOcj4gQkzhGY-8wT2KPNz_OfhL3hQIj/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-500/10 rounded-xl text-teal-400 hover:bg-teal-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>


            {/* HackerRank SQL Basic */}
            <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/hackerrank.png" alt="Coursera" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">SQL (Basic)- Test</h3>
                        <p className="text-indigo-400">HackerRank</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => window.open('https://drive.google.com/file/d/1h-sPdjRfC-3ej0Dz7nCKBWTpASw_oI6O/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-xl text-indigo-400 hover:bg-indigo-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>


            {/* Jira Certificate */}
            <div
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/atlassian.png" alt="Atlassian" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Get Started With Jira Work Management</h3>
                        <p className="text-emerald-400">Atlassian</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => window.open('https://drive.google.com/file/d/1Qfnc5xVtXsuOH_TdosH0j5Qg5gtYDHj-/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>

            {/* GDSC Certificate */}
            <div 
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/pes-logo.png" alt="GDSC" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">GDSC Core Team Member</h3>
                        <p className="text-blue-400">PESU</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/12uw62jAenyrXbSC2fF5w6JI7zKP9oumw/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-xl text-blue-400 hover:bg-blue-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>

            {/* ChatGPT and AI Tools Certificate */}
            <div 
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 group-hover:border-green-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/skillnation.png" alt="Skill Nation" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">ChatGPT and AI Tools</h3>
                        <p className="text-green-400">Skill Nation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/1czpd00GM9ZfCyYbczzwSg39IYs4SD3K-/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-xl text-green-400 hover:bg-green-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </div>


            {/* cHEAL Symposium Certificate */}
            <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/pes-logo.png" alt="PESU" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">cHEAL Symposium</h3>
                        <p className="text-cyan-400">PESU</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/1q_ifiAeaN8OvaR5D76v9p9EbGQXi9_sk/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI and ChatGPT Tools */}
            <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20 group-hover:border-violet-500/50 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src="/images/projects/skillnation.png" alt="HackerRank" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">AI and ChatGPT Tools</h3>
                        <p className="text-violet-400">Skill Nation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/1czpd00GM9ZfCyYbczzwSg39IYs4SD3K-/view?usp=drive_link', '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-xl text-green-400 hover:bg-green-500/20 transition-colors group"
                  >
                    View Certificate
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 5}s linear infinite`,
                  animationDelay: `${-Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">GET IN TOUCH</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Contact Me.
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Form */}
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                const formData = new FormData(form);
                const senderEmail = formData.get('from_email');
                
                try {
                  submitButton.disabled = true;
                  submitButton.innerHTML = 'Sending...';

                  await emailjs.sendForm(
                    'service_26jkwhf',
                    'template_8eret0p',
                    form,
                    '-UCnHkBHJrirqj0Kf'
                  );

                  const messageDiv = document.createElement('div');
                  messageDiv.innerHTML = `
                    <div class="fixed top-4 right-4 bg-[#1A2333] border border-emerald-500/30 rounded-lg p-4 shadow-lg max-w-md z-50">
                      <div class="flex items-start gap-4">
                        <div class="flex-1">
                          <h3 class="font-medium text-white mb-1">Message sent successfully!</h3>
                          <p class="text-gray-400 mb-2">From: ${formData.get('from_name')}</p>
                          <p class="text-gray-400 mb-2">Email: ${formData.get('from_email')}</p>
                          <p class="text-gray-400">Message: ${formData.get('message')}</p>
                        </div>
                      </div>
                    </div>
                  `;
                  document.body.appendChild(messageDiv);
                  
                  // Remove the notification after 5 seconds
                  setTimeout(() => {
                    messageDiv.remove();
                  }, 5000);

                  form.reset();
                } catch (error) {
                  console.error('Error sending email:', error);
                  alert('Failed to send message. Please try again or email me directly at meghajbhat@gmail.com');
                } finally {
                  submitButton.disabled = false;
                  submitButton.innerHTML = `
                    <span class="relative z-10 flex items-center gap-2">
                      Send Message
                      <span class="transform rotate-90 group-hover:translate-x-1 transition-transform">✈️</span>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  `;
                }
              }}
              className="space-y-6"
            >
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="w-6 h-6">👤</span>
                  Name
                </label>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Your name" 
                  required
                  minLength={2}
                  className="w-full bg-[#1A1A2E] text-gray-400 rounded-xl p-4 border border-emerald-500/30 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="w-6 h-6">📧</span>
                  Email
                </label>
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="Your email" 
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full bg-[#1A1A2E] text-gray-400 rounded-xl p-4 border border-emerald-500/30 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="w-6 h-6">💬</span>
                  Message
                </label>
                <textarea 
                  name="message"
                  placeholder="Hey Megha, love the website! I'd like to chat about some opportunities you might like! 🚀" 
                  required
                  minLength={10}
                  rows={6}
                  className="w-full bg-[#1A1A2E] text-gray-400 rounded-xl p-4 border border-emerald-500/30 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <span className="transform rotate-90 group-hover:translate-x-1 transition-transform">✈️</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>

            {/* Interactive 3D Animation */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animation: `float ${5 + Math.random() * 5}s linear infinite`,
                          animationDelay: `${-Math.random() * 5}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Main sphere */}
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm"
                    style={{
                      transform: 'perspective(1000px) rotateX(60deg) rotateZ(0deg)',
                      animation: 'rotate 20s linear infinite',
                    }}
                  >
                    {/* Grid lines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border-2 border-emerald-500/20 rounded-full"
                        style={{
                          transform: `rotateY(${(i * 22.5)}deg)`,
                        }}
                      />
                    ))}
                    
                    {/* Orbiting elements */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                          animation: `orbit ${10 + i * 5}s linear infinite`,
                        }}
                      >
                        <div 
                          className="absolute w-4 h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                          style={{
                            top: '0%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Add these styles to your global.css file
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.perspective {
  perspective: 1000px;
}

.perspective-1000 {
  perspective: 1000px;
}
*/ 