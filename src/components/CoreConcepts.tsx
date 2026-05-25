import React from 'react';
import { HardDrive, Users, FileText, Link } from 'lucide-react';
export function CoreConcepts() {
  const concepts = [
  {
    icon: <HardDrive className="w-6 h-6" />,
    title: 'Local-first storage',
    description:
    'Your knowledge stays on your machine. Markdown on disk, SQLite for metadata.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Human + Agent collaboration',
    description: 'Web UI for humans. REST API and MCP server for agents.'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Portable Markdown',
    description:
    'Notes are readable .md files you can grep, version, and back up.'
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: 'Source-aware',
    description:
    'Original files, URLs, and uploads kept next to the generated note.'
  }];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept, index) =>
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-5 text-brand-blue">
                {concept.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {concept.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {concept.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}