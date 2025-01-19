import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css'; 

import img_count from '../../img/counting.jpg';
import img_letters from '../../img/letters.jpg';
import img_numbers from '../../img/numbers.jpg';

/**
 * MainPage component - displays a list of games with links.
 * @returns {JSX.Element}
 */
function MainPage() {
    const games = [
        {
            id: 1,
            title: "Counting Game",
            image: img_count,
            content: "Game for practicing addition and subtraction"
        },
        {
            id: 2,
            title: "Alphabet Game",
            image: img_letters,
            content: "Game for learning letters"
        },
        {
            id: 3,
            title: "Learn numbers",
            image: img_numbers,
            content: "Game for learning numbers"
        }
    ];

    return (
        <div className={styles.mainPage}>
            <section>
                <div className={styles.container}>
                    <h1 className={styles.mainPageTitle}>Games</h1>
                    <div className={styles.gameContainer}>
                        {games.map((game) => (
                            <div key={game.id} className={styles.gameCard}>
                                <img src={game.image} alt={game.title} className={styles.gameImage} />
                                <h2 className={styles.gameTitle}>{game.title}</h2>
                                <Link
                                    to={`/game/${game.id}`}
                                    state={{ post: game }}
                                    className={styles.viewButton}
                                >
                                    View
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;
