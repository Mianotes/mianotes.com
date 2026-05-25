import React from 'react';
import { Github } from 'lucide-react';
import { assetPath } from '../assets';
export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={assetPath('logo_square.png')}
              alt="Mianotes Logo"
              className="w-8 h-8 opacity-80 grayscale hover:grayscale-0 transition-all" />
            
            <span className="text-slate-900 font-semibold text-lg tracking-tight">
              mianotes
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-brand-purple transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-brand-purple transition-colors">
              API Reference
            </a>
            <a href="#" className="hover:text-brand-purple transition-colors">
              MCP Server
            </a>
            <a href="#" className="hover:text-brand-purple transition-colors">
              Privacy
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              className="text-slate-400 hover:text-slate-900 transition-colors">
              
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Mianotes. Open source and
          local-first.
        </div>
      </div>
    </footer>);

}
