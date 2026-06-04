import React from 'react';
import { Github } from 'lucide-react';
import { Logo } from './Logo';
import { XIcon } from './SocialIcons';

const API_REFERENCE_URL = '/docs/latest/api-reference/api-overview-aa4fc408.html';
const MCP_SERVER_URL = '/docs/latest/for-agents/mcp-server-1de5df7f.html';

export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-center md:justify-self-start">
            <Logo markClassName="h-8 w-8" textClassName="text-xl" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-medium text-slate-500">
            <a href={API_REFERENCE_URL} className="hover:text-brand-purple transition-colors">
              API Reference
            </a>
            <a href={MCP_SERVER_URL} className="hover:text-brand-purple transition-colors">
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

          <div className="flex items-center gap-4 justify-self-center md:justify-self-end">
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
