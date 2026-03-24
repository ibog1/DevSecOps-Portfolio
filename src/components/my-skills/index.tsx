import React from 'react';
import styles from './my-skills.module.css';

type Skill = {
  title: string;
  icon: string;
  details: string[];
};

const skills: Skill[] = [
  {
    title: 'HTML',
    icon: '/img/skill-card/html-icon.svg',
    details: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    title: 'CSS',
    icon: '/img/skill-card/css-icon.svg',
    details: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    title: 'Docusaurus',
    icon: '/img/skill-card/docusaurus-icon.svg',
    details: [
      'Search functionality',
      'Static website and customization',
      'Tags, categories, and RSS feeds',
      'Translation',
    ],
  },
  {
    title: 'Python',
    icon: '/img/skill-card/python-icon.svg',
    details: [
      'Build APIs',
      'Spam filtering, recommendation systems',
      'Automate software testing',
      'Using libraries like Tkinter, PyQt, or Kivy',
    ],
  },
  {
    title: 'Shell scripting',
    icon: '/img/skill-card/shell-icon.svg',
    details: [
      'Adding new users and setting their permissions',
      'Performing calculations or running statistical analysis on data',
      'Conditional statements, loops, functions',
    ],
  },
  {
    title: 'YAML',
    icon: '/img/skill-card/yaml-icon.svg',
    details: [
      'A Kubernetes deployment',
      'Store settings like database connections',
      'Environment-specific variables',
      'Complex data structures represent lists and maps',
    ],
  },
  {
    title: 'Container',
    icon: '/img/skill-card/docker-icon.svg',
    details: [
      'CI/CD pipelines',
      'Automate building, testing, deploying applications',
      'Build microservices-based applications',
    ],
  },
  {
    title: 'CI/CD',
    icon: '/img/skill-card/cicd-icon.svg',
    details: [
      'Automated builds and tests',
      'Pre-built actions for common tasks',
      'Push, pull request, or schedule',
      'Automated deployments',
    ],
  },
  {
    title: 'IT Security',
    icon: '/img/skill-card/it-security-icon.svg',
    details: [
      'Simulate attacks and identify vulnerabilities',
      'Setting up multi-factor authentication',
      'Login security',
      'Implement authentication and authorization mechanisms',
    ],
  },
];

export default function MySkills(): React.JSX.Element {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My skills</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <article key={skill.title} className={styles.card}>
              <div className={styles.cardFront}>
                <img
                  src={skill.icon}
                  alt={`${skill.title} icon`}
                  className={styles.icon}
                />
                <span className={styles.label}>{skill.title}</span>
              </div>

              <div className={styles.cardHover}>
                <h3 className={styles.hoverTitle}>How I used this skill</h3>
                <ul className={styles.details}>
                  {skill.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
