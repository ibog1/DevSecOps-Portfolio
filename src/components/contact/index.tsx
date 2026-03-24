import React from 'react';
import styles from './contact.module.css';

import DefaultMailIcon from '@site/static/img/elements/default_mail.svg';
import HoverMailIcon from '@site/static/img/elements/hover_mail.svg';
import DefaultLinkedinIcon from '@site/static/img/elements/default_linkdin.svg';
import HoverLinkedinIcon from '@site/static/img/elements/hover_linkdin.svg';
import ButtonArrowDefaultIcon from '@site/static/img/elements/button_arrow_default.svg';
import ButtonArrowHoverIcon from '@site/static/img/elements/button_arrow_hover.svg';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2 className={styles.title}>Contact me</h2>
            <ul className={styles.list}>
              <li>Feel free to contact me regarding job offers or professional opportunities.</li>
              <li>I am looking for a position in software development, backend development, or DevSecOps.</li>
              <li>I bring practical experience in application development, Docker, Python, Django, and security-focused project work.</li>
              <li>I am open to remote work and willing to relocate for the right opportunity.</li>
            </ul>

          </div>

          <div className={styles.right}>
            <p className={styles.subtitle}>Looking forward to hearing from you!</p>

            <div className={styles.contactItems}>
              <a
                className={styles.contactItem}
                href="mailto:ibrahim.g94@icloud.com"
                aria-label="Send email"
              >
                <span className={styles.iconWrap}>
                  <DefaultMailIcon
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconDefault}`}
                  />
                  <HoverMailIcon
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconHover}`}
                  />
                </span>
                <span className={styles.contactText}>ibrahim.g94@icloud.com</span>
              </a>

              <a
                className={styles.contactItem}
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <span className={styles.iconWrap}>
                  <DefaultLinkedinIcon
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconDefault}`}
                  />
                  <HoverLinkedinIcon
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconHover}`}
                  />
                </span>
                <span className={styles.contactText}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <a className={styles.arrowLink} href="#about" aria-label="Back to about section">
            <span className={styles.arrowIconWrap}>
              <ButtonArrowDefaultIcon
                aria-hidden="true"
                className={`${styles.arrowIcon} ${styles.arrowIconDefault}`}
              />
              <ButtonArrowHoverIcon
                aria-hidden="true"
                className={`${styles.arrowIcon} ${styles.arrowIconHover}`}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
