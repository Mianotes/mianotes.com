import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { assetPath } from '../assets';
export function MeetMia() {
  const capabilities = [
  {
    title: 'Convert sources to Markdown',
    copy:
    'Turn images, documents, URLs, and audio files into clean Markdown your agents can read and reuse.'
  },
  {
    title: 'Work with other agents',
    copy:
    'Give Codex, Claude Code, Cursor, VS Code, Slack, and MCP tools a shared place to write and retrieve context.'
  },
  {
    title: 'Process files offline',
    copy:
    'Use a local LLM to read private files on your own machine, without sending them to a cloud service.'
  },
  {
    title: 'Summarise long material',
    copy:
    'Extract the decisions, action items, names, dates, and details that matter from messy notes and documents.'
  },
  {
    title: 'Edit documents beautifully',
    copy:
    'Use the web app’s advanced rich text editor to refine Markdown documents with a writing experience that feels fast, polished, and genuinely enjoyable.'
  },
  {
    title: 'Publish notes as static HTML',
    copy:
    'Turn selected notes into a static site that is easy to share with anyone, online or offline.'
  }];

  return (
    <section id="agents" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1">
            <div className="grid grid-cols-1 border-b border-slate-200/60 lg:grid-cols-12">
              {/* Column 1: Mia Character */}
              <div className="relative min-h-[360px] overflow-hidden bg-[#efefef] lg:col-span-3">
                <img
                src={assetPath('mia_document_agent.jpg')}
                alt="Mia, your documentation agent"
                className="absolute inset-0 h-full w-full object-cover object-center" />
              
              </div>

              {/* Column 2: Intro */}
              <div className="p-10 lg:col-span-9 lg:p-12 flex flex-col justify-center relative">
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Meet <span className="text-brand-purple">Mia</span>
                  </h2>
                  <h3 className="text-2xl font-medium text-slate-700 mb-6">
                    Your documentation agent.
                  </h3>

                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Mia helps your agents turn their work into reusable
                    documentation. She converts files, links, notes, and agent
                    output into clean Markdown, extracts the useful details,
                    adds structure, and prepares project knowledge for humans
                    and AI agents to reuse.
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-100 p-3 flex items-center justify-center shrink-0">
                      <img
                      src={assetPath('logo_square.png')}
                      alt="Mia Badge"
                      className="w-full h-full object-contain" />
                    
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Built for humans.
                      </p>
                      <p className="text-sm font-medium text-slate-900">
                        Designed for agents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Capabilities */}
            <div className="p-10 lg:p-12 bg-white flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-slate-900 mb-8">
                What Mia can do for you:
              </h4>
              <ul className="grid gap-4 md:grid-cols-2">
                {capabilities.map((item, index) =>
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                  
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900">
                        {item.title}
                      </h5>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.copy}
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
