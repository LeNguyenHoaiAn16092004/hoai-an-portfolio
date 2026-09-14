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
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/:slug" element={<NotesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
