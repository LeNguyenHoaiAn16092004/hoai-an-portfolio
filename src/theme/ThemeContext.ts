/**
 * ThemeContext — Theme state management
 *
 * - Reads user's explicit theme choice from localStorage
 * - Falls back to system prefers-color-scheme
 * - Sets data-theme attribute on <html> element
 * - Persists explicit choices to localStorage
 */

import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
