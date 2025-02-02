import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import styles from './Header.module.css';

/**
 * The Header component renders the main header of the application with the logo and main navigation
 *
 * @returns {React.ReactElement} The header component
 */

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                
                
                <div className={styles.projectName}>
                    <h1>Interactive Platform</h1>
                </div>
                
               
                <nav>
                    <ul className={styles.menu}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/uploadGame"
                                className={({ isActive }) =>
                                    isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                                }
                            >
                                Upload Game
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
