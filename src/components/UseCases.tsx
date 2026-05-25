import React from 'react';
import { Code, Bot, GraduationCap, Users, Search, Home } from 'lucide-react';
export function UseCases() {
  const cases = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Developers',
    description:
    'Let AI agents document decisions, changes, implementation notes, and project context while they work.'
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Agents & Tools',
    description:
    'Give agents and tools a knowledge base they can search, update, and maintain as they work.'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Students',
    description:
    'Upload notes, book pages, or slides, then ask Mia to turn them into clean Markdown notes.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Small Teams',
    description:
    'Keep shared context, meeting notes, decisions, and agent output in one local-first workspace.'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Researchers',
    description:
    'Keep research notes, links, papers, and summaries tagged and organised in one searchable hub.'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Families',
    description:
    'Save homework, receipts, trip plans, and everyday notes, then ask Mia to summarise them.'
  }];

  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Who is Mianotes for?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mianotes is useful whenever humans and agents need a shared,
            searchable, local knowledge base.
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