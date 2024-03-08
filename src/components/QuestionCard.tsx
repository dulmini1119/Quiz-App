import React from "react";
import { AnswerObject } from "../App";
//import { Wrapper } from "../App.styles";
import { Wrapper,ButtonWrapper } from "./QuestionCard.styles";


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
    <Wrapper>
        <p className="number">
            Question : {questionNum}/{TotalQuestions} 
        </p>
        <p dangerouslySetInnerHTML={{__html:question}} />
        <div>
            {answers.map((answer) => (
                <ButtonWrapper 
                key={answer}
                correct={userAnswer?.correctanswer === answer}
                UserClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </ButtonWrapper>
            )) }
        </div>

    </Wrapper>
    );



export default QuestionCard;