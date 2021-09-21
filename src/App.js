import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Results from './components/Results';
import Game from './components/Game';
import Words from './components/Words';
import './App.css';

function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(60);
  const [inputValue, setInputValue] = useState('');
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if(inputValue.trim() === newWord){
      setCorrectResults(prevCorrect => [...prevCorrect, newWord]);
      setCountCorrect(prevCorrect => prevCorrect + 1);
      return;
    }
    setWrongResults(prevWrong => [...prevWrong, inputValue]);
  };

  const handleInput = e => {
    if(e.charCode === 13 && inputValue.trim() !== ''){
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue('');
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectResults([]);
    setWrongResults([]);
    setCountCorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if(time <= 60 && time !== 0 && disabled === false){
      setTimeout(() => setTime(prevTime => prevTime - 1), 1000);
    } else if(disabled){
      setTime(60);
      setAnimation(null);
    } else if(time === 0){
      setDisabled(true);
    }
    if(time <= 10){
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, time]);

  useEffect(() => {
    setNewWord(word[randomWord]);
  }, []);

  return (
    <div className="App">
      <Container>
        <Game 
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
        </Container>
        <Results
          correctResults={correctResults}
          wrongResults={wrongResults}
          countCorrect={countCorrect}
        />
    </div>
  );
}

export default App;
