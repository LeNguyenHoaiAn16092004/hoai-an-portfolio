import type { Experiment } from './types';

export const experiments: Experiment[] = [
   {
      slug: 'architecture-experiment',
      title: 'Architecture Experiment',
      status: 'active',
      date: '2024',
      objective: 'Explore new architectural patterns.',
      description: 'Testing modular monolith patterns for backend services.',
      category: 'architecture',
      technologies: ['System Design', 'Backend'],
   },
   {
      slug: 'api-design-exploration',
      title: 'API Design Exploration',
      status: 'wip',
      date: '2024',
      objective: 'Investigate REST vs GraphQL approaches.',
      description: 'Comparing API design paradigms for the next project.',
      category: 'api',
      technologies: ['REST API', 'GraphQL'],
   },
   {
      slug: 'visual-study',
      title: 'Visual Study',
      status: 'active',
      date: '2024',
      objective: 'Editorial visual experiments.',
      description: 'Exploring typographic and compositional techniques.',
      category: 'animation',
      technologies: ['CSS', 'Typography'],
   },
];
