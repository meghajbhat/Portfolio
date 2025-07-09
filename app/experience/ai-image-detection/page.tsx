'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaBrain, FaCode, FaDatabase, FaChartLine, FaImage, FaCheck } from 'react-icons/fa';

export default function AIImageDetectionPage() {
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                Megha Bhat
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link>
                <Link href="/#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link>
                <Link href="/#experience" className="text-gray-400 hover:text-purple-400 transition-colors">Experience</Link>
                <Link href="/#projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Project-specific Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-[#0B1121]/90 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
            >
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
            <a 
              href="https://github.com/meghajbhat/AI-Generated-Image-Detection" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
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
          <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-purple-500/20 p-12 mb-12 hover:border-purple-500/40 transition-colors duration-500">
            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
            
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
              <FaImage className="text-4xl text-purple-400 relative z-10 animate-float" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Generated Image Detection
              </h1>
              <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                In Progress
              </span>
            </div>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              A deep learning system using ResNet18 to detect AI-generated images, featuring live training logs, model checkpointing, and comprehensive evaluation metrics.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                PyTorch
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                ResNet18
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                Kaggle
              </span>
            </div>
          </div>

          {/* Dataset Section */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaDatabase className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Dataset</h2>
            </div>
            
            <div className="space-y-6 text-gray-400">
              <p>
                Using the "AI vs. Real Images" dataset from Kaggle, consisting of 60,000 images with balanced classes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Dataset Statistics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      30K AI-generated images
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      30K Real images
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      Binary classification (1: AI, 0: Real)
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Preprocessing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      Resizing and normalization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      Train/Val/Test split
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      Data augmentation (flip, rotate)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Project Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phase 1 */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                  <FaCheck className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Phase 1: Dataset Preparation</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  Completed preprocessing pipeline with data augmentation and proper splitting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Image resizing and normalization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Train/Val/Test split
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Augmentation techniques applied
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                  <FaCheck className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Phase 2: Model Building</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  Implemented ResNet18 with transfer learning and comprehensive training pipeline.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    ResNet18 with ImageNet weights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Live training logs (every 15 images)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Model checkpointing (every 1000 images)
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                  <FaChartLine className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Phase 3: Evaluation</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  In progress: Implementing comprehensive evaluation metrics and robustness tests.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Accuracy, Precision, Recall, F1-score
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Confusion matrix analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Robustness testing (noise, compression)
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                  <FaBrain className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Phase 4: Explainability</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  Planned: Implementing visualization techniques to understand model decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Grad-CAM or Saliency Maps
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    SHAP/LIME for ensemble models
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Misclassified image analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaCode className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Technical Stack</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Core Components</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    PyTorch Deep Learning Framework
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    ResNet18 Architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Kaggle Notebooks Platform
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Additional Tools</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Matplotlib & Seaborn
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Custom Logging System
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    TQDM Progress Bars
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