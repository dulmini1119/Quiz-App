import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1500px;
    background : linear-gradient(180deg, #fff, black);
    border-radius : 10px;
    border : 2px solid #0085a3;
    padding : 20px;
    text-align : center;

    p{
        font-size : 1.2rem;
    }

`;
type ButtonWrapperProps = {
    correct : boolean;
    UserClicked : boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition : all 0.3s ease;

    :hover{
        opacity : 0.8;
    }
    button{
        cursor: pointer;
        user-select : none;
        font-size : 1rem;
        width : 100%;
        height : 40px;
        margin : 5px 0;
        background : ${({correct,UserClicked}) =>
            correct
            ? 'linear-gradient(90deg, #56ffa4,#59bc86)'
            : !correct && UserClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #56ccff, #6eafb4)'
    
    };
        border : 3px solid black;
        box-shadow : 1px 2px 0px rgba(0,0,0,0.1);
        border-radius : 10px;
        color : #fff;
        text-shadow : 0px 1px 0px rgba(0,0,0,0.25);
    }

`;