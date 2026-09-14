/**
 * data/index.ts — Public API for data module
 */

export type { Project, Experiment, Note, Profile, Education, ProjectStatus, ProjectCategory, ExperimentStatus, ExperimentCategory, NoteCategory } from './types';
export { profile } from './profile';
export { projects, getProjectBySlug, getFeaturedProjects } from './projects';
