import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SparklesCursor from './components/SparklesCursor'
import Link from 'next/link'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Megha Bhat - Portfolio',
  description: 'Personal portfolio showcasing my projects and experience in software development and AI/ML.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121] border-b border-emerald-500/20">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold gradient-text">Megha Bhat</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="nav-link text-sm">Home</Link>
                <Link href="/#about" className="nav-link text-sm">About</Link>
                <Link href="/#experience" className="nav-link text-sm">Experience</Link>
                <Link href="/#projects" className="nav-link text-sm">Projects</Link>
                <Link href="/#skills" className="nav-link text-sm">Skills</Link>
                <Link href="/#hackathons" className="nav-link text-sm">Hackathons</Link>
                <Link href="/#certificates" className="nav-link text-sm">Certificates</Link>
                <Link href="/#education" className="nav-link text-sm">Education</Link>
                <Link href="/#contact" className="nav-link text-sm">Contact Me</Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="pt-24">
          <SparklesCursor />
          {children}
        </main>
      </body>
    </html>
  )
} 