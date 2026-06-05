import React, { useState } from 'react';
import { Download, Info, Terminal, X } from 'lucide-react';
import { packageCommands } from '../data/packageCommands';

const VERSION = "0.3.4";
const DOCKER_COMMANDS = [
  '$ curl -fsSL https://raw.githubusercontent.com/Mianotes/install/main/docker-compose.yml -o docker-compose.yml',
  '$ docker compose up -d'
];

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function UbuntuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm3.279 17.68c-.766.441-1.029 1.422-.586 2.189.441.765 1.422 1.028 2.188.584.766-.441 1.029-1.422.585-2.189-.441-.765-1.421-1.028-2.187-.584zm-3.279-1c-.705 0-1.373-.157-1.971-.435L8.916 18.24c.93.459 1.978.721 3.084.721.646 0 1.268-.091 1.86-.256.104-.643.485-1.234 1.095-1.587.609-.351 1.313-.386 1.92-.156 1.186-1.163 1.957-2.749 2.07-4.515l-2.285-.033c-.21 2.391-2.215 4.266-4.66 4.266zM7.32 12c0-1.583.787-2.981 1.99-3.83L8.14 6.209c-1.404.93-2.445 2.369-2.881 4.035.506.404.83 1.034.83 1.74 0 .704-.324 1.319-.83 1.739.436 1.665 1.477 3.104 2.881 4.034l1.17-1.965C8.107 14.97 7.32 13.574 7.32 12zm-3.48-1.602c-.885 0-1.602.717-1.602 1.602s.717 1.602 1.602 1.602S5.441 12.885 5.441 12s-.716-1.602-1.601-1.602zM12 7.32c2.445 0 4.45 1.875 4.66 4.265l2.285-.034c-.113-1.765-.885-3.35-2.07-4.516-.609.232-1.313.194-1.92-.154-.609-.352-.99-.945-1.095-1.591-.594-.16-1.214-.25-1.86-.25-1.11 0-2.155.26-3.084.72l1.113 1.995c.6-.279 1.268-.435 1.971-.435zm3.279-1.001c.765.442 1.746.181 2.189-.585.441-.765.181-1.746-.588-2.19-.765-.44-1.746-.179-2.189.589-.441.764-.18 1.744.588 2.186z" />
    </svg>
  );
}

export function DownloadApp() {
  const [activeCommand, setActiveCommand] = useState<string | null>(null);

  const packageDownloads = [
    {
      label: 'macOS',
      description: `Mianotes v${VERSION} (macOS)`,
      recommendation: 'Recommended for MacBook and Mac mini',
      file: 'mianotes.pkg',
      href: `https://github.com/Mianotes/install/releases/download/v${VERSION}/mianotes.pkg`,
      icon: <AppleIcon className="h-6 w-6" />
    },
    {
      label: 'Ubuntu',
      description: `Mianotes v${VERSION} (Ubuntu)`,
      recommendation: 'Recommended for Ubuntu, Debian, and Armbian',
      file: 'mianotes.deb',
      href: `https://github.com/Mianotes/install/releases/download/v${VERSION}/mianotes.deb`,
      icon: <UbuntuIcon className="h-6 w-6" />
    }
  ];

  const selectedCommand = packageCommands.find(
    (command) => command.command === activeCommand
  );

  return (
    <section id="download" className="py-[86px] bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Download Mianotes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Download the native package for your operating system.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full lg:w-4/5">
          <div className="pb-16">
            <div className="mb-8 border-b border-slate-200 pb-5">
              <h4 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Install from package
              </h4>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {packageDownloads.map((download) => (
                <a
                  key={download.label}
                  href={download.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-purple/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors group-hover:text-brand-purple">
                      {download.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-mono font-black text-slate-500">
                        {download.label}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {download.description}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {download.recommendation}
                      </p>
                      <div className="mt-5 flex items-center justify-between rounded-xl bg-white px-4 py-3 font-mono text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                        {download.file}
                        <Download className="h-4 w-4 text-slate-400 transition-colors group-hover:text-brand-purple" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm font-medium text-slate-600">
                When the installation finishes, open{' '}
                <a
                  href="http://localhost:8201"
                  className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple"
                >
                  http://localhost:8201
                </a>{' '}
                in your browser. You can use Mianotes there, or install it as a <a href="https://support.google.com/chrome/answer/9658361" className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple" target="_blank">Chrome app</a>.
              </p>
              <p className="mt-8 text-sm font-medium text-slate-500">
                You can also manage Mianotes from your Terminal:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
                {packageCommands.map((command) => (
                  <button
                    key={command.command}
                    type="button"
                    onClick={() => setActiveCommand(command.command)}
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple"
                  >
                    <Terminal className="h-3.5 w-3.5 text-brand-purple" />
                    {command.command}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 pt-6">
            <div className="mb-6 border-b border-slate-200 pb-5">
              <h4 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Install with Docker
              </h4>
            </div>
            <p className="max-w-4xl text-base leading-relaxed text-slate-600">
              Docker is useful when you want Mianotes to run in a self-contained environment on a laptop,
              workstation, or server. The Mianotes container runs the web service and the dashboard together.
              You can also install multiple Docker containers and assign each of them their own custom domain
              name, such as <code className="font-mono text-[0.9em] font-semibold text-slate-700">devs.local</code>{' '}
              and <code className="font-mono text-[0.9em] font-semibold text-slate-700">qa.local</code>.
            </p>
            <div className="mt-5 flex gap-3 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm leading-relaxed text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <p>
                Install Docker Desktop, Docker Engine, or another Docker-compatible runtime that supports Docker Compose.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-500">
                  <Terminal className="h-3.5 w-3.5 text-brand-purple" />
                  Docker
                </div>
              </div>
              <pre className="overflow-auto px-5 py-5 text-left sm:px-6">
                <code className="whitespace-pre font-mono text-sm leading-relaxed text-slate-800">
                  {DOCKER_COMMANDS.join('\n')}
                </code>
              </pre>
            </div>
          </div>

          <div
            className="flex flex-col items-center text-center"
            style={{ paddingTop: '51px' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 text-slate-400"
              aria-hidden="true"
            >
              <path
                d="M9 10.5L11 12.5L15.5 8M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href="https://tally.so/r/xXvQbk"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple"
            >
              Tell us what to improve
            </a>
          </div>
        </div>
      </div>

      {selectedCommand ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="package-command-title"
          onClick={() => setActiveCommand(null)}
        >
          <div
            className="w-full max-w-3xl rounded-[14px] bg-white p-5 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4
                  id="package-command-title"
                  className="flex items-center gap-3 text-xl font-bold text-slate-900"
                >
                  <Terminal className="h-5 w-5 text-brand-purple" />
                  {selectedCommand.command}
                </h4>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {selectedCommand.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCommand(null)}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close command output"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-[16px] border border-slate-800 bg-[#0d1117] shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 bg-[#161b22] px-4 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  CLI
                </div>
              </div>
              <pre className="max-h-[420px] overflow-auto px-5 py-5 text-left sm:px-6">
                <code className="whitespace-pre font-mono text-sm leading-relaxed text-slate-100">
                  {selectedCommand.output}
                </code>
              </pre>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
