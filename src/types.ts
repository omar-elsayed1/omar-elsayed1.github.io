export interface SkillGroup {
  title: string
  description: string
  skills: string[]
  level: 'core' | 'strong' | 'growing'
}

export interface ProjectCaseStudy {
  challenge: string
  data: string
  questions: string
  approach: string
  analysis: string
  solution: string
  outcome: string
  learned: string
}

export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface ProjectStat {
  label: string
  value: string
}

export interface Project {
  id: string
  index: number
  name: string
  tagline: string
  description: string
  tools: string[]
  featured: boolean
  githubUrl?: string
  theme: {
    accentClass: string
  }
  highlights: string[]
  stats: ProjectStat[]
  screenshots: ProjectScreenshot[]
  caseStudy: ProjectCaseStudy
}

export interface Service {
  title: string
  description: string
}

export interface Certification {
  name: string
  provider: string
  date: string
  focus?: string
}

export interface TrainingProgram {
  program: string
  label: string
  period: string
  summary: string
  people?: { role: string; name: string }[]
  focus: string[]
}
