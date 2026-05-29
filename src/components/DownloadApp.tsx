import React, { useState } from 'react';
import { Check, Clipboard, Download, Terminal } from 'lucide-react';

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
  const [copied, setCopied] = useState(false);
  const installCommand =
    '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Mianotes/install/HEAD/install.sh)"';

  const packageDownloads = [
    {
      label: 'macOS',
      description: 'Mianotes v0.2.0 (macOS)',
      recommendation: 'Recommended for MacBook and Mac mini',
      file: 'mianotes.pkg',
      href: 'https://github.com/Mianotes/install/releases/download/v0.2.0/mianotes.pkg',
      icon: <AppleIcon className="h-6 w-6" />
    },
    {
      label: 'Ubuntu',
      description: 'Mianotes v0.2.0 (Ubuntu)',
      recommendation: 'Recommended for Linux servers',
      file: 'mianotes.deb',
      href: 'https://github.com/Mianotes/install/releases/download/v0.2.0/mianotes.deb',
      icon: <UbuntuIcon className="h-6 w-6" />
    }
  ];

  const copyCommand = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="docs" className="py-[86px] bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Download Mianotes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Download the native package for your operating system, or install
            from the command line.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full lg:w-4/5">
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

          <div className="mt-10 mb-5 max-w-3xl">
            <h4 className="text-lg font-bold text-slate-900">
              Install from source
            </h4>
            <p className="mt-2 text-base leading-relaxed text-slate-600">
              Use one command to clone the web service and dashboard, install everything in a local environment, build the app, and start Mianotes automatically.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1117] shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#161b22] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Terminal className="h-3.5 w-3.5" />
                  CLI
                </div>
              </div>
              <button
                type="button"
                onClick={copyCommand}
                className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-slate-700 px-3 text-xs font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-300" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <pre className="overflow-x-auto px-5 py-6 sm:px-6">
              <code className="whitespace-nowrap font-mono text-sm text-slate-100 sm:text-base">
                {installCommand}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
