'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaCode, FaPalette, FaBrain, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';
import '../../globals.css';

export default function PortfolioPage() {
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-sm border-b border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
                Megha Bhat
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</Link>
                <Link href="/#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</Link>
                <Link href="/#experience" className="text-gray-400 hover:text-emerald-400 transition-colors">Experience</Link>
                <Link href="/#projects" className="text-gray-400 hover:text-emerald-400 transition-colors">Projects</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Project-specific Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-[#0B1121]/90 backdrop-blur-sm border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/meghajbhat/Portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
              >
                <span>View on GitHub</span>
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://portfolio-git-main-megha-bhats-projects.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Project Header */}
          <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-emerald-500/20 p-12 mb-12 hover:border-emerald-500/40 transition-colors duration-500">
            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl"></div>
              <FaGlobe className="text-4xl text-emerald-400 relative z-10 animate-float" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio Website
              </h1>
              <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Completed
              </span>
            </div>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring interactive 3D effects and a showcase of projects and skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
                Next.js
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
                TypeScript
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Modern UI */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                  <FaPalette className="text-2xl text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Modern UI</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Responsive design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Interactive animations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Dark theme
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Features */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                  <FaCode className="text-2xl text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Technical Features</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Next.js 13 App Router
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Server Components
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    TypeScript Integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Performance */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                  <FaBrain className="text-2xl text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Performance</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Optimized images
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Fast page loads
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    SEO friendly
                  </li>
                </ul>
              </div>
            </div>

            {/* Deployment */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                  <FaGlobe className="text-2xl text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Deployment</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Vercel hosting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Continuous deployment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    Analytics integration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaCode className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Technical Implementation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Core Technologies</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Next.js 13</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>TypeScript</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Key Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>3D Animations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Project Showcase</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Future Updates</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Blog Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Dark/Light Theme</span>
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