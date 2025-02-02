import React from 'react';
import styles from './About.module.css';


/**
 * The About component displays information about the platform, highlighting its key features and target audience.
 * It is composed of three sections: a brief description of the platform and its goals, a list of key features, and
 * a call to action to explore the platform.
 * @returns {JSX.Element} The About component.
 */
function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.description}>
                    Welcome to our educational platform! Our mission is to create fun and interactive games
                    to help children learn and grow.
                </p>
                <p className={styles.description}>
                    Whether you're a parent looking for a way to support your child's education or a teacher
                    searching for interactive classroom tools, we've got you covered. We believe learning should
                    be both effective and enjoyable!
                </p>
                <div className={styles.highlights}>
                    <div className={styles.highlight}>
                        <h2>Interactive Games</h2>
                        <p>Our games are designed to make learning fun and engaging.</p>
                    </div>
                    <div className={styles.highlight}>
                        <h2>Educational Focus</h2>
                        <p>We focus on key skills like math, literacy.</p>
                    </div>
                    <div className={styles.highlight}>
                        <h2>For Everyone</h2>
                        <p>Our platform is perfect for children, parents, and teachers alike.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
