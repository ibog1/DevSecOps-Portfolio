import React from 'react';
import styles from './contact.module.css';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2 className={styles.title}>Contact me</h2>
            <ul className={styles.list}>
              <li>Feel free to reach out with job offers or opportunities.</li>
              <li>What role are you looking for?</li>
              <li>How will you contribute to the new team?</li>
              <li>Are you open for remote work or even relocate?</li>
            </ul>
          </div>

          <div className={styles.right}>
            <p className={styles.subtitle}>Looking forward to hearing from you!</p>

            <div className={styles.contactItems}>
              <a
                className={styles.contactItem}
                href="mailto:yourmail@example.com"
                aria-label="Send email"
              >
                <span className={styles.iconWrap}>
                  <img
                    src="/img/elements/default_mail.svg"
                    alt=""
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconDefault}`}
                  />
                  <img
                    src="/img/elements/hover_mail.svg"
                    alt=""
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconHover}`}
                  />
                </span>
                <span className={styles.contactText}>yourmail@example.com</span>
              </a>

              <a
                className={styles.contactItem}
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <span className={styles.iconWrap}>
                  <img
                    src="/img/elements/default_linkdin.svg"
                    alt=""
                    aria-hidden="true"
                    className={`${styles.icon} ${styles.iconDefault}`}
                  />
                  <img
                    src="/img/elements/hover_linkdin.svg"
                    alt=""
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
              <img
                src="/img/elements/button_arrow_default.svg"
                alt=""
                aria-hidden="true"
                className={`${styles.arrowIcon} ${styles.arrowIconDefault}`}
              />
              <img
                src="/img/elements/button_arrow_hover.svg"
                alt=""
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
