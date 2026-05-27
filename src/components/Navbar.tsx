import React from 'react';
import { Github, Download } from 'lucide-react';
import { jumpToDownload } from '../jumpToDownload';
import { Logo } from './Logo';
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Logo markClassName="h-9 w-9" textClassName="text-2xl" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#why"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Why
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              How it works
            </a>
            <a
              href="#app"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Workspace
            </a>
            <a
              href="#use-cases"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Use cases
            </a>
            <a
              href="#meet-mia"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Meet Mia
            </a>
            <a
              href="#docs"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Docs
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Mianotes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
              
              <Github className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={jumpToDownload}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-purple hover:bg-purple-600 rounded-lg transition-colors shadow-sm gap-2">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </nav>);

}
