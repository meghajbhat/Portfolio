'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaCode, FaBook, FaBrain, FaDatabase, FaRobot } from 'react-icons/fa';

export default function LegalDocumentPage() {
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                Megha Bhat
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
                <Link href="/#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link>
                <Link href="/#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</Link>
                <Link href="/#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Project-specific Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-[#0B1121]/90 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
            >
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
            <a 
              href="https://github.com/meghajbhat/Legal-Document-Understanding-using-GenAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
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
          <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-blue-500/20 p-12 mb-12 hover:border-blue-500/40 transition-colors duration-500">
            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl"></div>
              <FaBook className="text-4xl text-blue-400 relative z-10 animate-float" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Legal Document Understanding
              </h1>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                In Progress
              </span>
            </div>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              A comprehensive system for understanding legal documents using advanced NLP, RAG, and multimodal intelligent agents. Features fine-tuned LLMs and sophisticated prompt engineering techniques.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                PyTorch
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                Hugging Face
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                ChromaDB
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                RAG
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                LLM
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* NLP Processing */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center">
                  <FaBrain className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">NLP Processing</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Legal dataset preprocessing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Multiple embedding types
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Advanced tokenization
                  </li>
                </ul>
              </div>
            </div>

            {/* Prompt Engineering */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center">
                  <FaCode className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">Prompt Engineering</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Chain-of-Thought (CoT)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Tree-of-Thought (ToT)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Graph-of-Thought (GoT)
                  </li>
                </ul>
              </div>
            </div>

            {/* RAG Implementation */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center">
                  <FaDatabase className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">RAG Implementation</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    ChromaDB vector store
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    LLaMA model integration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Context retrieval
                  </li>
                </ul>
              </div>
            </div>

            {/* Intelligent Agents */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center">
                  <FaRobot className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">Intelligent Agents</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Multimodal input processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Voice and image support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Adaptive responses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-blue-500/30 flex items-center justify-center">
                <FaCode className="text-2xl text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Technical Implementation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Core Components</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>NLP Pipeline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Vector Database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>LLM Integration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Key Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Document Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Context Retrieval</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Multimodal Support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Future Enhancements</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Model Fine-tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>UI Development</span>
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