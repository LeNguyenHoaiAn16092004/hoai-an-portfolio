/**
 * projects.ts — Project data
 *
 * Source of truth: docs/CONTENT.md
 *
 * All [PLACEHOLDER] fields must be replaced with verified information.
 * Do not invent project names, metrics, or links.
 */

import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'project-01',
    title: '[PLACEHOLDER — project name]',
    year: 2024,
    category: 'backend',
    shortDescription: '[PLACEHOLDER — short description]',
    description: '[PLACEHOLDER — full description]',
    role: '[PLACEHOLDER — role]',
    technologies: [],
    featured: true,
    status: 'completed',
    problem: '[PLACEHOLDER — problem statement]',
    solution: '[PLACEHOLDER — solution description]',
    architecture: '[PLACEHOLDER — architecture description]',
    challenges: [],
    decisions: [],
    results: [],
    github: undefined,
    demo: undefined,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
