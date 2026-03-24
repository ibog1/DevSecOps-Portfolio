import React from 'react';
import styles from './hero.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.eyebrow}>Hey there, 👋 I am</p>

            <h1 className={styles.name}>Ibrahim Güllü</h1>

            <h2 className={styles.role}>DevSecOps Engineer</h2>

            <p className={styles.description}>
              Programming is my passion, combining creativity with logical
              thinking to solve complex problems efficiently. The fast evolution
              of technology motivates me to continuously improve my skills. I
              enjoy debugging for its analytical challenges and the thrill when
              a program finally works. I stay updated on tech trends relevant to
              my projects and am proud of my work on the OWASP Juice Shop, which
              strengthened my IT security knowledge.
            </p>

            <a href="#contact" className={styles.button}>
              Contact me
            </a>
          </div>

          <div className={styles.imageCard}>
  <img
    src="/img/me/ibrahim.jpeg"
    alt="Ibrahim Güllü"
    className={styles.image}
  />
</div>

        </div>
      </div>
    </section>
  );
}
