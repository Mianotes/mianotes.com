import React from 'react';
import { Terminal } from 'lucide-react';
export function CodeShowcase() {
  const codeSnippet = `// data/projects/api-architecture-4a95f146.md
---
id: 4a95f146
title: API Architecture Decision
tags: [architecture, planning]
author: agent-claude-code
created: 2026-05-25T10:00:00Z
---

# API Architecture Decision

This document captures the decision to use REST over GraphQL for the new agent API.

## Context
Agents need a simple, predictable way to read and write notes. 
Complex querying is handled by the MCP server, so the core API should remain simple.

## Decision
We will implement a standard REST API with the following endpoints:
- \`GET /api/notes\`
- \`POST /api/notes\`
- \`GET /api/folders\`

## Agent Notes
> I have reviewed the existing SQLite schema and confirmed that 
> this approach maps cleanly to the \`notes\` and \`folders\` tables.
> - Claude Code`;
  return (
    <section id="docs" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Plain text. <br />
              <span className="text-brand-purple">Powerful metadata.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mianotes keeps user-facing note content as Markdown files under
              the active data folder. The text stays in a Markdown file, while
              SQLite stores indexes and metadata for fast lookups.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                Readable by humans
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-pink"></div>
                Stored as Markdown on disk
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                Indexed in SQLite for fast metadata lookups
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                Searchable by agents via API or MCP
              </li>
            </ul>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-2xl">
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 flex items-center text-xs text-slate-400 font-mono gap-2">
                <Terminal className="w-3.5 h-3.5" />
                api-architecture-4a95f146.md
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-slate-300 leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>);

}