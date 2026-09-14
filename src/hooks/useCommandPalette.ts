import { useState, useEffect, useCallback } from 'react';

interface Command {
   label: string;
   action: () => void;
   shortcut?: string;
}

export function useCommandPalette() {
   const [isOpen, setIsOpen] = useState(false);
   const [query, setQuery] = useState('');

   const commands: Command[] = [
      { label: 'Go Home', action: () => window.location.href = '/' },
      { label: 'Go Projects', action: () => window.location.href = '/projects' },
      { label: 'Go About', action: () => window.location.href = '/about' },
      { label: 'Go Lab', action: () => window.location.href = '/lab' },
      { label: 'Go Notes', action: () => window.location.href = '/notes' },
      { label: 'Go Contact', action: () => window.location.href = '/contact' },
      { label: 'Toggle theme', action: () => {
         const html = document.documentElement;
         const current = html.getAttribute('data-theme');
         html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
         localStorage.setItem('hoai-an-portfolio:theme', current === 'dark' ? 'light' : 'dark');
      }},
      { label: 'Open GitHub', action: () => window.open('https://github.com/LeNguyenHoaiAn16092004', '_blank') },
      { label: 'Open LinkedIn', action: () => window.open('https://linkedin.com', '_blank') },
   ];

   const filteredCommands = query
      ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
      : commands;

   const openPalette = useCallback(() => setIsOpen(true), []);
   const closePalette = useCallback(() => { setIsOpen(false); setQuery(''); }, []);

   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            setIsOpen((prev) => !prev);
         }
         if (e.key === 'Escape') {
            closePalette();
         }
      };
      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
   }, [closePalette]);

   return { isOpen, query, setQuery, filteredCommands, openPalette, closePalette };
}
