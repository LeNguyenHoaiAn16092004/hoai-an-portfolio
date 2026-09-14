import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './theme';
import { Layout } from './components/Layout';
import { CommandPalette } from './components/CommandPalette';
import { lazyLoad } from './hooks';

const HomePage = lazyLoad(() => import('./pages/HomePage'));
const ProjectsPage = lazyLoad(() => import('./pages/ProjectsPage'));
const AboutPage = lazyLoad(() => import('./pages/AboutPage'));
const LabPage = lazyLoad(() => import('./pages/LabPage'));
const NotesPage = lazyLoad(() => import('./pages/NotesPage'));
const ContactPage = lazyLoad(() => import('./pages/ContactPage'));
const NotFoundPage = lazyLoad(() => import('./pages/NotFoundPage'));

export function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <CommandPalette />
            <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)', zIndex: 9999 }}>
               Skip to content
            </a>
            <Routes>
               <Route path="/" element={<Layout><HomePage /></Layout>} />
               <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
               <Route path="/projects/:slug" element={<Layout><ProjectsPage /></Layout>} />
               <Route path="/about" element={<Layout><AboutPage /></Layout>} />
               <Route path="/lab" element={<Layout><LabPage /></Layout>} />
               <Route path="/notes" element={<Layout><NotesPage /></Layout>} />
               <Route path="/notes/:slug" element={<Layout><NotesPage /></Layout>} />
               <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
               <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   );
}
