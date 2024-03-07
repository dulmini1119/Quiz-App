import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { Difficulty, QuestionState, fetchQuizQuestions } from './API';

const TOTAL_QUESTION = 10;

export type AnswerObject = {
  question : string;
  answer : string;
  correct : boolean;
  correctanswer : string;

}

const App: React.FC = () => {

  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  

  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );

    setQuestions(newQuestions);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if(!gameOver){
      //users answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if(correct) setScore((prev) => prev + 1);
      //save answer in the array for user answers
      const AnswerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctanswer : questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, AnswerObject ]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number+1;

    if(nextQ === TOTAL_QUESTION){
      setGameOver(true);
    }else{
      setNumber(nextQ);
    }
  };

  return (
    <div className="App">
    <h1>Quiz Test</h1>
   
    
    {gameOver || userAnswers.length === TOTAL_QUESTION ? (
    <button className='start' onClick={startTrivia}>start</button>) : null }
    
    {!gameOver ?<p className='score'>Score : {score}</p> : null}
    
    {loading && <p>Loading...</p> }
    
    {!loading && !gameOver && ( <QuestionCard
        questionNum={number + 1}
        TotalQuestions={TOTAL_QUESTION}
        question= {questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
    /> )}

    {!loading && !gameOver && userAnswers.length === number+1 && number !== TOTAL_QUESTION-1 ? (
      <button className='next' onClick={nextQuestion} >Next question</button>
    ) : null}
    

    </div>
  );
}

export default App;
