import React from 'react';
import { Github, Download } from 'lucide-react';
import { assetPath } from '../assets';
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img
              src={assetPath('logo_light.png')}
              alt="Mianotes"
              className="h-[58px] w-auto" />
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#product"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Product
            </a>
            <a
              href="#use-cases"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Use cases
            </a>
            <a
              href="#docs"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Docs
            </a>
            <a
              href="#agents"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Agents
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
              
              <Github className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-purple hover:bg-purple-600 rounded-lg transition-colors shadow-sm gap-2">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </nav>);

}
