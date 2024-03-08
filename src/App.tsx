import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { Difficulty, QuestionState, fetchQuizQuestions } from './API';
import { GlobalStyle, Wrapper } from './App.styles';

const TOTAL_QUESTION = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctanswer: string;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY);

    setQuestions(newQuestions);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      //users answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      //save answer in the array for user answers
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctanswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>Quiz Test</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <>
          <button className="start" onClick={startTrivia}>
            <div>Start</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
              <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 12.0601H14.17" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
          </button>
          {!gameOver && userAnswers.length === TOTAL_QUESTION ? (
            <div className='msg'>
              {score === TOTAL_QUESTION ? (
                <p>Congratulations! You won! Want to play another round?</p>
              ) : (
                <p>You lose..Try another round!</p>
              )}
            </div>
          ) : null}
        </>
      ) : null}

      {!gameOver ? <p className="score">Score : {score} / {TOTAL_QUESTION}</p> : null}

      {loading && <p>Loading...</p>}

      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          TotalQuestions={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ? (
        <div id='container'>
        <button className="next hover-filled-slide-right" onClick={nextQuestion}>
        <span>Next Question ➡</span>
        </button>
        </div>
      ) : null}
    </Wrapper>
    </>
  );
};

export default App;
