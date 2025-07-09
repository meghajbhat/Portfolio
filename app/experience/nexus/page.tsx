'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaBrain, FaChartLine, FaCode, FaLightbulb, FaRobot, FaDatabase } from 'react-icons/fa';

export default function NexusPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-sm border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            href="/#experience" 
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AIML Intern - Nexus
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            Worked on developing and implementing machine learning models for various applications, focusing on computer vision and natural language processing tasks.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-purple-400 border border-purple-500/30">
              Python
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-purple-400 border border-purple-500/30">
              PyTorch
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-purple-400 border border-purple-500/30">
              OpenCV
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-purple-400 border border-purple-500/30">
              Computer Vision
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-purple-500/20 mb-12 overflow-x-auto">
          <button
            onClick={() => setActiveSection('overview')}
            className={`px-6 py-3 text-lg font-medium transition-colors relative ${
              activeSection === 'overview' 
                ? 'text-purple-400' 
                : 'text-gray-400 hover:text-purple-400'
            }`}
          >
            Overview
            {activeSection === 'overview' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveSection('features')}
            className={`px-6 py-3 text-lg font-medium transition-colors relative ${
              activeSection === 'features' 
                ? 'text-purple-400' 
                : 'text-gray-400 hover:text-purple-400'
            }`}
          >
            Features
            {activeSection === 'features' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveSection('technical')}
            className={`px-6 py-3 text-lg font-medium transition-colors relative ${
              activeSection === 'technical' 
                ? 'text-purple-400' 
                : 'text-gray-400 hover:text-purple-400'
            }`}
          >
            Technical
            {activeSection === 'technical' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"></div>
            )}
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview Section */}
          <div className={`transition-all duration-500 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaBrain className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Focus</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Developed and implemented machine learning models for various applications, with a focus on computer vision and natural language processing tasks.
                </p>
              </div>

              <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Key Responsibilities</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Developing computer vision models for image classification and object detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Implementing NLP tasks including text classification and sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Optimizing model performance and implementing real-time processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className={`transition-all duration-500 ${activeSection === 'features' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaCode className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Computer Vision</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Image classification and object detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Feature extraction and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Real-time video processing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaRobot className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">NLP Tasks</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Text classification and sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Named entity recognition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Language modeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaBrain className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Model Development</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Custom model architectures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Transfer learning implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Model optimization and fine-tuning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaDatabase className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Data Processing</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Data cleaning and preprocessing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Feature engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>Dataset augmentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Section */}
          <div className={`transition-all duration-500 ${activeSection === 'technical' ? 'block' : 'hidden'}`}>
            <div className="bg-[#1A2333] rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Implementation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-purple-400">Core Technologies</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <FaCode className="text-purple-400" />
                      <span>Python for ML development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-purple-400" />
                      <span>PyTorch for deep learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-purple-400" />
                      <span>OpenCV for computer vision</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-purple-400">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-purple-400" />
                      <span>Developed custom ML models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-purple-400" />
                      <span>Implemented real-time processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-purple-400" />
                      <span>Optimized model performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 