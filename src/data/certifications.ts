import type { Certification, TrainingProgram } from '../types'

// Exactly 8 certificates, in this exact order. Each links to its real PDF
// (public/assets/certificates/), verified against the PDF's own text content.
// "Python Basics" and the 3 individual Coursera courses (Supervised ML,
// Advanced Learning Algorithms, Unsupervised Learning) are intentionally
// excluded — no certificate PDF was provided for them.
export const certifications: Certification[] = [
  {
    id: 'depi-power-bi',
    name: 'Analyzing and Visualizing Data with Microsoft Power BI',
    provider: 'DEPI (Digital Egypt Pioneers Initiative)',
    date: 'January 2026',
    description: 'Training focused on analyzing and visualizing data using Microsoft Power BI.',
    skills: ['Data Analysis', 'Data Cleaning', 'Power BI'],
    pdfPath: '/assets/certificates/depi-power-bi.pdf',
  },
  {
    id: 'python-data-fundamentals',
    name: 'Python Data Fundamentals',
    provider: 'DataCamp',
    date: 'September 2026',
    description:
      'Practical Python skills for data analysis: pandas data manipulation and joins, Seaborn visualization, statistics in Python, and exploratory data analysis.',
    pdfPath: '/assets/certificates/python-data-fundamentals.pdf',
  },
  {
    id: 'introduction-to-sql',
    name: 'Introduction to SQL',
    provider: 'Simplilearn',
    date: 'January 2026',
    description: 'Foundational SQL concepts and MySQL.',
    skills: ['SQL', 'MySQL'],
    credentialId: '9833591',
    pdfPath: '/assets/certificates/introduction-to-sql.pdf',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    provider: 'DeepLearning.AI',
    date: 'July 2026',
    description:
      'Stanford Online & DeepLearning.AI specialization covering supervised and unsupervised learning, recommender systems, neural networks and model evaluation — built with Python, NumPy and Scikit-Learn.',
    credentialId: '8O0U01WV8OJ2',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/8O0U01WV8OJ2',
    pdfPath: '/assets/certificates/machine-learning.pdf',
  },
  {
    id: 'practical-machine-learning',
    name: 'Practical Machine Learning for Data Scientists',
    provider: 'Information Technology Institute (ITI)',
    date: 'February 2026',
    credentialId: 'GwifHDDGy2',
    pdfPath: '/assets/certificates/practical-machine-learning.pdf',
  },
  {
    id: 'cs50p',
    name: 'Introduction to Programming Using Python',
    provider: 'Harvard University',
    date: 'January 2026',
    description: 'Harvard\u2019s CS50P — nine problem sets and a final project.',
    credentialUrl: 'https://cs50.harvard.edu/certificates/54d1ef82-7bf2-4d18-83c3-6d050f21a2ed',
    pdfPath: '/assets/certificates/cs50p.pdf',
  },
  {
    id: 'ieee-data-science',
    name: 'Data Science Committee Member',
    provider: 'IEEE Kafr Elsheikh Student Branch',
    date: 'February 2026',
    description: 'Committee membership, not a technical course certificate.',
    skills: ['Data Science', 'NumPy'],
    pdfPath: '/assets/certificates/ieee-data-science.pdf',
  },
  {
    id: 'build-with-ai-masr',
    name: 'Build with AI: MASR EDITION',
    provider: 'Information Technology Institute (ITI)',
    date: 'June 2026',
    description:
      'Sessions on the AI development lifecycle — moving models from codebase to production with Generative AI, LLMs and Google Cloud, by Google for Developers and ITI.',
    pdfPath: '/assets/certificates/build-with-ai-masr.pdf',
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
