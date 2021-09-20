import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Typeracer from './components/Typeracer';
import Words from './components/Words';
import './App.css';

function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [currentResults, setCurrentResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(60);
  const [inputValue, setInputValue] = useState('');
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floow(Math.random() * word.length);

  return (
    <div className="App">
      <Container>
        <Typeracer />
      </Container>
    </div>
  );
}

export default App;
