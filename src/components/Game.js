import React from 'react';
import Button from './Button';

const Game = (props) => {
    const { newWord, inputValue, setInputValue, disabled, time, animation, handleInput, handleStart } = props;

    return (
        <div className="game">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div className="time">
                <p style={{ animation: animation !== null ? animation : "" }}>{time}</p>
            </div>
            <div className="wordValues">
                <input 
                    type="text"
                    disabled={disabled && disabled}
                    onKeyPress={e => handleInput(e)}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder={disabled ? "" : "Start Typing!"}
                />
                <Button handleStart={handleStart} disabled={disabled} />
            </div>
        </div>
    );
};

export default Game;
