import React from 'react';
import { assetPath } from '../assets';
export function Overview() {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            The whole story in one picture
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how Mianotes transforms scattered project knowledge into a
            structured, local knowledge base for humans and agents.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-slate-50 p-2 sm:p-3">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 pointer-events-none"></div>
          <video
            src={assetPath('video/example.mp4')}
            controls
            playsInline
            preload="metadata"
            className="relative z-10 block w-full rounded-xl border border-slate-100 bg-slate-950 shadow-sm" />
          
        </div>
      </div>
    </section>);

}
