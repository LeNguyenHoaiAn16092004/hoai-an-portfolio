import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../theme';
import { useReducedMotion } from '../responsive';

export function Navigation() {
   const { theme, toggleTheme } = useTheme();
   const reducedMotion = useReducedMotion();
   const location = useLocation();
   const [menuOpen, setMenuOpen] = useState(false);

   const isActive = (path: string) => location.pathname === path;

   const navLinks = [
      { path: '/', label: 'Home' },
      { path: '/projects', label: 'Projects' },
      { path: '/about', label: 'About' },
      { path: '/lab', label: 'Lab' },
      { path: '/notes', label: 'Notes' },
      { path: '/contact', label: 'Contact' },
   ];

   return (
      <nav
         style={{
            position: 'sticky',
            top: 0,
            zIndex: 'var(--z-nav)',
            backgroundColor: 'var(--color-bg)',
            borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
         }}
      >
         <div
            className="container flex items-center justify-between"
            style={{
               position: 'relative',
               paddingBlock: 'var(--space-3)',
               gap: 'var(--space-4)',
            }}
         >
            <Link
               to="/"
               style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-black)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-primary)',
                  textDecoration: 'none',
                  letterSpacing: 'var(--tracking-tight)',
               }}
            >
               HA
            </Link>

            <button
               onClick={() => setMenuOpen(!menuOpen)}
               aria-label="Toggle menu"
               aria-expanded={menuOpen}
               style={{
                  display: 'none',
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-sm)',
                  padding: 'var(--space-2) var(--space-3)',
                  border: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-base)',
                  background: 'var(--color-bg-subtle)',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  minHeight: '44px',
                  minWidth: '44px',
               }}
               className="nav-menu-toggle"
            >
               {menuOpen ? '✕' : '☰'}
            </button>

            <div
               className="nav-links"
               style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  display: 'flex',
                  gap: 'var(--space-1)',
                  alignItems: 'center',
               }}
            >
               {navLinks.map(({ path, label }) => (
                  <Link
                     key={path}
                     to={path}
                     onClick={() => setMenuOpen(false)}
                     style={{
                        padding: 'var(--space-3) var(--space-3)',
                        minHeight: '44px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: isActive(path) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        borderBottom: isActive(path)
                           ? 'var(--border-width-wide) solid var(--color-accent)'
                           : '2px solid transparent',
                        transition: reducedMotion ? 'none' : 'color var(--duration-fast) var(--ease-out-soft)',
                     }}
                  >
                     {label}
                  </Link>
               ))}
            </div>

            <button
               onClick={toggleTheme}
               aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
               style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-xs)',
                  padding: 'var(--space-2) var(--space-3)',
                  border: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-base)',
                  background: 'var(--color-bg-subtle)',
                  color: 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                  minHeight: '44px',
                  transition: reducedMotion ? 'none' : 'background-color var(--duration-fast) var(--ease-out-soft)',
               }}
            >
               {theme === 'light' ? 'DARK' : 'LIGHT'}
            </button>
         </div>
         {menuOpen && (
            <div
               style={{
                  display: 'block',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'var(--color-bg)',
                  borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  padding: 'var(--space-3)',
                  zIndex: 'var(--z-overlay)',
               }}
               className="nav-mobile-overlay"
            >
               {navLinks.map(({ path, label }) => (
                  <Link
                     key={path}
                     to={path}
                     onClick={() => setMenuOpen(false)}
                     style={{
                        display: 'block',
                        padding: 'var(--space-3)',
                        minHeight: '44px',
                        color: isActive(path) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-technical)',
                        fontSize: 'var(--text-sm)',
                        letterSpacing: 'var(--tracking-wider)',
                        textTransform: 'uppercase',
                        borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                     }}
                  >
                     {label}
                  </Link>
               ))}
            </div>
         )}
      </nav>
   );
}
