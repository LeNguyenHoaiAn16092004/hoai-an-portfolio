import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../theme';
import { useReducedMotion } from '../responsive';

export function Navigation() {
   const { theme, toggleTheme } = useTheme();
   const reducedMotion = useReducedMotion();
   const location = useLocation();

   const isActive = (path: string) => location.pathname === path;

   return (
      <nav
         style={{
            position: 'sticky',
            top: 0,
            zIndex: 'var(--z-nav)',
            backgroundColor: 'var(--color-bg)',
            borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
         }}
      >
         <div
            className="container flex items-center justify-between"
            style={{
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

            <div
               className="flex items-center gap-1"
               style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
               }}
            >
               {[
                  { path: '/', label: 'Home' },
                  { path: '/projects', label: 'Projects' },
                  { path: '/about', label: 'About' },
                  { path: '/lab', label: 'Lab' },
                  { path: '/notes', label: 'Notes' },
                  { path: '/contact', label: 'Contact' },
               ].map(({ path, label }) => (
                  <Link
                     key={path}
                     to={path}
                     style={{
                        padding: 'var(--space-2) var(--space-3)',
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
                  transition: reducedMotion ? 'none' : 'background-color var(--duration-fast) var(--ease-out-soft)',
               }}
            >
               {theme === 'light' ? 'DARK' : 'LIGHT'}
            </button>
         </div>
      </nav>
   );
}
