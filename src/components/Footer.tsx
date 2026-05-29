import React from 'react';
import { Github } from 'lucide-react';
import { Logo } from './Logo';
import { XIcon } from './SocialIcons';

const DOCS_URL =
  'https://github.com/Mianotes/mianotes-web-service/blob/main/docs/TOC.md';

export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo markClassName="h-8 w-8" textClassName="text-xl" />

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-4 text-center text-sm font-medium text-slate-500 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3">
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-brand-purple transition-colors">
              API Reference
            </a>
            <a href="#" className="hover:text-brand-purple transition-colors">
              MCP Server
            </a>
            <a
              href="https://github.com/Mianotes/mianotes-web-service/issues"
              className="hover:text-brand-purple transition-colors">
              Report a bug
            </a>
            <a
              href="https://raw.githubusercontent.com/Mianotes/mianotes-web-service/refs/heads/main/LICENCE"
              target="_blank"
              className="hover:text-brand-purple transition-colors">
              GPL-3.0 License
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mianotes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors">
              
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/mianotesapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="sr-only">X</span>
              <XIcon className="w-6 h-6" />
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
