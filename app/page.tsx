import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">MB</span>
            <div className="flex space-x-4">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Megha Bhat</h1>
            <p className="text-xl text-gray-600 mb-6">Computer Science Student at PES University</p>
            <p className="text-lg text-gray-700 mb-8">CGPA: 7.47/10</p>
            
            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/meghajbhat" target="_blank" 
                className="contact-link">
                <FaGithub size={24} />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank"
                className="contact-link">
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://leetcode.com/u/meghajbhat/" target="_blank"
                className="contact-link">
                <FaCode size={24} />
                <span>LeetCode</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a third-year Computer Science Engineering student at PES University, passionate about software development and problem-solving. 
            I enjoy working on challenging projects and continuously learning new technologies to expand my skill set.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="skill-card">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Programming Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Java
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  C++
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  HTML/CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  React
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Node.js
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Git
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  VS Code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  MySQL
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Linux
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title">Education</h2>
          <div className="skill-card">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">PES University</h3>
            <p className="text-lg text-gray-700 mb-2">Bachelor of Technology in Computer Science Engineering</p>
            <p className="text-gray-600">2021 - Present | CGPA: 7.47/10</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title">Contact Me</h2>
          <div className="skill-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="mailto:meghajbhat@gmail.com" className="contact-link">
                <FaEnvelope size={20} />
                <span>meghajbhat@gmail.com</span>
              </Link>
              <div className="contact-link">
                <FaPhone size={20} />
                <span>+91 9900043002</span>
              </div>
            </div>
            <div className="flex space-x-6 mt-6">
              <Link href="https://github.com/meghajbhat" target="_blank" 
                className="contact-link">
                <FaGithub size={20} />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank"
                className="contact-link">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://leetcode.com/u/meghajbhat/" target="_blank"
                className="contact-link">
                <FaCode size={20} />
                <span>LeetCode</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-center text-gray-600">
            © 2024 Megha Bhat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 