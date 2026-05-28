import React from 'react';
import { LogoMark } from './Logo';

type IconName =
  | 'chat'
  | 'file'
  | 'link'
  | 'image'
  | 'audio'
  | 'terminal'
  | 'note'
  | 'folder'
  | 'align-left'
  | 'spark'
  | 'pen'
  | 'square-pen'
  | 'tag'
  | 'database'
  | 'target'
  | 'user'
  | 'bot'
  | 'search'
  | 'share'
  | 'download'
  | 'at'
  | 'home-storage';

const DIAGRAM_ACCENT = '#2563eb';

const inputItems: Array<{ label: string; icon: IconName }> = [
  { label: 'Chats', icon: 'chat' },
  { label: 'Docs & PDFs', icon: 'file' },
  { label: 'Links', icon: 'link' },
  { label: 'Screenshots', icon: 'image' },
  { label: 'Audio / Recordings', icon: 'audio' },
  { label: 'Prompts', icon: 'terminal' },
  { label: 'Notes / Text', icon: 'note' },
  { label: 'Files', icon: 'folder' }
];

const miaItems: Array<{ label: string; icon: IconName }> = [
  { label: 'Extract key information', icon: 'chat' },
  { label: 'Summarise & structure', icon: 'align-left' },
  { label: 'Clean & rewrite', icon: 'pen' },
  { label: 'Add tags & metadata', icon: 'tag' },
  { label: 'Prepare for reuse', icon: 'file' }
];

const storageItems = [
  'Markdown notes on disk',
  'Source files attached',
  'Folders & organisation',
  'Tags & metadata',
  'Searchable context',
  'Versioned & private',
  'SQLite index (mia.db)'
];

const humanItems: Array<{ label: string; icon: IconName }> = [
  { label: 'Browse & search notes', icon: 'search' },
  { label: 'Read & edit', icon: 'square-pen' },
  { label: 'Comment & tag', icon: 'chat' },
  { label: 'Share read-only links', icon: 'share' },
  { label: 'Export', icon: 'download' }
];

const agentItems: Array<{ label: string; icon: IconName }> = [
  { label: 'Create & update notes', icon: 'square-pen' },
  { label: 'Retrieve context', icon: 'file' },
  { label: 'Search knowledge', icon: 'search' },
  { label: 'Add tags & comments', icon: 'chat' }
];

const loopItems: Array<{ label: string; icon: IconName }> = [
  { label: 'Agents add or update\nnotes as work happens.', icon: 'bot' },
  { label: 'Mianotes reviews and\nimproves content.', icon: 'spark' },
  { label: 'Knowledge base grows\nricher and more useful.', icon: 'database' },
  { label: 'Better context for\nbetter decisions.', icon: 'target' }
];

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g className="how-svg-arrow">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <path d={`M ${x2 - 12} ${y2 - 10} L ${x2} ${y2} L ${x2 - 12} ${y2 + 10}`} />
    </g>
  );
}

