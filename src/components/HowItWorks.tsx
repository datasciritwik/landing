import React from 'react';
import { Brain, Rocket, Users } from 'lucide-react';

const steps = [
  { icon: Brain, title: "Pick an AI idea", desc: "Choose from community-suggested projects or propose your own AI innovation." },
  { icon: Rocket, title: "Build & launch a tool", desc: "Develop your AI tool over the weekend with community support." },
  { icon: Users, title: "Collaborate & improve", desc: "Share your creation and iterate with feedback from fellow builders." }
];

export function HowItWorks() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent inline-block">
          How It Works
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="step-card group">
            <step.icon className="w-12 h-12 mb-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
            <h3 className="text-xl font-bold mb-2 text-primary-100">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
            <div className="absolute -right-4 -bottom-4 text-8xl font-bold text-white/5 group-hover:text-primary-950/10 transition-colors">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}