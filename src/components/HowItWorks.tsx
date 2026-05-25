import React from 'react';
import {
  FolderInput,
  FilePenLine,
  ClipboardCheck,
  ArrowDown,
  ArrowRight,
  Check
} from 'lucide-react';
import { assetPath } from '../assets';

export function HowItWorks() {
  const steps = [
    {
      icon: <FolderInput className="w-7 h-7 text-brand-purple" />,
      image: 'screens/screen_dashboard.png',
      title: 'Capture',
      description:
        'Add files, links, notes, images, audio, or agent output from your project.'
    },
    {
      icon: <FilePenLine className="w-7 h-7 text-brand-pink" />,
      image: 'screens/screen_console.png',
      title: 'Document',
      description:
        'Agents search, create, edit, and update notes through the API and MCP server, with Mia helping structure the knowledge as they work.'
    },
    {
      icon: <ClipboardCheck className="w-7 h-7 text-brand-blue" />,
      image: 'screens/screen_publish.png',
      title: 'Review',
      description:
        'Humans use the web app to review what agents are documenting, improve the final notes, and publish the result.'
    }
  ];

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

        <div className="space-y-12">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              How it works 1
            </h3>
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[24px] bg-slate-100 p-3 shadow-2xl shadow-slate-200/70">
                <img
                  src={assetPath('screens/screen_dashboard.png')}
                  alt="Mianotes dashboard"
                  className="aspect-[16/10] w-full rounded-2xl bg-white object-contain object-top"
                />
              </div>
              <div className="relative space-y-10">
                <div className="absolute bottom-8 left-6 top-8 hidden border-l-2 border-dashed border-brand-purple/35 sm:block" />
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative grid grid-cols-[48px_1fr] gap-5"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-brand-purple">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-brand-purple">
                        Step {index + 1}
                      </p>
                      <h4 className="text-2xl font-black text-slate-900">
                        {step.title}
                      </h4>
                      <p className="mt-3 text-lg leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              How it works 2
            </h3>
            <div className="grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-400 lg:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                  <div className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                    <div className="border-b border-slate-200 bg-white p-6">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                          {step.icon}
                        </div>
                        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-brand-purple">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900">
                        {step.title}
                      </h4>
                      <p className="mt-3 min-h-[112px] text-base leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                    <div className="bg-slate-100 p-3">
                      <img
                        src={assetPath(step.image)}
                        alt={`${step.title} in Mianotes`}
                        className="aspect-[16/10] w-full rounded-2xl border border-slate-200 bg-white object-contain object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              How it works 3
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.title}>
                  <div className="grid items-center gap-6 rounded-3xl border border-slate-200 bg-white p-5 md:grid-cols-[84px_1fr_360px]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-2xl font-black text-slate-900 ring-1 ring-slate-200">
                      {index + 1}
                    </div>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        {step.icon}
                        <h4 className="text-2xl font-black text-slate-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-2">
                      <img
                        src={assetPath(step.image)}
                        alt={`${step.title} screen`}
                        className="aspect-[16/10] w-full rounded-xl border border-slate-200 bg-white object-contain object-top"
                      />
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex h-10 items-center justify-center text-slate-300">
                      <ArrowDown className="h-6 w-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
