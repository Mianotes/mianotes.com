import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { assetPath } from '../assets';

export function HowItWorks() {
  const steps = [
    {
      image: 'screens/screen_dashboard.png',
      title: 'Choose',
      description:
        'Select the folder you want to work on. Mianotes turns it into a dedicated workspace for your notes, files, links, sources, and project knowledge.'
    },
    {
      image: 'screens/screen_console.png',
      title: 'Organise',
      description:
        'Add files, links, notes, images, audio, videos, meeting recordings, articles, or AI output. Ask Mia to summarise, extract key points, add structure, and turn everything into clean Markdown notes.'
    },
    {
      image: 'screens/screen_publish.png',
      title: 'Share',
      description:
        'Review notes with your group, publish selected knowledge, or let agents access the same context through the API and MCP server.'
    }
  ];
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mianotes turns any folder into a knowledge hub where you can capture information, process documents locally, organise notes, review changes, and publish selected knowledge when you need to. Agents can access the same context through the API and MCP server.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[24px] bg-slate-100 p-3">
            <img
              key={active.image}
              src={assetPath(active.image)}
              alt={`${active.title} in Mianotes`}
              className="aspect-[16/10] w-full rounded-2xl bg-white object-contain object-top transition-opacity duration-200"
            />
          </div>

          <div className="relative space-y-10">
            <div className="absolute bottom-8 left-6 top-8 hidden border-l-2 border-dashed border-brand-purple/35 sm:block" />
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className="group relative grid w-full grid-cols-[48px_1fr] gap-5 text-left outline-none"
                >
                  <div
                    className={[
                      'relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-brand-purple transition-colors duration-200',
                      isActive ? 'bg-violet-200' : 'bg-violet-100'
                    ].join(' ')}
                  >
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="rounded-2xl transition-colors duration-200 group-focus-visible:ring-2 group-focus-visible:ring-brand-purple/40 group-focus-visible:ring-offset-4">
                    <h3
                      className={[
                        'text-2xl font-black transition-colors duration-200',
                        isActive ? 'text-brand-purple' : 'text-slate-900'
                      ].join(' ')}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
