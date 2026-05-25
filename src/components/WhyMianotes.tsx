import React from 'react';

export function WhyMianotes() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Why Mianotes exists
          </h2>
          <h3 className="text-2xl font-semibold text-slate-800 leading-snug">
            Your agents are already creating useful context. Mianotes makes it
            permanent, searchable, and reusable.
          </h3>
          <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              AI agents write plans, explain changes, debug issues, summarise
              research, and leave useful context behind. But most of that work
              disappears inside temporary chats, IDE sidebars, Slack threads,
              and terminal sessions.
            </p>
            <p>
              Mianotes gives that work a place to live. Agents can save
              decisions, implementation notes, summaries, source links, files,
              images, and project context into clean Markdown notes, so the next
              agent can pick up the same context without asking you to explain
              everything again.
            </p>
          </div>
        </div>
      </div>
    </section>);

}
