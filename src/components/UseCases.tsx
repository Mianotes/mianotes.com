import React from 'react';
import {
  Bot,
  Code2,
  GraduationCap,
  Home,
  Lightbulb,
  Microscope,
  Users
} from 'lucide-react';
import { LogoMark } from './Logo';
export function UseCases() {
  const cases = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Small Teams',
    description:
    'Capture ideas, drafts, meeting notes, decisions, research, links, files, and project context in one shared workspace. Share SKILLs so your team works from the same source.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Product Managers',
    description:
    'Turn notes, context, requirements, and priorities into PRDs, tech specs, and roadmaps. Use SKILLs to prepare clear handoffs for engineering.'
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Engineers',
    description:
    'Give agents a workspace they can search, update, and maintain through the API and MCP server. Store prompts, docs, decisions, and system context in one place.'
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: 'Researchers',
    description:
    'Extract useful points from PDFs, papers, articles, interviews, and videos. Keep sources, notes, prompts, and summaries tagged, searchable, and ready to reuse.'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Students',
    description:
    'Turn PDFs, slides, lectures, videos, book pages, and homework into Markdown and HTML. Use SKILLs to create summaries, mock tests, flashcards, and study notes.'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Families',
    description:
    'Run Mianotes at home to save homework, book references, trip plans, receipts, and everyday notes. Ask Mia to summarise, organise, or find what you need.'
  }];

  return (
    <section id="use-cases" className="py-[86px] bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="flex items-start gap-3 text-4xl font-bold text-slate-900 mb-4 tracking-tight md:items-center">
            <LogoMark className="h-[48px] w-[48px] shrink-0" />
            <span>Who is Mianotes for?</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
            <p>
              Mianotes is for individuals and small groups who collect useful information and need a better way to organise, search, share, and reuse it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) =>
          <div
            key={index}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group lg:hover:shadow-md lg:hover:-translate-y-1">
            
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center mb-6 transition-colors lg:group-hover:bg-brand-purple lg:group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
