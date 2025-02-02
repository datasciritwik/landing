import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-primary-300">OneWeekendAI</h3>
            <p className="text-gray-300">Building the future of AI, one weekend at a time.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-primary-300">Community</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://discord.gg/oneweekendai" className="hover:text-primary-400 transition-colors">Discord</a></li>
              <li><a href="https://twitter.com/oneweekendai" className="hover:text-primary-400 transition-colors">Twitter</a></li>
              <li><a href="https://github.com/oneweekendai" className="hover:text-primary-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center">
          <p className="text-gray-300">© {new Date().getFullYear()} OneWeekendAI. All rights reserved.</p>
          <div className="flex items-center">
            <a href="https://github.com/oneweekendai/website" className="flex items-center hover:text-primary-400 transition-colors group">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Open Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}