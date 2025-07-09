'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaBrain, FaChartLine, FaCode, FaLightbulb } from 'react-icons/fa';

export default function CdsamlExperience() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-sm border-b border-emerald-500/20 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            href="/#experience" 
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-4">
            <a 
              href="https://drive.google.com/file/d/14b3ElbyzX_lQHA-32UEDasPT8ayr18MM/view?usp=drive_link"
              target="_blank"
              className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              View Certificate
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Research Intern at CDSAML
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            Working on cutting-edge AI research to detect and reduce hallucinations in Large Language Models,
            focusing on improving the reliability and trustworthiness of AI-generated content.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-emerald-400 border border-emerald-500/30">
              PyTorch
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-emerald-400 border border-emerald-500/30">
              Deep Learning
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-emerald-400 border border-emerald-500/30">
              NLP
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#1A2333] text-emerald-400 border border-emerald-500/30">
              LLMs
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-emerald-500/20 mb-12 overflow-x-auto">
          <button
            onClick={() => setActiveSection('overview')}
            className={`px-6 py-3 text-lg font-medium transition-colors relative ${
              activeSection === 'overview' 
                ? 'text-emerald-400' 
                : 'text-gray-400 hover:text-emerald-400'
            }`}
          >
            Overview
            {activeSection === 'overview' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveSection('research')}
            className={`px-6 py-3 text-lg font-medium transition-colors relative ${
              activeSection === 'research' 
                ? 'text-emerald-400' 
                : 'text-gray-400 hover:text-emerald-400'
            }`}
          >
            Research
            {activeSection === 'research' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveSection('achievements')}
            className={`px-6 py-3 text-lg font-medium transition-colors relative ${
              activeSection === 'achievements' 
                ? 'text-emerald-400' 
                : 'text-gray-400 hover:text-emerald-400'
            }`}
          >
            Achievements
            {activeSection === 'achievements' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>
            )}
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview Section */}
          <div className={`transition-all duration-500 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <FaBrain className="text-2xl text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Focus</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Leading research on hallucination detection and reduction in Large Language Models,
                  with a focus on improving the reliability of AI-generated content across multiple domains.
                </p>
              </div>

              <div className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Key Responsibilities</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Developing and implementing hallucination detection algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Creating datasets for training and evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Conducting experiments and analyzing results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research Section */}
          <div className={`transition-all duration-500 ${activeSection === 'research' ? 'block' : 'hidden'}`}>
            <div className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Research Methodology</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Data Generation</h4>
                    <p className="text-gray-400">
                      Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks
                      using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Method Development</h4>
                    <p className="text-gray-400">
                      Designed and implemented both one-pass (one-turn) and conversational (multi-turn)
                      methods to induce and detect hallucinations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Reduction Techniques</h4>
                    <p className="text-gray-400">
                      Implemented general code, React and Chain Of Verification processes for
                      hallucination reduction and validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Implementation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-emerald-400">Tools & Technologies</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <FaCode className="text-emerald-400" />
                      <span>PyTorch & HuggingFace Transformers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-emerald-400" />
                      <span>BERT & GPT Models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-emerald-400" />
                      <span>Custom Training Pipelines</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-emerald-400">Evaluation Metrics</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-emerald-400" />
                      <span>Hallucination Detection Rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-emerald-400" />
                      <span>False Positive Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-emerald-400" />
                      <span>Model Confidence Scores</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`transition-all duration-500 ${activeSection === 'achievements' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <FaLightbulb className="text-2xl text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Successfully developed a novel approach to detect hallucinations in LLM outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Reduced hallucination rate by 45% using Chain of Verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Created a comprehensive dataset for future research</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Impact & Results</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Improved model reliability across multiple domains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Contributed to the field of trustworthy AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                    <span>Developed reusable verification frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 