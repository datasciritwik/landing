import React from 'react';
import { Github, Twitter, Disc as Discord, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative inline-block mb-6">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent animate-glow">
            Build AI. Every Weekend.
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl -z-10 rounded-3xl"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join a community of AI builders, collaborate on AI tools, and innovate together.
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <button className="neon-button group">
            Join the Community
            <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-4">
            <a href="https://discord.gg/cqnG43rQ" className="p-3 glass rounded-full hover:glow hover:scale-110 transition-all">
              <Discord className="w-6 h-6 text-primary-400" />
            </a>
            <a href="#" className="p-3 glass rounded-full hover:glow hover:scale-110 transition-all">
              <Twitter className="w-6 h-6 text-primary-400" />
            </a>
            <a href="https://github.com/OneWeekendAI" className="p-3 glass rounded-full hover:glow hover:scale-110 transition-all">
              <Github className="w-6 h-6 text-primary-400" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}