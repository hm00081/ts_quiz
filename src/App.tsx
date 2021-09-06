import React from 'react';
//Components
import questionCard from './components/questionCard';

const startTravia = async () => {};

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

const nextQuestion = () => {};

const App = () => {
    return (
        <div className="App">
            <h1>REACT QUIZ</h1>
            <button className="start" onClick={startTravia} />
        </div>
    );
};

export default App;
