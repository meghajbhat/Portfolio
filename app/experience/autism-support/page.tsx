'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaCode, FaBrain, FaGamepad, FaHeart, FaSmile, FaMedal } from 'react-icons/fa';

export default function AutismSupportPage() {
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
    <main className="min-h-screen bg-[#0B1121] text-white pt-20 pb-32">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            href="/#projects" 
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
          <div className="flex gap-4">
            <a 
              href="https://github.com/meghajbhat/Adaptive-Technology-for-Autism-Support.git"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Project Header */}
        <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-purple-500/20 p-12 mb-12 hover:border-purple-500/40 transition-colors duration-500">
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
            <FaBrain className="text-4xl text-purple-400 relative z-10 animate-float" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Adaptive Technology
            </h1>
            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              In Progress
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            An interactive system designed to support autistic children through various modules focusing on emotional understanding, memory, sensory regulation, and confidence building.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Python
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Pygame Zero
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Custom Graphics
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Emotion Recognition */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaSmile className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Emotion Recognition</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Interactive emotion cards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Facial expression matching
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Emotion-based scenarios
                </li>
              </ul>
            </div>
          </div>

          {/* Memory Game */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaGamepad className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Memory Game</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Pattern recognition
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Visual memory training
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Progressive difficulty levels
                </li>
              </ul>
            </div>
          </div>

          {/* Support Features */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaHeart className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Support Features</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Sensory regulation tools
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Calming activities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Visual schedules
                </li>
              </ul>
            </div>
          </div>

          {/* Progress System */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaMedal className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Progress System</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Achievement tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Skill development monitoring
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Progress visualization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
              <FaCode className="text-2xl text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold">Technical Implementation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Core Technologies</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Python for game logic
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Pygame Zero for graphics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Custom UI components
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Interactive game mechanics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Adaptive difficulty
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Progress tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 