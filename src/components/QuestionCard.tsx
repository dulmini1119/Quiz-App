import React from "react";
import { AnswerObject } from "../App";


type Props = {
    question : string;
    answers : string[];
    callback : (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer : AnswerObject | undefined;
    questionNum : number;
    TotalQuestions : number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    TotalQuestions
}) => (
    <div>
        <p className="number">
            Question : {questionNum}/{TotalQuestions} 
        </p>
        <p dangerouslySetInnerHTML={{__html:question}} />
        <div>
            {answers.map((answer) => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </div>
            )) }
        </div>

    </div>
    );



export default QuestionCard;