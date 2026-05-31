import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ChevronRight, X } from 'lucide-react';
import { assetPath } from '../assets';
import { LogoMark } from './Logo';

const retrieveContextDemo = {
  prompt:
  'List all the use cases from Mia(workspace: Docs, folder: About, note: Use Cases)',
  duration: 'Worked for 10s',
  intro: 'From Mia’s Use Cases note, the use cases are:',
  items: [
  {
    title: 'Developers using AI agents',
    copy:
    'Use Mianotes as a documentation layer for Codex, Claude Code, Cursor, OpenClaw, VS Code agents, Slack bots, and local automation.'
  },
  {
    title: 'AI agents and tools',
    copy:
    'Use Mianotes as local long-term memory for creating folders, saving notes, tagging, searching previous context, updating notes, and leaving handoff comments.'
  },
  {
    title: 'Students',
    copy:
    'Turn lecture slides, book pages, whiteboards, images, handwritten notes, or audio recordings into searchable Markdown study notes.'
  },
  {
    title: 'Small teams',
    copy:
    'Use Mianotes as a shared local knowledge base for specs, research, meetings, decisions, roadmaps, and launch plans.'
  },
  {
    title: 'Researchers',
    copy:
    'Keep links, papers, documents, notes, prompts, and summaries in one searchable place, especially when source material is messy.'
  },
  {
    title: 'Families and everyday use',
    copy:
    'Use it as a private home knowledge base for homework, school documents, trip plans, medical appointment notes, forms, and letters.'
  }]
};

const retrieveContextTextLength =
retrieveContextDemo.intro.length +
retrieveContextDemo.items.reduce((total, item, index) =>
total + `${index + 1}. `.length + item.title.length + item.copy.length,
0);

const codexMessages = [
{
  message: 'Before we discuss the architecture, get context from Mia(workspace: Mianotes, folder: Getting Started)',
  duration: '',
  response:
    'Found the setup notes, first-run flow, and configuration guidance in Mianotes.'
},
{
  message: 'Turn our architecture discussion into a spec and save it in Mia(workspace: Research, folder: Architecture)',
  duration: '',
  response:
    'Done. Added to Mianotes as "Spec: Multi-workspace architecture" in Research / Architecture.'
},
{
  message: 'Save file into Mia(workspace: Research, folder: Sources)',
  duration: 'Worked for 23s',
  response:
    'Done. Saved the file to Mianotes, indexed it, and added it to Research / Sources.'
}];

export function Developers() {
  const [isContextDemoOpen, setIsContextDemoOpen] = useState(false);
  const [typedCharacters, setTypedCharacters] = useState(0);

  useEffect(() => {
    if (!isContextDemoOpen) {
      setTypedCharacters(0);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTypedCharacters(0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContextDemoOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const intervalId = window.setInterval(() => {
      setTypedCharacters((current) => {
        if (current >= retrieveContextTextLength) {
          window.clearInterval(intervalId);
          return current;
        }

        return Math.min(current + 4, retrieveContextTextLength);
      });
    }, 18);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.clearInterval(intervalId);
    };
  }, [isContextDemoOpen]);

  const retrieveContextResponse = useMemo(() => {
    let offset = 0;

    const reveal = (text: string) => {
      const start = offset;
      offset += text.length;

      if (typedCharacters <= start) {
        return '';
      }

      return text.slice(0, Math.min(text.length, typedCharacters - start));
    };

    const intro = reveal(retrieveContextDemo.intro);

    return (
      <div className="retrieve-context-response">
        {intro ? <p>{intro}</p> : null}
        <ol>
          {retrieveContextDemo.items.map((item, index) => {
            const number = reveal(`${index + 1}. `);
            const title = reveal(item.title);
            const copy = reveal(item.copy);

            if (!number && !title && !copy) {
              return null;
            }

            return (
              <li key={item.title}>
                <p>
                  {number}
                  <strong>{title}</strong>
                </p>
                {copy ? <span>{copy}</span> : null}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }, [typedCharacters]);

  const capabilities = [
  {
    title: 'Work with other agents',
    copy: (
      <>
        Give Codex, Claude Code, Cursor, VS Code, Slack, and MCP tools a shared place to write and{' '}
        <button
          type="button"
          onClick={() => setIsContextDemoOpen(true)}
          className="cursor-pointer appearance-none bg-transparent p-0 align-baseline font-semibold text-brand-purple underline underline-offset-4 hover:text-[#5f19ff]">
          retrieve context
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
              Mianotes gives Codex, Copilot, Claude Code, OpenClaw, Cursor, VS Code, Slack, and local agents a place to write down what they are doing as they work. Agents can save decisions, notes, source links, implementation details, and project context into one local workspace.
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
                    Mia helps your agents turn their work into reusable documentation. She converts files, notes, and agent output into clean Markdown, extracts the useful details, adds structure, and prepares project knowledge for humans and AI agents to reuse.
                  </p>

                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-100 p-3 flex items-center justify-center shrink-0">
                      <LogoMark className="h-full w-full" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Built with open source.
                      </p>
                      <p className="text-sm text-slate-900">
                        Mianotes uses Microsoft MarkItDown for file conversion and Ollama for local AI models.
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
                      <span className="codex-chat-title">Codex</span>
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
      {isContextDemoOpen ? (
        <div
          className="retrieve-context-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsContextDemoOpen(false);
            }
          }}>
          <div
            className="retrieve-context-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Codex retrieving context from Mianotes">
            <button
              type="button"
              className="retrieve-context-close"
              aria-label="Close retrieve context demo"
              onClick={() => setIsContextDemoOpen(false)}>
              <X className="h-5 w-5" />
            </button>
            <div className="codex-chat-window retrieve-context-window">
              <div className="codex-chat-titlebar">
                <div className="codex-chat-dots" aria-hidden="true">
                  <span className="bg-[#ff5f57]" />
                  <span className="bg-[#ffbd2e]" />
                  <span className="bg-[#28c840]" />
                </div>
                <span className="codex-chat-title">Codex</span>
              </div>

              <div className="retrieve-context-thread">
                <div className="codex-chat-message retrieve-context-prompt">
                  {retrieveContextDemo.prompt}
                </div>
                <div className="codex-chat-duration retrieve-context-duration">
                  <span>{retrieveContextDemo.duration}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
                {retrieveContextResponse}
                {typedCharacters < retrieveContextTextLength ? (
                  <span className="retrieve-context-cursor" aria-hidden="true" />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>);

}
