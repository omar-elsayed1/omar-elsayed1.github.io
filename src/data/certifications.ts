import type { Certification, TrainingProgram } from '../types'

export const certifications: Certification[] = [
  {
    name: 'CS50P — Introduction to Programming with Python',
    provider: 'Harvard University / edX',
    date: 'December 2025',
    focus: 'My first major certificate — it built my Python foundation.',
  },
  {
    name: 'Power BI Specialist — Certificate of Achievement',
    provider: 'DEPI (Digital Egypt Pioneers Initiative)',
    date: 'January 2026',
    focus: 'Power BI / Data Analysis',
  },
  {
    name: 'Python Basics',
    provider: 'Mahara Tech',
    date: 'January 2026',
  },
  {
    name: 'Introduction to SQL',
    provider: 'Simplilearn',
    date: '',
    focus: 'SQL / MySQL fundamentals',
  },
  {
    name: 'Excel',
    provider: 'Simplilearn',
    date: '',
    focus: 'Excel and data analysis',
  },
  {
    name: 'Practical Machine Learning for Data Scientists',
    provider: 'Mahara Tech',
    date: '',
  },
  {
    name: 'Machine Learning Specialization (in progress)',
    provider: 'Coursera / DeepLearning.AI (Andrew Ng)',
    date: '',
    focus: 'Completed the first course, currently in the second.',
  },
  {
    name: 'Data Science Committee — Certificate',
    provider: 'IEEE Kafr Elsheikh Student Branch',
    date: '2025–2026 season',
    focus: 'Pandas, NumPy, Data Science',
  },
]

export const trainingPrograms: TrainingProgram[] = [
  {
    program: 'DEPI',
    label: 'Professional Training / Data Analysis Program',
    period: '2025 – 2026',
    summary:
      'Completed the Power BI / Data Analysis track through the Digital Egypt Pioneers Initiative — a structured, cohort-based professional training program, not traditional employment.',
    people: [
      { role: 'Technical Trainer', name: 'Eng. Hossam El Din Mohamed' },
      { role: 'Soft Skills Coach', name: 'Abdallah Safi' },
      { role: 'Freelancing Coach', name: 'Eng. Youssef Abada' },
    ],
    focus: ['Power BI', 'Data Analysis', 'Freelancing fundamentals'],
  },
  {
    program: 'IEEE Kafr Elsheikh Student Branch',
    label: 'Data Science Committee Member',
    period: '2025 – 2026',
    summary:
      'Member of the Data Science Committee, working on data-focused activities alongside coursework — a student-branch role, not full-time employment.',
    focus: ['Data Science', 'Python', 'Pandas', 'NumPy', 'Data Analysis'],
  },
]
