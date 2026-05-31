import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { assetPath } from '../assets';
import { LogoMark } from './Logo';

type Screen = {
  title: string;
  description: string;
  image: string;
};
const screens: Screen[] = [
{
  title: 'Organise',
  description:
  'Turn any folder into a small content hub for your project. Browse notes by folder, tag, source, or person, and keep the knowledge easy to search and update.',
  image: assetPath('screens/screen_organise.jpg')
},
{
  title: 'Edit',
  description:
  'Work on Markdown notes in the rich text editor, then ask Mia to summarise, restructure, or improve them with a local or cloud LLM.',
  image: assetPath('screens/screen_editor.jpg')
},
{
  title: 'Capture',
  description:
  'Convert files, links, images, audio, and text into Markdown notes. People can read, edit, and share them, while AI agents can maintain them through APIs and MCP.',
  image: assetPath('screens/screen_capture.jpg')
},
{
  title: 'Job Queue',
  description:
  'Watch Mianotes work in real time. See who added what, what Mia is processing, and where something needs attention.',
  image: assetPath('screens/screen_console.jpg')
},
{
  title: 'Users',
  description:
  'Give each folder its own team. Add users, assign admins, and keep project knowledge managed by the people working on it.',
  image: assetPath('screens/screen_users.jpg')
},
{
  title: 'Publish',
  description: <>Publish selected notes as a static site for your team, clients, or anyone following the project. (<a href="/docs/latest/index.html" style={{ textDecoration: "underline" }} target="_blank">View example</a>)</>,
  image: assetPath('screens/screen_publish.jpg')
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
    <section id="app" className="py-[86px] bg-white bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="flex items-start gap-3 text-4xl font-bold text-slate-900 mb-4 tracking-tight md:items-center">
            <LogoMark className="h-[48px] w-[48px] shrink-0" />
            <span>The Mianotes web app</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              This is where you add sources, review generated notes, organise project knowledge, and decide what is ready to share.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screens.map((screen) =>
          <div
            key={screen.title}
            className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            
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
        <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
          <p>
            The web app was designed around real content workflows, from capturing information to organising notes, reviewing changes, and publishing selected knowledge. The UI and UX are shaped by many years of experience building content management systems for journalists, editors, and publishing teams.
          </p>
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
                <X className="mx-0.5 h-4 w-4" />
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
