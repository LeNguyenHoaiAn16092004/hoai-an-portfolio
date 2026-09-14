/**
 * types.ts — Shared TypeScript interfaces for the data layer
 *
 * These types map to the project data model in docs/SPECIFICATION.md
 * and content structure in docs/CONTENT.md.
 */

// ─── Project ─────────────────────────────────────────────────────────────────

export type ProjectStatus = 'active' | 'completed' | 'archived' | 'wip';
export type ProjectCategory =
  | 'backend'
  | 'fullstack'
  | 'frontend'
  | 'cli'
  | 'library'
  | 'experiment'
  | 'other';

export interface Project {
  slug: string;
  title: string;
  /** Year is optional — omit when not verified rather than inventing one. */
  year?: number;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string[];
  decisions?: string[];
  results?: string[];
  github?: string;
  demo?: string;
  status: ProjectStatus;
}

// ─── Lab Experiment ───────────────────────────────────────────────────────────

export type ExperimentStatus = 'active' | 'paused' | 'abandoned' | 'wip';
export type ExperimentCategory =
  | 'architecture'
  | 'api'
  | 'ui'
  | 'animation'
  | 'data'
  | 'prototype'
  | 'other';

export interface Experiment {
  slug: string;
  title: string;
  status: ExperimentStatus;
  date: string; // ISO date string
  objective: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  source?: string;
  category: ExperimentCategory;
}

// ─── Note / Article ───────────────────────────────────────────────────────────

export type NoteCategory =
  | 'backend'
  | 'system-design'
  | 'database'
  | 'frontend'
  | 'learning'
  | 'engineering-lessons'
  | 'other';

export interface Note {
  slug: string;
  title: string;
  date: string; // ISO date string
  category: NoteCategory;
  tags: string[];
  summary: string;
  /** Markdown content — loaded lazily in the detail page */
  content?: string;
  readingTime?: number; // minutes
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  shortIntroduction: string;
  longIntroduction: string;
  education: Education[];
  skills: {
    languages: string[];
    backend: string[];
    frontend: string[];
    other: string[];
  };
  technicalInterests: string[];
  links: {
    email?: string;
    github?: string;
    linkedin?: string;
    cv?: string;
  };
}
