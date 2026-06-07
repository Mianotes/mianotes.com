import React, { useEffect, useState } from 'react';
import { CheckCircle2, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { assetPath } from '../assets';
import { CodexResponseModal } from './CodexResponseModal';
import { LogoMark } from './Logo';

type InstallStep = {
  title: string;
  label: string;
  description: string;
  image: string;
};

const installSteps: InstallStep[] = [
{
  title: 'Install Mianotes',
  label: 'Install Mianotes on a laptop or server.',
  description:
    'Install the package or container where your team wants Mianotes to run.',
  image: assetPath('screens/screen_chrome_app.jpg')
},
{
  title: 'Add the Mianotes Skill',
  label: 'Add the Mianotes skill.',
  description:
    'Connect Claude Code or Codex so your AI tools can read from and write to Mianotes.',
  image: assetPath('screens/screen_chrome_app.jpg')
}];

const retrieveContextDemo = {
  prompt:
  'Mia, review the codebase, identify the product use cases, and document them in the About folder in the Docs workspace',
  duration: 'Worked for 10s',
  intro: 'Done. I saved them in the Docs workspace under About.',
  items: [
  {
    title: 'Small Teams',
    copy:
    'Keep meeting notes, decisions, files, research, links, and project context in one shared workspace.'
  },
  {
    title: 'Startups',
    copy:
    'Collect ideas, customer calls, product notes, competitor research, planning documents, and AI output as you build.'
  },
  {
    title: 'Researchers',
    copy:
    'Keep papers, articles, links, interviews, videos, prompts, and summaries tagged and organised in one searchable hub.'
  },
  {
    title: 'Developers',
    copy:
    'Give agents a knowledge base they can search, update, and maintain through the API and MCP server.'
  },
  {
    title: 'Students',
    copy:
    'Upload notes, book pages, slides, lectures, videos, or homework, then ask Mia to turn them into clean Markdown notes.'
  },
  {
    title: 'Families',
    copy:
    'Run Mianotes on your Mac mini to save homework, book references, trip plans, and everyday notes, then ask Mia to summarise or organise them.'
  }]
};

const codexMessages = [
{
  message: 'Mia, get context from the Docs workspace before we talk about the architecture',
  duration: '',
  response:
    'Done. I\'m ready to discuss the architecture with that context.'
},
{
  message: 'Mia, turn this architecture conversation into a spec and save it in the Proposals workspace, inside the Architecture folder',
  duration: '',
  response:
    'Done. I saved it with the title “Architecture discussion spec”.'
},
{
  message: 'Mia, import this PDF into the Research workspace, inside the Tools folder',
  duration: 'Worked for 23s',
  response:
    'Done. I imported "Open source productivity tools" as Markdown into the Research workspace, inside the Tools folder.'
}];

export function Developers() {
  const [isContextDemoOpen, setIsContextDemoOpen] = useState(false);
  const [activeInstallStep, setActiveInstallStep] = useState<InstallStep | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveInstallStep(null);
    };
    if (activeInstallStep) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeInstallStep]);

  const capabilities = [
  {
    title: 'Work with other agents',
    copy: (
      <>
        Give Codex, Claude Code, Cursor, VS Code, Slack, and MCP tools a shared place to{' '}
        <button
          type="button"
          onClick={() => setIsContextDemoOpen(true)}
          className="cursor-pointer appearance-none bg-transparent p-0 align-baseline font-semibold text-[#7f5ccf] underline underline-offset-4 hover:text-[#5f19ff] focus:outline-none">
          write and retrieve context
        </button>
        .
      </>
    )
  },
  {
    title: 'Convert sources to Markdown',
    copy:
    'Turn images, documents, URLs, and audio files into clean Markdown your agents can read and reuse.'
  },
  {
    title: 'Process files offline',
    copy:
    'Convert private files on your own machine and process them with a local LLM, without sending them to a cloud service.'
  },
  {
    title: 'Publish notes as static HTML',
    copy: (
      <>
        Turn selected notes into a{' '}
        <a
          href="/docs/latest/index.html"
          className="font-semibold text-brand-purple underline underline-offset-4 hover:text-[#5f19ff]">
          static site
        </a>{' '}
        you can share online, or keep offline.
      </>
    )
  }];

  return (
    <section id="developers" className="py-[86px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-4xl">
          <h2 className="flex items-start gap-3 text-4xl font-bold text-slate-900 mb-4 tracking-tight md:items-center">
            <LogoMark className="h-[48px] w-[48px] shrink-0" />
            <span>For Developers</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              Mianotes gives Codex, Copilot, Claude Code, OpenClaw, Cursor, VS Code, Slack, and local agents a place to write down what they are doing as they work. It also gives local agents the <a href="https://github.com/Mianotes/mianotes-web-service/blob/main/skills/mianotes/SKILL.md" className="why-inline-link" target="_blank">SKILLS</a> they need to work with your project knowledge. They can save notes, search, retrieve, update, prompt Mia, index links, convert files, and use local folder knowledge before answering.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1">
            <div className="meet-mia-intro grid grid-cols-1 border-b border-slate-200/60 md:grid-cols-12">
              {/* Column 1: Mia Character */}
              <div className="meet-mia-image relative min-h-[360px] overflow-hidden bg-[#efefef] md:col-span-4">
                <img
                src={assetPath('images/mia_document_agent.jpg')}
                alt="Mia, your documentation agent"
                className="absolute inset-0 h-full w-full object-cover object-center" />
              
              </div>

              {/* Column 2: Intro */}
              <div className="meet-mia-copy p-10 md:col-span-8 lg:p-12 flex flex-col justify-start relative">
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                      Meet <span className="text-brand-purple">Mia</span>
                    </h3>
                    <p className="text-2xl font-medium text-slate-700 leading-relaxed">
                      Your documentation agent.
                    </p>
                  </div>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Markdown is the format developers and agents can both work with. It can become documentation pages, README files, prompt references, support notes, onboarding material, or source documents for AI agent skills. It's plain text, so it's easier to version, compare, review, store in Git, and feed into LLMs or data pipelines.
                  </p>

                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-100 p-3 flex items-center justify-center shrink-0">
                      <LogoMark className="h-full w-full" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Install in minutes.
                      </p>
                      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-900">
                        {installSteps.map((step, index) => (
                          <React.Fragment key={step.title}>
                            <span
                              className="text-slate-900"
                              aria-hidden="true">
                              {['①', '②'][index]}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveInstallStep(step)}
                              className="appearance-none bg-transparent p-0 text-left text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-700 hover:decoration-slate-500 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-400"
                              aria-label={`View ${step.title} screenshot`}>
                              {step.label}
                            </button>
                            {index < installSteps.length - 1 ? <span aria-hidden="true" /> : null}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className="p-10 lg:p-12 bg-white">
              <h4 className="text-lg font-semibold text-slate-900 mb-8">
                What Mia helps you do
              </h4>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <ul className="grid gap-4">
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

                <div className="meet-mia-codex">
                  <div className="codex-chat-window" aria-label="Codex and Mianotes conversation">
                    <div className="codex-chat-titlebar">
                      <div className="codex-chat-dots" aria-hidden="true">
                        <span className="bg-[#ff5f57]" />
                        <span className="bg-[#ffbd2e]" />
                        <span className="bg-[#28c840]" />
                      </div>
                      <span className="codex-chat-title">Claude/Codex/Cursor</span>
                    </div>

                    <div className="codex-chat-thread">
                      {codexMessages.slice(0, 3).map((item, index) =>
                      <div className="codex-chat-turn" key={index}>
                          <div className="codex-chat-message">{item.message}</div>
                          {item.duration ? (
                            <div className="codex-chat-duration">
                              <span>{item.duration}</span>
                              <ChevronRight className="h-4 w-4" />
                            </div>
                          ) : null}
                          <p>{item.response}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodexResponseModal
        isOpen={isContextDemoOpen}
        onClose={() => setIsContextDemoOpen(false)}
        prompt={retrieveContextDemo.prompt}
        duration={retrieveContextDemo.duration}
        intro={retrieveContextDemo.intro}
        items={retrieveContextDemo.items}
        ariaLabel="Codex retrieving context from Mianotes" />

      <AnimatePresence>
        {activeInstallStep ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setActiveInstallStep(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeInstallStep.title} screenshot`}>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => setActiveInstallStep(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                aria-label="Close">
                <X className="mx-0.5 h-4 w-4" />
              </button>

              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                  src={activeInstallStep.image}
                  alt={`${activeInstallStep.title} screenshot`}
                  className="max-h-[calc(100vh-11rem)] w-full object-contain object-top" />
                <div className="border-t border-slate-200 bg-white px-6 py-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {activeInstallStep.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {activeInstallStep.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>);

}