function WrapText({ x, y, text, className }: { x: number; y: number; text: string; className?: string }) {
  return (
    <text x={x} y={y} className={className}>
      {text.split('\n').map((line, index) => (
        <tspan key={line} x={x} dy={index === 0 ? 0 : 25}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function LogoMarkSvg({ x, y, size }: { x: number; y: number; size: number }) {
  const scale = size / 512;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <defs>
        <linearGradient id="howPinkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff149d" />
          <stop offset="55%" stopColor="#d000c4" />
          <stop offset="100%" stopColor="#5f00d6" />
        </linearGradient>
        <linearGradient id="howPurpleGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e24cff" />
          <stop offset="55%" stopColor="#9a35ff" />
          <stop offset="100%" stopColor="#2500ff" />
        </linearGradient>
        <linearGradient id="howBlueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00b8f5" />
          <stop offset="55%" stopColor="#006be8" />
          <stop offset="100%" stopColor="#0026b8" />
        </linearGradient>
      </defs>
      <path d="M73 102 L181 204 L181 409 L73 307 Z" fill="url(#howPinkGradient)" />
      <path d="M197 102 L305 204 L305 409 L197 307 Z" fill="url(#howPurpleGradient)" />
      <path d="M322 102 L430 204 L430 409 L322 307 Z" fill="url(#howBlueGradient)" />
    </g>
  );
}

function Icon({
  name,
  x,
  y,
  size = 34,
  tone
}: {
  name: IconName;
  x: number;
  y: number;
  size?: number;
  tone?: 'brand' | 'blue';
}) {
  const c = DIAGRAM_ACCENT;
  const b = '#0058ff';
  const pathProps = { fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, strokeWidth: 2 };
  const scale = size / 24;
  const color = tone === 'blue' ? b : tone === 'brand' ? c : name === 'image' || name === 'link' || name === 'audio' ? b : c;

  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      color={color}
    >
      {name === 'chat' && (
        <path {...pathProps} stroke="currentColor" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      )}
      {name === 'file' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path {...pathProps} stroke="currentColor" d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path {...pathProps} stroke="currentColor" d="M10 9H8" />
          <path {...pathProps} stroke="currentColor" d="M16 13H8" />
          <path {...pathProps} stroke="currentColor" d="M16 17H8" />
        </>
      )}
      {name === 'link' && (
        <>
          <path
            {...pathProps}
            stroke="currentColor"
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          />
          <path
            {...pathProps}
            stroke="currentColor"
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          />
        </>
      )}
      {name === 'image' && (
        <>
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" {...pathProps} stroke="currentColor" />
          <circle cx="9" cy="9" r="2" {...pathProps} stroke="currentColor" />
          <path {...pathProps} stroke="currentColor" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </>
      )}
      {name === 'audio' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12 19v3" />
          <path {...pathProps} stroke="currentColor" d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <rect x="9" y="2" width="6" height="13" rx="3" {...pathProps} stroke="currentColor" />
        </>
      )}
      {name === 'terminal' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12 19h8" />
          <path {...pathProps} stroke="currentColor" d="m4 17 6-6-6-6" />
        </>
      )}
      {name === 'note' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
          <path {...pathProps} stroke="currentColor" d="M15 3v4a2 2 0 0 0 2 2h4" />
        </>
      )}
      {name === 'folder' && (
        <path
          {...pathProps}
          stroke="currentColor"
          d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        />
      )}
      {name === 'home-storage' && (
        <path
          {...pathProps}
          stroke="currentColor"
          d="M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
        />
      )}
      {name === 'align-left' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M15 12H3" />
          <path {...pathProps} stroke="currentColor" d="M17 18H3" />
          <path {...pathProps} stroke="currentColor" d="M21 6H3" />
        </>
      )}
      {name === 'spark' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          <path {...pathProps} stroke="currentColor" d="M20 3v4" />
          <path {...pathProps} stroke="currentColor" d="M22 5h-4" />
          <path {...pathProps} stroke="currentColor" d="M4 17v2" />
          <path {...pathProps} stroke="currentColor" d="M5 18H3" />
        </>
      )}
      {name === 'pen' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          <path {...pathProps} stroke="currentColor" d="m15 5 4 4" />
        </>
      )}
      {name === 'square-pen' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path {...pathProps} stroke="currentColor" d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </>
      )}
      {name === 'tag' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </>
      )}
      {name === 'database' && (
        <>
          <ellipse cx="12" cy="5" rx="9" ry="3" {...pathProps} stroke="currentColor" />
          <path {...pathProps} stroke="currentColor" d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path {...pathProps} stroke="currentColor" d="M3 12A9 3 0 0 0 21 12" />
        </>
      )}
      {name === 'target' && (
        <>
          <circle cx="12" cy="12" r="10" {...pathProps} stroke="currentColor" />
          <circle cx="12" cy="12" r="6" {...pathProps} stroke="currentColor" />
          <circle cx="12" cy="12" r="2" {...pathProps} stroke="currentColor" />
        </>
      )}
      {name === 'user' && (
        <path {...pathProps} stroke="currentColor" d="M20 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM6 34c2-7 8-11 14-11s12 4 14 11" />
      )}
      {name === 'bot' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" {...pathProps} stroke="currentColor" />
          <path {...pathProps} stroke="currentColor" d="M2 14h2" />
          <path {...pathProps} stroke="currentColor" d="M20 14h2" />
          <path {...pathProps} stroke="currentColor" d="M15 13v2" />
          <path {...pathProps} stroke="currentColor" d="M9 13v2" />
        </>
      )}
      {name === 'search' && (
        <>
          <path {...pathProps} stroke="currentColor" d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" {...pathProps} stroke="currentColor" />
        </>
      )}
      {name === 'share' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12 2v13" />
          <path {...pathProps} stroke="currentColor" d="m16 6-4-4-4 4" />
          <path {...pathProps} stroke="currentColor" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        </>
      )}
      {name === 'download' && (
        <>
          <path {...pathProps} stroke="currentColor" d="M12 15V3" />
          <path {...pathProps} stroke="currentColor" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path {...pathProps} stroke="currentColor" d="m7 10 5 5 5-5" />
        </>
      )}
      {name === 'at' && (
        <>
          <circle cx="12" cy="12" r="4" {...pathProps} stroke="currentColor" />
          <path {...pathProps} stroke="currentColor" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </>
      )}
      <rect width="24" height="24" fill="transparent" />
    </g>
  );
}

function IconBox({ x, y, icon }: { x: number; y: number; icon: IconName }) {
  return (
    <g>
      <rect x={x} y={y} width="70" height="70" rx="11" fill="#fff" stroke="#e1e7f2" strokeWidth="1.4" />
      <Icon name={icon} x={x + 18} y={y + 18} size={34} />
    </g>
  );
}

