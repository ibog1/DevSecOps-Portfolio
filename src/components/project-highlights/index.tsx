import React, { useState } from 'react';
import styles from './project-highlights.module.css';
import Link from '@docusaurus/Link';

import ArrowIcon from '@site/static/img/elements/arrow.svg';

import BabyToolImage from '@site/static/img/project-card/baby-tool.png';
import TruckSignsImage from '@site/static/img/project-card/truck.signs.png';
import OwaspJuiceImage from '@site/static/img/project-card/owasp-juice.png';
import MinecraftImage from '@site/static/img/project-card/minecraft.png';
import WordPressImage from '@site/static/img/project-card/wordpress.png';

import ShellScriptingIcon from '@site/static/img/project-card/shell-scripting.png';
import ContainerIcon from '@site/static/img/project-card/container.png';
import PythonIcon from '@site/static/img/project-card/python.png';
import ItSecurityIcon from '@site/static/img/project-card/it-security.png';
import YamlIcon from '@site/static/img/project-card/yaml.png';

type Project = {
  id: string;
  listLabel: string;
  title: string;
  image: string;
  description: string;
  documentationUrl: string;
  githubUrl: string;
  skills: {
    name: string;
    icon: string;
  }[];
};

const projects: Project[] = [
  {
    id: 'baby-tools-shop',
    listLabel: 'Baby Tools Shop',
    title: 'Baby Tools Shop',
    image: BabyToolImage,
    description:
      'Containerized e-commerce application for baby products. Demonstrates isolated environment benefits for deployment and scalability.',
    documentationUrl: '/docs/projects/Baby_Tools_Shop',
    githubUrl: 'https://github.com/ibog1/baby-tools-shop',
    skills: [
      { name: 'Shell scripting', icon: ShellScriptingIcon },
      { name: 'Container', icon: ContainerIcon },
    ],
  },
  {
    id: 'truck-signs-api',
    listLabel: 'Truck Signs API',
    title: 'Truck Signs API',
    image: TruckSignsImage,
    description:
      'API-focused project for truck signs data and processing. Shows backend logic, structured endpoints, and technical implementation in Python.',
    documentationUrl: '/docs/projects/Truck_Signs_Api',
    githubUrl: 'https://github.com/ibog1/truck_signs_api',
    skills: [
      { name: 'Shell scripting', icon: ShellScriptingIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Container', icon: ContainerIcon },
    ],
  },
  {
    id: 'owasp-juice-shop',
    listLabel: 'OWASP Juice Shop',
    title: 'OWASP Juice Shop',
    image: OwaspJuiceImage,
    description:
      'Practical security project based on OWASP Juice Shop. Focuses on vulnerability analysis, attack paths, and hands-on cybersecurity learning.',
    documentationUrl: '/docs/projects/Juice-Shop-Master/',
    githubUrl:
      'https://github.com/ibog1/DevSecOps-Portfolio/tree/docs/juice-shop-master/docs/Juice-Shop-Master',
    skills: [
      { name: 'IT Security', icon: ItSecurityIcon },
      { name: 'Python', icon: PythonIcon },
    ],
  },
  {
    id: 'minecraft-server',
    listLabel: 'Minecraft Server',
    title: 'Minecraft Server',
    image: MinecraftImage,
    description:
      'Deployment and configuration project for a Minecraft server. Includes automation, infrastructure setup, and secure server-related workflows.',
    documentationUrl: '/docs/projects/Minecraft_Server',
    githubUrl: 'https://github.com/ibog1/minecraft-server',
    skills: [
      { name: 'YAML', icon: YamlIcon },
      { name: 'Shell scripting', icon: ShellScriptingIcon },
      { name: 'IT Security', icon: ItSecurityIcon },
      { name: 'Container', icon: ContainerIcon },
    ],
  },
  {
    id: 'wordpress-multi-container-setup',
    listLabel: 'WordPress Multi\nContainer Setup',
    title: 'WordPress Multi Container Setup',
    image: WordPressImage,
    description:
      'WordPress deployment with a multi-container architecture. Highlights orchestration, separation of services, and secure hosting structure.',
    documentationUrl: '/docs/projects/WordPress_Docker_Lab',
    githubUrl: 'https://github.com/ibog1/-wordpress-docker-lab',
    skills: [
      { name: 'Shell scripting', icon: ShellScriptingIcon },
      { name: 'Container', icon: ContainerIcon },
      { name: 'IT Security', icon: ItSecurityIcon },
    ],
  },
];

export default function ProjectHighlights(): React.JSX.Element {
  const [activeProjectId, setActiveProjectId] = useState('baby-tools-shop');

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My project highlights</h2>

        <div className={styles.content}>
          <div className={styles.list}>
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`${styles.listButton} ${activeProject.id === project.id ? styles.listButtonActive : ''
                  }`}
                onClick={() => setActiveProjectId(project.id)}
              >
                <span className={styles.listNumber}>{index + 1}.</span>
                <span className={styles.listText}>
                  {project.listLabel.split('\n').map((line, lineIndex, lines) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </button>
            ))}

            <Link to="/docs/projects/overview" className={styles.moreLink}>
              <ArrowIcon
                aria-hidden="true"
                className={styles.moreArrow}
              />
              <span> see more projects</span>
            </Link>
          </div>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{activeProject.title}</h3>

              <div className={styles.skills}>
                {activeProject.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillBadge}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={styles.skillIcon}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cardContent}>
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className={styles.projectImage}
              />

              <div className={styles.cardText}>
                <p className={styles.description}>{activeProject.description}</p>

                <div className={styles.actions}>
                  <Link
                    to={activeProject.documentationUrl}
                    className={styles.primaryButton}
                  >
                    Documentation
                  </Link>

                  <a
                    href={activeProject.githubUrl}
                    className={styles.secondaryButton}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
