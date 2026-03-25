import React from 'react';
import styles from './my-skills.module.css';

import HtmlIcon from '@site/static/img/skill-card/html-icon.png';
import CssIcon from '@site/static/img/skill-card/css-icon.png';
import DocusaurusIcon from '@site/static/img/skill-card/docusaurus-icon.png';
import PythonIcon from '@site/static/img/skill-card/python-icon.png';
import ShellIcon from '@site/static/img/skill-card/shell-icon.png';
import YamlIcon from '@site/static/img/skill-card/yaml-icon.png';
import DockerIcon from '@site/static/img/skill-card/docker-icon.png';
import CicdIcon from '@site/static/img/skill-card/cicd-icon.png';
import ItSecurityIcon from '@site/static/img/skill-card/it-security-icon.png';

type SvgComponent = React.ComponentType<React.ComponentProps<'svg'> & { title?: string }>;

type Skill = {
  title: string;
  icon?: SvgComponent;
  iconSrc?: string;
  details: string[];
};

const skills: Skill[] = [
  {
    title: 'HTML',
    iconSrc: HtmlIcon,
    details: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    title: 'CSS',
    iconSrc: CssIcon,
    details: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    title: 'Docusaurus',
    iconSrc: DocusaurusIcon,
    details: [
      'Search functionality',
      'Static website and customization',
      'Tags, categories, and RSS feeds',
      'Translation',
    ],
  },
  {
    title: 'Python',
    iconSrc: PythonIcon,
    details: [
      'Build APIs',
      'Spam filtering, recommendation systems',
      'Automate software testing',
      'Using libraries like Tkinter, PyQt, or Kivy',
    ],
  },
  {
    title: 'Shell scripting',
    iconSrc: ShellIcon,
    details: [
      'Adding new users and setting their permissions',
      'Performing calculations or running statistical analysis on data',
      'Conditional statements, loops, functions',
    ],
  },
  {
    title: 'YAML',
    iconSrc: YamlIcon,
    details: [
      'A Kubernetes deployment',
      'Store settings like database connections',
      'Environment-specific variables',
      'Complex data structures represent lists and maps',
    ],
  },
  {
    title: 'Container',
    iconSrc: DockerIcon,
    details: [
      'CI/CD pipelines',
      'Automate building, testing, deploying applications',
      'Build microservices-based applications',
    ],
  },
  {
    title: 'CI/CD',
    iconSrc: CicdIcon,
    details: [
      'Automated builds and tests',
      'Pre-built actions for common tasks',
      'Push, pull request, or schedule',
      'Automated deployments',
    ],
  },
  {
    title: 'IT Security',
    iconSrc: ItSecurityIcon,
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
          {skills.map((skill) => {
            const SkillIcon = skill.icon;

            return (
              <article key={skill.title} className={styles.card}>
                <div className={styles.cardFront}>
                  {SkillIcon ? (
                    <SkillIcon
                      title={`${skill.title} icon`}
                      className={styles.icon}
                      role="img"
                    />
                  ) : (
                    <img
                      src={skill.iconSrc}
                      alt={`${skill.title} icon`}
                      className={styles.icon}
                    />
                  )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
