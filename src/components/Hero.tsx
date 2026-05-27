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
import { jumpToDownload } from '../jumpToDownload';
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
            Turn any folder into a<br className="hidden md:block" />
            searchable <span className="text-gradient">knowledge hub</span>.
          </h1>

          <p className="mt-4 text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mianotes converts notes, meeting recordings, videos, articles, documents, images, and AI output into clean Markdown you can search, organise, edit, and reuse. Keep it local, share it with your group, or publish selected notes when you need to.
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
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm gap-2">
                <BookOpen className="w-5 h-5 text-slate-400" />
                Read the docs
              </button>
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
