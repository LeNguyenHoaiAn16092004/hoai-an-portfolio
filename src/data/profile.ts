/**
 * profile.ts — Personal profile data
 *
 * Source of truth: docs/CONTENT.md + user-verified brief.
 *
 * Only verified facts are recorded here. Unverified links stay undefined and
 * the UI hides those rows — nothing is invented. The GitHub URL below matches
 * the repository remote configured by the user in this environment.
 */

import type { Profile } from './types';

export const profile: Profile = {
  name: 'Lê Nguyễn Hoài An',
  role: 'Backend / Software Developer',
  location: 'Ho Chi Minh City, Vietnam',

  shortIntroduction: 'Backend-focused developer building with C# and .NET.',

  longIntroduction:
    'I work with C# and the .NET stack — ASP.NET Core, Entity Framework, SQL Server — and care about how data moves through a system. I build desktop and mobile software in small teams, and I study backend engineering, system design, and databases.',

  // Education institution is unverified — renderers must skip empty fields.
  education: [
    {
      institution: '',
      degree: 'IT',
      period: '2026',
    },
  ],

  gpa: '3.47',

  certifications: [
    { name: 'TOEIC Listening & Reading', detail: '830' },
    { name: 'TOEIC Speaking', detail: '120' },
    { name: 'TOEIC Writing', detail: '150' },
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
    email: undefined,
    github: 'https://github.com/LeNguyenHoaiAn16092004',
    linkedin: undefined,
    cv: undefined,
  },
};
