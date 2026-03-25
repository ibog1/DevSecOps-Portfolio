import React, { useState } from 'react';
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

const skillSlides = [
  skills.slice(0, 3),
  skills.slice(3, 6),
  skills.slice(6, 9),
];

export default function MySkills(): React.JSX.Element {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance && activeSlide < skillSlides.length - 1) {
      setActiveSlide((prev) => prev + 1);
    }

    if (distance < -minSwipeDistance && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

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

        <div className={styles.mobileWrapper}>
          <div
            className={styles.mobileViewport}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.mobileTrack}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {skillSlides.map((slide, slideIndex) => (
                <article key={slideIndex} className={styles.mobileSlide}>
                  {slide.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div key={skill.title} className={styles.mobileSkillRow}>
                        <div className={styles.mobileSkillLeft}>
                          {SkillIcon ? (
                            <SkillIcon
                              title={`${skill.title} icon`}
                              className={styles.mobileIcon}
                              role="img"
                            />
                          ) : (
                            <img
                              src={skill.iconSrc}
                              alt={`${skill.title} icon`}
                              className={styles.mobileIcon}
                            />
                          )}

                          <span className={styles.mobileLabel}>{skill.title}</span>
                        </div>

                        <ul className={styles.mobileDetails}>
                          {skill.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </article>
              ))}
            </div>
          </div>

          <div className={styles.mobileDots}>
            {skillSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show skill card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
