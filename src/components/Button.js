import React from 'react';

const Button = ({ handleStart, disabled }) => {
    return (
            <button onClick={handleStart}>
                {disabled ? "Start" : "Reset"}
            </button>
    );
};

export default Button;
