import React, { useState, useEffect } from 'react';
import './GameUpdate.css';
import dataGames from '../../Data/gameData';
import CustomButton from '../common/CustomButton/CustomButton';

const GameUpdate = () => {
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
        <div className="game-update-container">
            <h2>Update Game</h2>
            <form onSubmit={handleSubmit} className="game-update-form">
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
                        placeholder="Enter game description"
                    />
                </div>

                <div className="form-group">
                <label htmlFor="image">Game Image</label>
                    <div className="custom-file-input">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                            className="file-input"
                        />
                        <CustomButton 
                            isFileInput={true}
                            onClick={() => document.getElementById('image').click()}
                        >
                            Choose Image
                        </CustomButton>
                        {gameData.image && (
                            <span className="file-name">
                                {gameData.image.name}
                            </span>
                        )}
                    </div>
                </div>

                <CustomButton 
                    type="submit"
                    variant="primary" 
                    className="primary"
                >
                    Update Game
                </CustomButton>
            </form>
        </div>
    );
};

export default GameUpdate;