function Panel({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  return <rect x={x} y={y} width={width} height={height} rx="18" fill="#fff" stroke="#dde3ee" strokeWidth="1.5" />;
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section py-[86px] bg-white bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <h2 className="flex items-start gap-3 text-4xl font-bold text-slate-900 mb-4 tracking-tight md:items-center">
            <LogoMark className="h-[48px] w-[48px] shrink-0" />
            <span>How it works</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              Mianotes gives people and AI agents the same workspace. You might upload a PDF and ask Mia to turn it into a clean note. An agent might create a folder for a task, write implementation notes as it works, attach source material, then update the note when the work changes. Another agent can later search those notes and continue from the same context.
            </p>
            <p>
              The web app is the human control room. The REST API and MCP server are the agent interface.
            </p>
          </div>
        </div>
      </div>
      <div className="how-diagram-wrap">
        <svg className="how-diagram-svg" viewBox="0 0 2048 1060" role="img" aria-label="How Mianotes works">
          <Panel x={48} y={52} width={400} height={760} />
          <Panel x={535} y={52} width={425} height={760} />
          <Panel x={1042} y={52} width={420} height={760} />
          <Panel x={1542} y={52} width={458} height={760} />

          <text x="88" y="113" className="how-svg-title">
            1. Inputs
          </text>
          {inputItems.map(({ label, icon }, index) => {
            const y = 170 + index * 78;
            return (
              <g key={label}>
                <IconBox x={88} y={y} icon={icon} />
                <text x="190" y={y + 45} className="how-svg-item">
                  {label}
                </text>
              </g>
            );
          })}

          <Arrow x1={448} y1={420} x2={526} y2={420} />

          <text x="585" y="113" className="how-svg-title">
            2. Processing
          </text>
          <rect x="652" y="187" width="170" height="170" rx="28" fill="#fff" stroke="#dde3ee" strokeWidth="1.5" />
          <LogoMarkSvg x={682} y={218} size={110} />
          {miaItems.map(({ label, icon }, index) => {
            const y = 448 + index * 67;
            return (
              <g key={label}>
                <Icon name={icon} x={608} y={y - 22} />
                <text x="665" y={y} className="how-svg-small">
                  {label}
                </text>
              </g>
            );
          })}

          <Arrow x1={960} y1={420} x2={1034} y2={420} />

          <text x="1092" y="113" className="how-svg-title">
            3. Local storage
          </text>
          <rect x="1075" y="150" width="354" height="625" rx="14" fill="#fff" stroke="#dde3ee" strokeWidth="1.5" />
          <text x="1252" y="195" textAnchor="middle" className="how-svg-storage-title">
            Local knowledge base
          </text>
          <Icon name="home-storage" x={1207} y={250} size={90} tone="brand" />
          {storageItems.map((label, index) => {
            const y = 410 + index * 38;
            return (
              <g key={label}>
                <circle cx="1115" cy={y - 5} r="4.2" fill={DIAGRAM_ACCENT} />
                <text x="1135" y={y} className="how-svg-small">
                  {label}
                </text>
              </g>
            );
          })}
          <Icon name="file" x={1116} y={692} size={48} />
          <Icon name="folder" x={1222} y={692} size={48} />
          <Icon name="database" x={1330} y={692} size={48} />

          <Arrow x1={1462} y1={420} x2={1532} y2={420} />

          <text x="1590" y="113" className="how-svg-title">
            4. Access &amp; Use
          </text>
          <text x="1618" y="211" className="how-svg-user-title">
            For Humans (Web App)
          </text>
          {humanItems.map(({ label, icon }, index) => {
            const y = 265 + index * 43;
            return (
              <g key={label}>
                <Icon name={icon} x={1625} y={y - 25} size={30} tone="brand" />
                <text x="1680" y={y} className="how-svg-user-item">
                  {label}
                </text>
              </g>
            );
          })}

          <text x="1618" y="540" className="how-svg-user-title">
            For AI Agents (API &amp; MCP)
          </text>
          {agentItems.map(({ label, icon }, index) => {
            const y = 594 + index * 43;
            return (
              <g key={label}>
                <Icon name={icon} x={1625} y={y - 25} size={30} tone="brand" />
                <text x="1680" y={y} className="how-svg-user-item">
                  {label}
                </text>
              </g>
            );
          })}

          <path className="how-svg-loop-line" d="M125 812v95h95" />
          <path className="how-svg-loop-line" d="M1930 812v95h-95" />
          <rect x="215" y="860" width="1618" height="145" rx="16" fill="#fff" stroke="#dde3ee" strokeWidth="1.5" />
          {loopItems.map(({ label, icon }, index) => {
            const x = 285 + index * 405;
            return (
              <React.Fragment key={label}>
                <IconBox x={x} y={892} icon={icon} />
                <WrapText x={x + 100} y={923} text={label} className="how-svg-loop-text" />
                {index < loopItems.length - 1 ? <Arrow x1={x + 338} y1={927} x2={x + 395} y2={927} /> : null}
              </React.Fragment>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
