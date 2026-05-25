import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { assetPath } from '../assets';

type Screen = {
  title: string;
  description: string;
  image: string;
};
const screens: Screen[] = [
{
  title: 'Provide context',
  description:
  'Give agents the files, links, screenshots, notes, and background they need to understand the task.',
  image: assetPath('screens/screen_dashboard.png')
},
{
  title: 'Save information',
  description:
  'Agents save decisions, implementation notes, summaries, source links, and project context as they work.',
  image: assetPath('screens/screen_console.png')
},
{
  title: 'Review the work',
  description:
  'Use the dashboard and editor to read, improve, tag, and organise what your agents documented.',
  image: assetPath('screens/screen_editor.png')
},
{
  title: 'Publish the result',
  description:
  'Turn selected notes into a clean static site you can share with your team, clients, or future agents.',
  image: assetPath('screens/screen_publish.png')
}];

export function Screens() {
  const [active, setActive] = useState<Screen | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    if (active) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);
  return (
    <section className="pt-0 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screens.map((screen) =>
          <div
            key={screen.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            
              {/* Screenshot - clickable */}
              <button
              onClick={() => setActive(screen)}
              className="group relative block w-full aspect-[16/10] bg-slate-100 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              aria-label={`Open ${screen.title} screenshot at full size`}>
              
                <img
                src={screen.image}
                alt=""
                className="h-full w-full object-contain object-top" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-slate-900 shadow-lg">
                    Click to expand
                  </span>
                </div>
              </button>

              {/* Caption */}
              <div className="p-7 lg:p-8">
                <div className="w-10 h-1 rounded-full bg-gradient-brand mb-4"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {screen.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} screenshot`}>
          
            <motion.div
            initial={{
              scale: 0.95,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.95,
              opacity: 0
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut'
            }}
            className="relative flex max-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col">
            
              {/* Close button */}
              <button
              onClick={() => setActive(null)}
              className="fixed right-5 top-5 z-10 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-950 shadow-xl transition-colors hover:bg-slate-100"
              aria-label="Close">
              
                <span aria-hidden="true">[</span>
                <X className="mx-0.5 h-4 w-4" />
                <span aria-hidden="true">]</span>
              </button>

              {/* Large screenshot */}
              <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                src={active.image}
                alt={`${active.title} screenshot, full size`}
                className="min-h-0 w-full flex-1 object-contain" />
              
                <div className="shrink-0 px-6 py-4 border-t border-slate-200 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {active.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {active.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
