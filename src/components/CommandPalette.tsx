import { useCommandPalette } from '../hooks/useCommandPalette';

export function CommandPalette() {
const { isOpen, query, setQuery, filteredCommands, closePalette } = useCommandPalette();

   if (!isOpen) return null;

   return (
      <div
         style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '15vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
         }}
         onClick={closePalette}
         role="dialog"
         aria-label="Command palette"
      >
         <div
            style={{
               width: '100%',
               maxWidth: '400px',
               backgroundColor: 'var(--color-bg)',
               border: 'var(--border-width-thin) solid var(--color-border)',
               borderRadius: 'var(--radius-lg)',
               padding: 'var(--space-4)',
               boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
         >
            <input
               type="text"
               placeholder="Type a command..."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               autoFocus
               style={{
                  width: '100%',
                  padding: 'var(--space-3)',
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-base)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-base)',
                  color: 'var(--color-text-primary)',
                  outline: 'none',
                  boxSizing: 'border-box',
               }}
            />
            <div style={{ marginTop: 'var(--space-4)' }}>
               {filteredCommands.map((cmd, i) => (
                  <button
                     key={i}
                     onClick={() => { cmd.action(); closePalette(); }}
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: 'var(--space-3)',
                        fontFamily: 'var(--font-technical)',
                        fontSize: 'var(--text-sm)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                        minHeight: '44px',
                        alignItems: 'center',
                     }}
                  >
                     <span>{cmd.label}</span>
                     {cmd.shortcut && (
                        <span style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-xs)' }}>
                           {cmd.shortcut}
                        </span>
                     )}
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
}
