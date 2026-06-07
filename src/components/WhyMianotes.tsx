import React, { useState } from 'react';
import { CodexResponseModal } from './CodexResponseModal';
import { LogoMark } from './Logo';

type SourceIcon = 'file' | 'link' | 'mic' | 'video' | 'image' | 'chat';

const previewNotes: Array<{
  icon: SourceIcon;
  title: string;
  subtitle: string;
  tags: Array<{ label: string; width: number; tone: 'purple' | 'slate' }>;
}> = [
  {
    icon: 'link',
    title: 'competitor_analysis.md',
    subtitle: 'Indexed from website',
    tags: [
      { label: '#market', width: 78, tone: 'purple' },
      { label: '#analysis', width: 86, tone: 'slate' }
    ]
  },
  {
    icon: 'mic',
    title: 'quarterly_earnings_report.md',
    subtitle: 'Transcribed from meeting',
    tags: [
      { label: '#earnings', width: 116, tone: 'purple' },
      { label: '#report', width: 78, tone: 'slate' }
    ]
  },
  {
    icon: 'video',
    title: 'ollama_setup_guide.md',
    subtitle: 'Summarised from YouTube',
    tags: [
      { label: '#setup', width: 68, tone: 'purple' },
      { label: '#local-ai', width: 86, tone: 'slate' }
    ]
  },
  {
    icon: 'file',
    title: 'llm_memory_research.md',
    subtitle: 'Converted from PDF',
    tags: [
      { label: '#research', width: 88, tone: 'purple' },
      { label: '#llm', width: 56, tone: 'slate' }
    ]
  },
  {
    icon: 'image',
    title: 'sprint_whiteboard.md',
    subtitle: 'Extracted from screenshot',
    tags: [
      { label: '#sprint', width: 72, tone: 'purple' },
      { label: '#planning', width: 90, tone: 'slate' }
    ]
  },
  {
    icon: 'chat',
    title: 'pm_handoff_notes.md',
    subtitle: 'Saved from agent output',
    tags: [
      { label: '#agents', width: 76, tone: 'purple' },
      { label: '#handoff', width: 84, tone: 'slate' }
    ]
  }
];

const docsReviewDemo = {
  prompt: 'Mia, review the documentation in the Docs workspace and update anything that is missing or outdated',
  duration: 'Worked for 54s',
  intro: 'Done, I\'ve reviewed the Docs workspace and updated the outdated sections. Changes made:',
  items: [
  {
    title: 'Python support',
    copy:
    'The docs said Python 3.14 was not supported, but pyproject.toml now allows >=3.11,<3.15, so Python 3.14 is in range. See pyproject.toml, line 6.'
  },
  {
    title: 'Upload extensions',
    copy:
    'The docs missed .mp4, but the API supports it. See note_ingestion.py, line 49.'
  },
  {
    title: 'Publishing themes',
    copy:
    'Some docs and API examples said only mialight and miadark were supported, but the current code lists four themes: mialight, miadocs, miadev, and miadark. See publishing_theme.py, line 51.'
  },
  {
    title: 'LLM defaults',
    copy:
    'The docs listed gpt-5-nano as the default text model, but the code defaults OpenAI to gpt-4o-mini. See config.py, line 31, and mia.py, line 53.'
  }]
};

function PreviewSourceIcon({ icon, x, y }: { icon: SourceIcon; x: number; y: number }) {
  const common = {
    fill: 'none',
    stroke: '#7b8799',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  return (
    <g transform={`translate(${x} ${y}) scale(1.35)`}>
      {icon === 'file' && (
        <>
          <path {...common} d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path {...common} d="M14 2v4a2 2 0 0 0 2 2h4" />
        </>
      )}
      {icon === 'link' && (
        <>
          <path {...common} d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path {...common} d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </>
      )}
      {icon === 'mic' && (
        <>
          <path {...common} d="M12 19v3" />
          <path {...common} d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <rect x="9" y="2" width="6" height="13" rx="3" {...common} />
        </>
      )}
      {icon === 'video' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" {...common} />
          <path {...common} d="m10 9 5 3-5 3V9Z" />
        </>
      )}
      {icon === 'image' && (
        <>
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" {...common} />
          <circle cx="9" cy="9" r="2" {...common} />
          <path {...common} d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </>
      )}
      {icon === 'chat' && (
        <>
          <path {...common} d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path {...common} d="M6 19H5a2 2 0 0 1-2-2" />
        </>
      )}
    </g>
  );
}

