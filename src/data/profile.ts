/**
 * profile.ts — Personal profile data
 *
 * Source of truth: docs/CONTENT.md
 *
 * Content marked [PLACEHOLDER] must be replaced with verified information
 * before deployment. Do not fabricate biographical facts, metrics, or links.
 */

import type { Profile } from './types';

export const profile: Profile = {
  name: 'Hoài An',
  role: 'Backend / Software Developer',
  location: 'Vietnam',

  // [PLACEHOLDER] — Write verified personal introduction
  shortIntroduction: '[PLACEHOLDER — write verified personal introduction]',

  // [PLACEHOLDER] — Write verified longer bio
  longIntroduction: '[PLACEHOLDER — write verified longer bio]',

  education: [
    {
      // [PLACEHOLDER] — Verify institution, degree, and period
      institution: '[PLACEHOLDER — institution]',
      degree: '[PLACEHOLDER — degree / major]',
      period: '[PLACEHOLDER — period]',
    },
  ],

  skills: {
    languages: ['C', 'C++', 'C#', 'JavaScript', 'TypeScript'],
    backend: ['.NET / ASP.NET Core', 'REST API', 'Entity Framework', 'SQL Server'],
    frontend: ['React', 'Vite'],
    other: ['Python', 'Flutter', 'Git', 'Linux', 'System Design'],
  },

  technicalInterests: [
    'Backend Engineering',
    'System Design',
    'Databases',
    'Distributed Systems',
    'Automation',
    'Data Processing',
  ],

  links: {
    // [PLACEHOLDER] — Verify all links before deployment
    email: undefined,
    github: undefined,
    linkedin: undefined,
    cv: undefined,
  },
};
