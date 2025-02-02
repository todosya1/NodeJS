import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './SingleGame.module.css';

/**
 * A page that displays a single game based on the game ID
 * obtained from the URL or the game data passed from the previous page.
 *
 * @returns {JSX.Element} A JSX element representing a single game.
 */
function SingleGame() {
    const location = useLocation();
	const game = location.state?.post;

    return (
        <section className={styles.game}>
        <div className={styles.container}>
            <div className={styles.singleGame}>
                <h1 className={styles.gameTitle}>{game?.title}</h1>
                <img src={game?.image} alt={game?.title} className={styles.gameImage} />
                <p className={styles.gameContent}>{game?.content}</p>
            </div>
        </div>
    </section>
     
    );
}

export default SingleGame
