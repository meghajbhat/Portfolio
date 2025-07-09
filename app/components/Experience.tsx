'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className="min-h-screen py-20 bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
          Work Experience
        </h2>

        <div className="space-y-12">
          {/* CDSAML Experience */}
          <div className="flex gap-8">
            {/* Left side - Card with title */}
            <div className="w-[300px] bg-[#1A2333]/50 rounded-xl p-6 border border-emerald-500/20">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-[#1A2333] border border-emerald-500/20 flex items-center justify-center">
                  <div className="text-xl font-bold text-emerald-400">C</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">Research Intern - CDSAML</h3>
                  <p className="text-gray-400">CDSAML</p>
                </div>
              </div>
              <Link 
                href="/experience/cdsaml"
                className="mt-4 w-full px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Right side - Details */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-2">Research Intern - CDSAML</h3>
              <p className="text-emerald-400 text-xl mb-2">Bengaluru, India</p>
              <p className="text-gray-400 mb-6">July 2024 – August 2024</p>
              
              <h4 className="text-2xl font-bold text-white mb-4">Project: Measuring and Reducing Hallucinations in LLMs</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>Implemented general code, React and Chain Of Verification processes for hallucination reduction.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Nexus Info Experience */}
          <div className="flex gap-8">
            {/* Left side - Card with title */}
            <div className="w-[300px] bg-[#1A2333]/50 rounded-xl p-6 border border-emerald-500/20">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-[#1A2333] border border-emerald-500/20 flex items-center justify-center">
                  <div className="text-xl font-bold text-emerald-400">N</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">AIML Intern</h3>
                  <p className="text-gray-400">Nexus Info</p>
                </div>
              </div>
              <Link 
                href="/experience/nexus"
                className="mt-4 w-full px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Right side - Details */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-2">AIML Intern</h3>
              <p className="text-emerald-400 text-xl mb-2">Nexus Info</p>
              <p className="text-gray-400 mb-6">June 2023 - July 2023</p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>Developed NLP-based chatbots for general use and university admissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>Built ML-powered disease prediction system using classification algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>Applied various ML algorithms and NLP techniques in real-world scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 