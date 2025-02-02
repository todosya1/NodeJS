import React, { useState, useEffect } from 'react';
import './GameUpload.css';
import dataGames from '../../Data/gameData';

const GameUpload = () => {
    const [gameData, setGameData] = useState({
        title: '',
        description: '',
        image: null,
    });
    const [existingGames, setExistingGames] = useState([]);
    const [uniqueTitles, setUniqueTitles] = useState([]);

    // Fetch existing games when component mounts
    useEffect(() => {
        fetchExistingGames();
    }, []);

    const fetchExistingGames = () => {
        try {
            // Use the imported data directly
            setExistingGames(dataGames);
            
            // Extract unique titles from existing games
            const titles = [...new Set(dataGames.map(game => game.title))];
            setUniqueTitles(titles);

        } catch (error) {
            console.error('Error processing games:', error);
            setUniqueTitles([]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGameData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setGameData(prevState => ({
            ...prevState,
            image: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the data to backend
        console.log('Game data to be submitted:', gameData);
        // Reset form after submission
        setGameData({
            title: '',
            description: '',
            image: null,
        });
    };

    return (
        <div className="game-upload-container">
            <h2>Upload New Game</h2>
            <form onSubmit={handleSubmit} className="game-upload-form">
                <div className="form-group">
                    <label htmlFor="title">Game Title</label>
                    <select
                        id="title"
                        name="title"
                        value={gameData.title}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a game</option>
                        {uniqueTitles.map((title, index) => (
                            <option key={index} value={title}>
                                {title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={gameData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Game Image</label>
                    <div className="custom-file-input">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="file-input"
                        />
                        <label htmlFor="image" className="file-input-button">
                            Choose File
                        </label>
                        <span className="file-name">
                            {gameData.image ? gameData.image.name : 'No file chosen'}
                        </span>
                    </div>
                </div>

                <button type="submit" className="submit-button">
                    Upload Game
                </button>
            </form>
        </div>
    );
};

export default GameUpload;
