import React from 'react';
import { Download, BookOpen, Code2, Home, Shield } from 'lucide-react';
import {
  OllamaIcon,
  OpenAIIcon,
  ClaudeIcon,
  OpenClawIcon,
  VSCodeIcon,
  CursorIcon,
  SlackIcon,
  MCPIcon } from
'./BrandIcons';
import { jumpToDownload } from '../utils/jumpToDownload';
const integrations = [
{
  name: 'Ollama',
  Icon: OllamaIcon
},
{
  name: 'Codex',
  Icon: OpenAIIcon
},
{
  name: 'Claude Code',
  Icon: ClaudeIcon
},
{
  name: 'OpenClaw',
  Icon: OpenClawIcon
},
{
  name: 'VS Code',
  Icon: VSCodeIcon
},
{
  name: 'Cursor',
  Icon: CursorIcon
},
{
  name: 'Slack',
  Icon: SlackIcon
},
{
  name: 'MCP',
  Icon: MCPIcon
}];

export function Hero() {
  return (
    <div className="hero-pastel-bg relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full px-3 py-1 text-sm font-medium text-brand-purple bg-purple-100 mb-8 border border-purple-200">
            <span className="inline-flex items-center gap-1.5">
              <Home className="h-3.5 w-3.5" />
              Local-first
            </span>
            <span aria-hidden="true" className="text-brand-purple/45">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Private
            </span>
            <span aria-hidden="true" className="text-brand-purple/45">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5" />
              Open source
            </span>
          </div>

          <h1 className="text-[2.6rem] md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Turn any{' '}
            <span className="hero-folder-word text-gradient">
              folder
              <svg
                className="hero-folder-pointer"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  d="M12.2 5.3C12.2 4.2 13.1 3.3 14.2 3.3C15.3 3.3 16.2 4.2 16.2 5.3V16.4L18 14.9C18.8 14.2 20.1 14.3 20.8 15.1L21.7 16.2L23 15.2C23.8 14.6 25.1 14.7 25.8 15.5L27.4 17.4C28 18.1 28.3 19 28.2 20L27.7 25.1C27.5 27.9 25.1 30.1 22.3 30.1H17.3C15.5 30.1 13.8 29.2 12.7 27.8L6.3 19.5C5.6 18.6 5.8 17.4 6.7 16.7C7.5 16.1 8.6 16.2 9.3 16.9L12.2 19.9V5.3Z"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round" />
                <path
                  d="M16.2 16.4V21.6M20.8 15.1L23.2 18M25.8 15.5L27.4 17.4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round" />
              </svg>
            </span>{' '}
            into a <br className="hidden md:block" />searchable knowledge hub.
          </h1>

          <p className="mt-4 text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mianotes converts notes, links, documents, meeting recordings, videos, articles, images, and AI output into clean Markdown you can search, organise, edit, and reuse. Keep it local, share it with your group, or publish selected notes when you need to.
          </p>

          <div className="relative inline-flex flex-col items-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
              <button
                type="button"
                onClick={jumpToDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-brand-purple hover:bg-purple-600 rounded-xl transition-all shadow-lg shadow-purple-500/25 gap-2">
                <Download className="w-5 h-5" />
                Download Mianotes
              </button>
              <a
                href="/docs/latest/index.html"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm gap-2">
                <BookOpen className="w-5 h-5 text-slate-400" />
                Read the docs
              </a>
            </div>
            <p className="pt-5 text-sm text-slate-500">
              Built on top of the open-source Microsoft MarkItDown and Ollama engines.
            </p>
          </div>

          {/* Trust Row */}
          <div className="pt-8">
            <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
              Works seamlessly with
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-slate-700">
              {integrations.map(({ name, Icon }) =>
              <div
                key={name}
                className="flex items-center gap-2 font-semibold opacity-70 hover:opacity-100 transition-opacity">
                
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-72 bg-gradient-to-b from-white/0 via-white/85 to-white" />
    </div>);

}
