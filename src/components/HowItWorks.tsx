import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { assetPath } from '../assets';

export function HowItWorks() {
  const steps = [
    {
      image: 'screens/screen_dashboard.png',
      title: 'Capture',
      description:
        'Add files, links, notes, images, audio, or agent output from your project.'
    },
    {
      image: 'screens/screen_console.png',
      title: 'Document',
      description:
        'Agents search, create, edit, and update notes through the API and MCP server, with Mia helping structure the knowledge as they work.'
    },
    {
      image: 'screens/screen_publish.png',
      title: 'Review',
      description:
        'Humans use the web app to review what agents are documenting, improve the final notes, and publish the result.'
    }
  ];
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-slate-600">
              Turn any folder or repo into a knowledge hub.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[24px] bg-slate-100 p-3 shadow-2xl shadow-slate-200/70">
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
      </div>
    </section>
  );
}
