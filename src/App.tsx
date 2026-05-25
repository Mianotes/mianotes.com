import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Screens } from './components/Screens';
import { HowItWorks } from './components/HowItWorks';
import { MeetMia } from './components/MeetMia';
import { UseCases } from './components/UseCases';
import { CoreConcepts } from './components/CoreConcepts';
import { CodeShowcase } from './components/CodeShowcase';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Overview />
        <Screens />
        <HowItWorks />
        <MeetMia />
        <UseCases />
        <CoreConcepts />
        <CodeShowcase />
      </main>
      <Footer />
    </div>);

}