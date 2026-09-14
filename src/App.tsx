/**
 * App.tsx — Application root
 *
 * Responsibilities:
 * - Wrap the app in ThemeProvider
 * - Configure React Router routes
 * - Provide code-split page imports (lazy) — deferred to Phase 8/12
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './theme';
import { Layout } from './components/Layout';

// Pages — direct imports for Phase 0 (code splitting deferred)
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { LabPage } from './pages/LabPage';
import { NotesPage } from './pages/NotesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
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
