import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../theme';

export interface PaletteCommand {
  label: string;
  action: () => void;
  shortcut?: string;
}

export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  const openPalette = useCallback(() => setIsOpen(true), []);
  const closePalette = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  const commands: PaletteCommand[] = useMemo(
    () => [
      { label: 'Go Home', action: () => navigate('/') },
      { label: 'Go Projects', action: () => navigate('/projects') },
      { label: 'Go About', action: () => navigate('/about') },
      { label: 'Go Lab', action: () => navigate('/lab') },
      { label: 'Go Notes', action: () => navigate('/notes') },
      { label: 'Go Contact', action: () => navigate('/contact') },
      { label: 'Toggle theme', action: toggleTheme },
      {
        label: 'Open GitHub',
        action: () => {
          window.open('https://github.com/LeNguyenHoaiAn16092004', '_blank', 'noopener');
        },
      },
    ],
    [navigate, toggleTheme],
  );

  const filteredCommands = query
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

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
