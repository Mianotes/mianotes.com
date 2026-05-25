import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { assetPath } from '../assets';
export function MeetMia() {
  const capabilities = [
  'Summarize long notes and documents',
  'Extract key information and make it structured',
  'Improve structure and formatting',
  'Rewrite for clarity and tone',
  'Prepare context for humans and other agents',
  'Keep knowledge up to date automatically'];

  return (
    <section id="agents" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Column 1: Mia Character */}
            <div className="lg:col-span-3 relative bg-gradient-to-b from-purple-50 via-white to-purple-50 overflow-hidden min-h-[320px] lg:min-h-[560px] border-b lg:border-b-0 lg:border-r border-slate-200/60">
              {/* soft glow */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-purple-200/50 to-transparent blur-2xl pointer-events-none"></div>
              {/* sparkle dots */}
              <div className="absolute top-12 left-6 w-1.5 h-1.5 rounded-full bg-brand-purple/40"></div>
              <div className="absolute top-24 right-8 w-1 h-1 rounded-full bg-brand-pink/50"></div>
              <div className="absolute bottom-32 left-10 w-1 h-1 rounded-full bg-brand-blue/50"></div>
              <div className="absolute bottom-16 right-6 w-1.5 h-1.5 rounded-full bg-brand-purple/30"></div>

              {/* Mia visual */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={assetPath('mia_document_agent.png')}
                  alt="Mia, your documentation agent"
                  className="absolute max-w-none h-[110%] top-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none" />
                
              </div>

              {/* status badge floating */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-md z-10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Mia is online
                </span>
              </div>
            </div>

            {/* Column 2: Intro */}
            <div className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-slate-200/60">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Meet <span className="text-brand-purple">Mia</span>
                </h2>
                <h3 className="text-2xl font-medium text-slate-700 mb-6">
                  Your documentation agent.
                </h3>

                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Mia helps you and your agents turn messy inputs into
                  dependable, reusable knowledge. She lives in your local
                  workspace, ready to organize, extract, and format information
                  whenever you need it.
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
                    <p className="text-sm font-medium text-slate-500 mt-1">
                      Loved by engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Capabilities */}
            <div className="lg:col-span-4 p-10 lg:p-12 bg-white flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-slate-900 mb-8">
                What Mia can do for you:
              </h4>
              <ul className="space-y-5">
                {capabilities.map((item, index) =>
                <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                    </div>
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
