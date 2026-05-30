import React from 'react';
import { Github, Download } from 'lucide-react';
import { jumpToDownload } from '../jumpToDownload';
import { scrollToSection } from '../scrollToSection';
import { Logo } from './Logo';
import { XIcon } from './SocialIcons';

const DOCS_URL = '/docs/index.html';

function jumpToTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = 'auto';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  window.history.pushState(null, '', window.location.pathname);
  root.style.scrollBehavior = previousScrollBehavior;
}

export function Navbar() {
  const onSectionClick =
    (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToSection(sectionId);
    };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={jumpToTop}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            aria-label="Go to top">
            <Logo markClassName="h-9 w-9" textClassName="text-2xl" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#why"
              onClick={onSectionClick('why')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Why
            </a>
            <a
              href="#how-it-works"
              onClick={onSectionClick('how-it-works')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              How it works
            </a>
            <a
              href="#app"
              onClick={onSectionClick('app')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Web app
            </a>
            <a
              href="#use-cases"
              onClick={onSectionClick('use-cases')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Use cases
            </a>
            <a
              href="#developers"
              onClick={onSectionClick('developers')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              
              Developers
            </a>
            <a
              href={DOCS_URL}
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
            <a
              href="https://x.com/mianotesapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
              <span className="sr-only">X</span>
              <XIcon className="w-5 h-5" />
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
