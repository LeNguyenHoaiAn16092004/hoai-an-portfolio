import type { Note } from './types';

export const notes: Note[] = [
   {
      slug: 'distributed-systems',
      title: 'Understanding Distributed Systems',
      date: '2024',
      category: 'backend',
      tags: ['distributed', 'systems', 'backend'],
      summary: 'Key concepts and patterns in distributed system design.',
      readingTime: 8,
   },
   {
      slug: 'react-server-components',
      title: 'React Server Components Deep Dive',
      date: '2024',
      category: 'frontend',
      tags: ['react', 'server-components', 'frontend'],
      summary: 'Understanding the React Server Components paradigm.',
      readingTime: 12,
   },
   {
      slug: 'database-optimization',
      title: 'Database Optimization Patterns',
      date: '2024',
      category: 'database',
      tags: ['database', 'optimization', 'performance'],
      summary: 'Practical patterns for database performance tuning.',
      readingTime: 10,
   },
];
