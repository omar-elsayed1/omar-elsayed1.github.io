import type { SkillGroup } from '../types'

// Categories match the requested structure. `level` drives the visual weight:
// 'core' gets the most emphasis (Business Intelligence — Power BI is the
// strongest skill), 'strong' is solid working knowledge, 'growing' is
// deliberately kept smaller — Data Engineering Foundations and Machine
// Learning are future direction / secondary, not the primary service.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Business Intelligence',
    description: 'Where I spend most of my time — building dashboards clients actually use.',
    level: 'core',
    skills: ['Power BI', 'DAX', 'Power Query', 'Power Pivot', 'Excel', 'Data Visualization'],
  },
  {
    title: 'Data Analysis',
    description: 'The querying and scripting layer underneath the dashboards.',
    level: 'strong',
    skills: ['SQL', 'MySQL', 'Python', 'Pandas', 'NumPy', 'Exploratory Data Analysis', 'Statistical Analysis'],
  },
  {
    title: 'Data Engineering Foundations',
    description: 'The direction I\u2019m building toward, applied so far through project work.',
    level: 'growing',
    skills: ['ETL', 'Data Modeling', 'Star Schema', 'Data Warehousing'],
  },
  {
    title: 'Machine Learning',
    description: 'Used to extend an analysis, not a primary service on its own.',
    level: 'growing',
    skills: ['Scikit-Learn', 'Keras'],
  },
]
