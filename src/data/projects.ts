/**
 * projects.ts — Project data
 *
 * Source of truth: docs/CONTENT.md + user-verified project briefs.
 *
 * Only verified facts are recorded here. Fields without verified data are
 * left empty/undefined and the UI hides those sections — nothing is invented.
 */

import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'cafe-management-system',
    title: 'Café Management System',
    // Year not verified — omitted intentionally.
    category: 'fullstack',
    shortDescription:
      'Desktop system for café table and order management, billing, and reports.',
    description:
      'A desktop management system for café operations — tables, orders, menu, billing, and reports — built with C# and WinForms on SQL Server.',
    role: 'Developer — team of 4',
    technologies: ['C#', 'WinForms', 'SQL Server'],
    featured: true,
    status: 'completed',
    problem:
      'Cafés tracking tables, orders, and bills on paper or spreadsheets lose time and make mistakes during busy hours.',
    solution:
      'A WinForms desktop application backed by SQL Server: table and order tracking, menu management, billing, reports, and role-based login for staff.',
    architecture:
      'A desktop client over a SQL Server database, with data access through SQL queries and stored procedures.',
    challenges: [],
    decisions: [
      'Stored procedures for billing and report queries.',
      'Role-based login to separate staff permissions.',
    ],
    results: [],
    github: undefined,
    demo: undefined,
  },
  {
    slug: 'group-expense-app',
    title: 'Group Expense Management App',
    // Year not verified — omitted intentionally.
    category: 'fullstack',
    shortDescription: 'Mobile app for splitting group expenses with offline storage and sync.',
    description:
      'A mobile app for managing shared group expenses — splitting, groups, and reports — with offline storage and cloud synchronization.',
    role: 'Developer — team of 4',
    technologies: ['Flutter', 'Dart', 'Firebase Authentication', 'Firestore', 'SQLite'],
    featured: true,
    status: 'completed',
    problem:
      'Splitting shared costs across a group — trips, meals, shared housing — gets messy without a shared record.',
    solution:
      'A Flutter app with group management and expense splitting, Firebase Authentication for sign-in, Firestore for shared state and synchronization, and SQLite for offline storage.',
    architecture:
      'A Flutter client using SQLite as the on-device store, Firestore as the shared cloud store with synchronization, and Firebase Authentication for sign-in.',
    challenges: [],
    decisions: [
      'SQLite for offline-first expense storage on device.',
      'Firestore for shared state and synchronization across devices.',
      'Firebase Authentication for sign-in.',
    ],
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
