import React from 'react';
import {
  FolderInput,
  FilePenLine,
  ClipboardCheck,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { assetPath } from '../assets';
export function HowItWorks() {
  const steps = [
  {
    icon: <FolderInput className="w-8 h-8 text-brand-purple" />,
    title: 'Capture',
    description:
    'Add files, links, notes, images, audio, or agent output from your project.',
    image: assetPath('screens/screen_dashboard.png')
  },
  {
    icon: <FilePenLine className="w-8 h-8 text-brand-pink" />,
    title: 'Document',
    description:
    'Agents search, create, edit, and update notes through the API and MCP server, with Mia helping structure the knowledge as they work.',
    image: assetPath('screens/screen_console.png')
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-brand-blue" />,
    title: 'Review',
    description:
    'Humans use the web app to review what agents are documenting, improve the final notes, and publish the result.',
    image: assetPath('screens/screen_editor.png')
  }];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Turn any folder or repo into a knowledge hub.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) =>
            <div
              key={index}
              className="relative flex flex-col items-center text-center group">
              
                <div className="w-24 h-24 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative">
                  {step.icon}
                  {index < steps.length - 1 &&
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block text-slate-300">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                }
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-24 border-t border-slate-200/70 pt-20">
          <div className="mb-12 max-w-3xl">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
              From project material to reusable knowledge
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The same workflow, shown as a simple handoff between people,
              agents, and Mia.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) =>
            <React.Fragment key={step.title}>
                <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[auto_1fr_320px] lg:items-center lg:gap-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <img
                    src={step.image}
                    alt=""
                    className="aspect-[16/10] h-full w-full object-contain object-top" />
                  
                  </div>
                </div>
                {index < steps.length - 1 &&
              <div className="flex justify-center text-slate-300">
                    <ArrowDown className="h-7 w-7" />
                  </div>
              }
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>);

}
