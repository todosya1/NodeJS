import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css'; 

import games from '../../Data/gameData';
/**
 * MainPage component - displays a list of games with links.
 * @returns {JSX.Element}
 */
function MainPage() {
    

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
