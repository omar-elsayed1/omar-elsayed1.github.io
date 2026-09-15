import type { SkillGroup } from '../types'

// Order reflects real proficiency: Power BI -> Excel -> SQL -> Data Cleaning ->
// Data Visualization -> Python/Pandas. Edit `level` to adjust the visual weight
// given to a group ('core' gets the most visual emphasis).
export const skillGroups: SkillGroup[] = [
  {
    title: 'Business Intelligence',
    description: 'Where I spend most of my time — building dashboards clients actually use.',
    level: 'core',
    skills: [
      'Power BI',
      'DAX',
      'Power Query',
      'Power Pivot',
      'Dashboard Development',
      'KPI Dashboards',
      'Data Modeling',
    ],
  },
  {
    title: 'Spreadsheets',
    description: 'Where most raw client data starts, and where a lot of cleanup happens.',
    level: 'strong',
    skills: ['Microsoft Excel', 'Pivot Tables', 'Power Query', 'Power Pivot', 'Excel Data Analysis'],
  },
  {
    title: 'Databases',
    description: 'For pulling answers directly out of structured data.',
    level: 'strong',
    skills: ['SQL', 'MySQL', 'SQL Data Analysis', 'Querying', 'Aggregation', 'Joins'],
  },
  {
    title: 'Data Analysis',
    description: 'The thinking underneath every dashboard.',
    level: 'strong',
    skills: [
      'Data Cleaning',
      'Data Transformation',
      'Exploratory Data Analysis',
      'Statistical Analysis',
      'KPI Analysis',
      'Business Insights',
      'Data Visualization',
    ],
  },
  {
    title: 'Programming',
    description: 'For analysis that spreadsheets and BI tools alone can\u2019t handle.',
    level: 'growing',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Keras'],
  },
  {
    title: 'Other Tools',
    description: '',
    level: 'growing',
    skills: ['Git', 'GitHub', 'Microsoft Office'],
  },
]
