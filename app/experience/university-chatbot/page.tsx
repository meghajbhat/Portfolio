'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaRobot, FaUniversity, FaCode, FaBrain } from 'react-icons/fa';
import '../../globals.css';

export default function UniversityChatbotPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d');
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      cards.forEach((card: any) => {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121] border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
            <a 
              href="https://github.com/meghajbhat/university-chatbot" 
              target="_blank" 
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <span>View on GitHub</span>
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Project Header with 3D Effect */}
          <div className="relative mb-24 perspective-1000">
            <div className="card-3d relative transform-gpu transition-all duration-500 preserve-3d">
              {/* Floating Elements */}
              <div className="absolute -left-8 -top-8 w-16 h-16 bg-emerald-500/10 rounded-full animate-float"></div>
              <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-blue-500/10 rounded-full animate-float-delay"></div>
              
              {/* Main Content */}
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-12 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-emerald-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Icon */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl rotate-45 animate-spin-slow"></div>
                    <div className="absolute inset-1 bg-[#1A2333] rounded-2xl flex items-center justify-center">
                      <FaRobot className="text-4xl text-emerald-400" />
                    </div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center pt-12">
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    University Admission Chatbot
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 text-center max-w-3xl mx-auto">
                  An intelligent chatbot for student admission support, powered by advanced AI
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-6 py-3 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/70 transition-all duration-300 transform hover:scale-110">Python</span>
                  <span className="px-6 py-3 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/70 transition-all duration-300 transform hover:scale-110">AIML</span>
                  <span className="px-6 py-3 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/70 transition-all duration-300 transform hover:scale-110">TensorFlow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Overview Card */}
            <div className="card-3d relative transform-gpu transition-all duration-500 preserve-3d group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-emerald-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500 h-full">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-[#0B1121] rounded-xl border border-emerald-500/30 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <FaUniversity className="text-2xl text-emerald-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 pt-6 text-white group-hover:text-emerald-400 transition-colors duration-300">Overview</h2>
                <p className="text-gray-400 leading-relaxed">
                  This chatbot is designed to assist prospective students with inquiries related to admission procedures, courses offered, campus facilities, and more. Powered by AIML and TensorFlow, it provides accurate and timely information to help streamline the admission process.
                </p>
              </div>
            </div>

            {/* Features Card */}
            <div className="card-3d relative transform-gpu transition-all duration-500 preserve-3d group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500 h-full">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-[#0B1121] rounded-xl border border-emerald-500/30 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <FaCode className="text-2xl text-emerald-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 pt-6 text-white group-hover:text-emerald-400 transition-colors duration-300">Key Features</h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Admission procedure guidance with step-by-step assistance</span>
                  </li>
                  <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Comprehensive course information and curriculum details</span>
                  </li>
                  <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Interactive campus facility information and virtual tour</span>
                  </li>
                  <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>24/7 intelligent student support with quick response time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Details Card */}
            <div className="card-3d relative transform-gpu transition-all duration-500 preserve-3d group md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-[#0B1121] rounded-xl border border-emerald-500/30 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <FaBrain className="text-2xl text-emerald-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 pt-6 text-white group-hover:text-emerald-400 transition-colors duration-300">Technical Implementation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300">AI/ML Components</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Advanced AIML pattern matching</span>
                      </li>
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>TensorFlow deep learning models</span>
                      </li>
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Natural language processing</span>
                      </li>
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Dynamic knowledge base integration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300">System Features</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Real-time response generation</span>
                      </li>
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Context-aware conversation flow</span>
                      </li>
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Multi-language support system</span>
                      </li>
                      <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span>Continuous learning capabilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 