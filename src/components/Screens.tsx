import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { assetPath } from '../assets';

const SOURCE = assetPath('mianotes_event_poster_A4.png');

type Screen = {
  title: string;
  description: string;
  position: string;
};
const screens: Screen[] = [
{
  title: 'Dashboard',
  description:
  'Browse folders, users, tags, recent notes, and searchable Markdown from one clean control room.',
  position: '0% 18%'
},
{
  title: 'Jobs',
  description:
  'Track parsing and indexing for URLs, files, audio, and other source material with clear status updates.',
  position: '100% 18%'
},
{
  title: 'Notes + Mia',
  description:
  'Read polished Markdown, edit it, and ask Mia to summarise, restructure, or extract useful details.',
  position: '0% 100%'
},
{
  title: 'Publish',
  description:
  'Choose folders and tags, then generate a static HTML documentation site from selected notes.',
  position: '100% 100%'
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
    <section className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Four screens. One shared knowledge hub.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A web app for humans, with APIs and MCP for agents. Each screen
            turns raw context into durable, useful Markdown knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screens.map((screen) =>
          <div
            key={screen.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            
              {/* Screenshot - clickable */}
              <button
              onClick={() => setActive(screen)}
              className="group relative block w-full aspect-[16/10] bg-slate-100 bg-no-repeat overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              style={{
                backgroundImage: `url('${SOURCE}')`,
                backgroundSize: '210% auto',
                backgroundPosition: screen.position
              }}
              aria-label={`Open ${screen.title} screenshot at full size`}>
              
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
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}>
            
              {/* Close button */}
              <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 sm:-top-2 sm:-right-12 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-colors"
              aria-label="Close">
              
                <X className="w-5 h-5" />
              </button>

              {/* Large cropped screenshot */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div
                className="w-full aspect-[16/10] bg-no-repeat"
                style={{
                  backgroundImage: `url('${SOURCE}')`,
                  backgroundSize: '210% auto',
                  backgroundPosition: active.position
                }}
                role="img"
                aria-label={`${active.title} screenshot, full size`} />
              
                <div className="px-6 py-4 border-t border-slate-200 bg-white">
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
