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
export function UseCases() {
  const cases = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Small Teams',
    description:
    'Keep meeting notes, decisions, files, research, links, and project context in one shared workspace.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Entrepreneurs',
    description:
    'Collect ideas, customer calls, product notes, competitor research, planning documents, and AI output as you build.'
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: 'Researchers',
    description:
    'Keep papers, articles, links, interviews, videos, prompts, and summaries tagged and organised in one searchable hub.'
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Developers',
    description:
    'Use Mianotes as a local knowledge hub for project notes, implementation details, decisions, debugging findings, and agent output. Document and publish.'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Students',
    description:
    'Upload notes, book pages, slides, lectures, videos, or homework, then ask Mia to turn them into clean Markdown notes.'
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI agents and tools',
    description:
    'Give agents a knowledge base they can search, update, and maintain through the API and MCP server.'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Families and personal projects',
    description:
    'Run Mianotes on your Mac mini to save homework, book references, trip plans, and everyday notes, then ask Mia to summarise or organise them.'
  }];

  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Who is Mianotes for?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mianotes is for individuals and small groups who collect useful information and need a better way to organise, search, share, and reuse it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) =>
          <div
            key={index}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
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
