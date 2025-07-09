'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaCode, FaBook, FaUser, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';

export default function BookReviewPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d');
      const rect = document.body.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      cards.forEach((card) => {
        const cardRect = (card as HTMLElement).getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const angleX = (mouseY - cardCenterY) / 30;
        const angleY = (mouseX - cardCenterX) / 30;
        
        (card as HTMLElement).style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121] text-white overflow-x-hidden pt-20">
      {/* Main Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-sm border-b border-indigo-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                Megha Bhat
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</Link>
                <Link href="/#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</Link>
                <Link href="/#experience" className="text-gray-400 hover:text-indigo-400 transition-colors">Experience</Link>
                <Link href="/#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Project-specific Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-[#0B1121]/90 backdrop-blur-sm border-b border-indigo-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors group"
            >
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
            <a 
              href="https://github.com/meghajbhat/Book-Review-System" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors group"
            >
              <span>View on GitHub</span>
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Project Header */}
          <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-indigo-500/20 p-12 mb-12 hover:border-indigo-500/40 transition-colors duration-500">
            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
            
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-xl"></div>
              <FaBook className="text-4xl text-indigo-400 relative z-10 animate-float" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Book Review System
              </h1>
              <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors">
                Completed
              </span>
            </div>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              A full-stack Java-based web application for managing books and user reviews, featuring role-based access control and comprehensive book management functionalities.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors">
                Spring Boot
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors">
                MySQL
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors">
                Thymeleaf
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* User Management */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center">
                  <FaUser className="text-2xl text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold">User Management</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Role-based access control
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    User registration and authentication
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Profile management
                  </li>
                </ul>
              </div>
            </div>

            {/* Book Management */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center">
                  <FaBook className="text-2xl text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold">Book Management</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Book catalog and search
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Book details and metadata
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Book categorization
                  </li>
                </ul>
              </div>
            </div>

            {/* Review System */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center">
                  <FaCode className="text-2xl text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold">Review System</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    User reviews and ratings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Review moderation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Review analytics
                  </li>
                </ul>
              </div>
            </div>

            {/* Admin Features */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center">
                  <FaDatabase className="text-2xl text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold">Admin Features</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Book management dashboard
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    User management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    System analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-indigo-500/30 flex items-center justify-center">
                <FaCode className="text-2xl text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">Technical Implementation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Core Technologies</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Spring Boot for backend
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    MySQL for database
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Thymeleaf for frontend
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Key Features</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    RESTful API design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Secure authentication
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    Responsive UI design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 