function MarkdownConversionIllustration() {
  return (
    <div className="why-conversion" aria-label="Mia turns project material into tagged Markdown notes">
      <svg className="why-preview-svg" viewBox="0 0 530 900" role="img" aria-hidden="true">
        <rect x="24" y="24" width="482" height="852" rx="22" fill="#ffffff" stroke="#d9e2ef" strokeWidth="1.5" />
        <circle cx="60" cy="62" r="7.5" fill="#ff575d" />
        <circle cx="90" cy="62" r="7.5" fill="#ffb31a" />
        <circle cx="120" cy="62" r="7.5" fill="#37d36f" />
        <text x="265" y="67" textAnchor="middle" className="why-preview-window-title">
          LOCAL PROCESSING...
        </text>
        <line x1="48" y1="98" x2="482" y2="98" stroke="#e3eaf4" strokeWidth="1.4" />

        {previewNotes.map((note, index) => {
          const y = 126 + index * 124;
          return (
            <g key={note.title}>
              <rect
                x="48"
                y={y}
                width="434"
                height="108"
                rx="15"
                fill="#ffffff"
                stroke="#e6edf6"
                strokeWidth="1.2"
              />
              <PreviewSourceIcon icon={note.icon} x={72} y={y + 25} />
              <text x="122" y={y + 34} className="why-preview-title">
                {note.title}
              </text>
              <text x="122" y={y + 58} className="why-preview-subtitle">
                {note.subtitle}
              </text>
              {note.tags.map((tag, tagIndex) => {
                const tagX = tagIndex === 0 ? 122 : 122 + note.tags[0].width + 10;
                return (
                  <g key={tag.label}>
                    <rect
                      x={tagX}
                      y={y + 72}
                      width={tag.width}
                      height="24"
                      rx="7"
                      className={tag.tone === 'purple' ? 'why-preview-tag-purple' : 'why-preview-tag-slate'}
                    />
                    <text
                      x={tagX + tag.width / 2}
                      y={y + 89}
                      textAnchor="middle"
                      className={tag.tone === 'purple' ? 'why-preview-tag-text-purple' : 'why-preview-tag-text-slate'}
                    >
                      {tag.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function WhyMianotes() {
  const [isDocsReviewOpen, setIsDocsReviewOpen] = useState(false);

  return (
    <section id="why" className="py-[86px] bg-white bg-slate-50 border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="why-mianotes-layout">
          <div className="why-mianotes-copy">
            <h2 className="flex items-start gap-3 text-4xl font-bold text-slate-900 mb-4 tracking-tight md:items-center">
              <LogoMark className="h-[48px] w-[48px] shrink-0" />
              <span>Why Mianotes exists</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>Most project knowledge is a mess. You start with a document, then the work spreads across folders, apps, recordings, chat, email, links, PDFs, spreadsheets, screenshots, and LLM messages.</p>

              <p>Now multiply that by every project, every team, and every different way of working.</p>

              <p>Important context gets buried. Everyone has their own research, notes, findings, and files sitting on their own machine or locked inside different cloud apps. So the work becomes less about using knowledge and more about moving it around. People spend hours asking for files, forwarding links, copying data between tools, re-explaining decisions, and giving AI agents the same context again and again.</p>

              <p>That is the real problem Mianotes solves.</p>

              <p>
                It gives every project its own local knowledge hub, starting from a normal folder. Your team can collect information, process documents, organise notes, review changes, and publish selected knowledge when it is ready to share.
              </p>

              <p>Your agents can use the same context through the API and MCP server, so they are not guessing from incomplete prompts or disconnected files.{' '}
                <a
                  href="#docs-review-demo"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsDocsReviewOpen(true);
                  }}
                  className="why-inline-link">
                  They work from the knowledge your project has already collected.
                </a>{' '}
              </p>
              <p>And because Mianotes runs locally, you can process documents on your own machine, use local AI models when privacy or cost matters, and stay in control of the files that matter most.</p>
            </div>
          </div>

          <MarkdownConversionIllustration />
        </div>
      </div>
      <CodexResponseModal
        isOpen={isDocsReviewOpen}
        onClose={() => setIsDocsReviewOpen(false)}
        prompt={docsReviewDemo.prompt}
        duration={docsReviewDemo.duration}
        intro={docsReviewDemo.intro}
        items={docsReviewDemo.items}
        ariaLabel="Claude/Codex reviewing Mianotes docs" />
    </section>);

}
