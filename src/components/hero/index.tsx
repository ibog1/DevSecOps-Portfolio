import React from 'react';
import styles from './hero.module.css';
import ibrahimImage from '@site/static/img/me/ibrahim.jpeg';

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
              I am a trained software developer and had the opportunity to work on various hands-on projects during my DevSecOps training.<br/>
              Through these projects, I was able to further strengthen my skills in software development and IT security.<br/>
              Working with OWASP Juice Shop in particular helped me deepen my understanding of common vulnerabilities in web applications.<br/>
              I care about building software that is not only functional, but also clean, maintainable, and secure.

            </p>

            <a href="#contact" className={styles.button}>
              Contact me
            </a>
          </div>

          <div className={styles.imageCard}>
            <img
              src={ibrahimImage}
              alt="Ibrahim Güllü"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
