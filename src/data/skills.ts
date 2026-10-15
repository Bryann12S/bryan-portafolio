// Habilidades técnicas agrupadas por categoría. Solo tecnologías usadas en proyectos reales o demos.
import type { UIKey } from '../i18n/ui';
import type { TechIconName } from './techIcons';

export interface Skill {
  name: string;
  /** Sin icono oficial se muestra uno genérico */
  icon?: TechIconName;
}

export interface SkillGroup {
  label: UIKey;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'skills.group.frontend',
    skills: [
      { name: 'Angular', icon: 'angular' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'Astro', icon: 'astro' },
    ],
  },
  {
    label: 'skills.group.backend',
    skills: [
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Express', icon: 'express' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    label: 'skills.group.databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQLite', icon: 'sqlite' },
    ],
  },
  {
    label: 'skills.group.desktop',
    skills: [{ name: 'Electron', icon: 'electron' }, { name: 'Tkinter' }],
  },
  {
    label: 'skills.group.tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
];
