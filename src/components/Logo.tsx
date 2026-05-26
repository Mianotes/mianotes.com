import React from 'react';

type LogoProps = {
  markClassName?: string;
  textClassName?: string;
};

export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="miaLogoPinkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff149d" />
          <stop offset="55%" stopColor="#d000c4" />
          <stop offset="100%" stopColor="#5f00d6" />
        </linearGradient>

        <linearGradient id="miaLogoPurpleGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e24cff" />
          <stop offset="55%" stopColor="#9a35ff" />
          <stop offset="100%" stopColor="#2500ff" />
        </linearGradient>

        <linearGradient id="miaLogoBlueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00b8f5" />
          <stop offset="55%" stopColor="#006be8" />
          <stop offset="100%" stopColor="#0026b8" />
        </linearGradient>
      </defs>

      <path d="M73 102 L181 204 L181 409 L73 307 Z" fill="url(#miaLogoPinkGradient)" />
      <path d="M197 102 L305 204 L305 409 L197 307 Z" fill="url(#miaLogoPurpleGradient)" />
      <path d="M322 102 L430 204 L430 409 L322 307 Z" fill="url(#miaLogoBlueGradient)" />
    </svg>
  );
}

export function Logo({
  markClassName = 'h-9 w-9',
  textClassName = 'text-2xl'
}: LogoProps) {
  return (
    <div className="flex items-center gap-1" aria-label="mianotes">
      <LogoMark className={markClassName} />
      <span className={`${textClassName} tracking-tight text-slate-950`} style={{ fontWeight: 650 }}>
        mianotes
      </span>
    </div>
  );
}
