import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background : #6082B6;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items:center;

  .msg{
    color: black;
    font-weight : bold;
    font-size:1.4rem;
    margin:0;
    padding : 10px 20px;
  }
 
  .score{
    color: black;
    font-weight : bold;
    font-size:2rem;
    margin:0;
    padding : 20px 40px;
  }

  h1{
   
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, black);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px black);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start {
    --color: #626060;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    border: none;
    background-color: transparent;
  }
  
  .start div {
    letter-spacing: 2px;
    font-weight: bold;
    font-size : 20px;
    background: var(--color);
    border-radius: 2rem;
    color: black;
    padding: 1rem;
  }
  
  .start::before {
    content: '';
    z-index: -1;
    background-color: var(--color);
    border: 2px solid black;
    border-radius: 2rem;
    width: 50%;
    height: 100%;
    position: absolute;
    transform: rotate(10deg);
    transition: .5s;
    opacity: 0.2;
  }
  
  .start:hover {
    cursor: pointer;
    filter: brightness(1.2);
    transform: scale(1.1);
  }
  
  .start:hover::before {
    transform: rotate(0deg);
    opacity: 1;
  }
  
  .start svg {
    transform: translateX(-200%);
    transition: .5s;
    width: 0;
    opacity: 0;
  }
  
  .start:hover svg {
    width: 25px;
    transform: translateX(0%);
    opacity: 1;
  }
  
  .start:active {
    filter: brightness(1.4);
  }

  :active, :hover, :focus {
    outline: 0!important;
    outline-offset: 0;
  }
  ::before,
  ::after {
    position: absolute;
    content: "";
  }
  
  .btn-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: 10px auto 35px;
  }
  .next {
    position: relative;
    display: inline-block;
    width: auto; 
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0px 25px 15px;
    min-width: 150px;
  }
    .next span {         
      position: relative;
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      top: 0; left: 0;
      width: 100%;
      padding: 15px 20px;
      transition: 0.3s;
    }
  
  /*--- btn-1 ---*/
  .next::before {
    background-color: rgb(98,96,96);
    transition: 0.4s ease-out;
  }
  .next span {
    color: rgb(0,0,0);
    border: 1px solid rgb(98,96,96);
    transition: 0.4s 0.s;
  }
  .next span:hover {
    color: black;
    transition: 0.4s 0.1s;
  }
  
  /* 4. hover-filled-slide-right */
  .next.hover-filled-slide-right::before {
    top:0; bottom: 0; right: 0;
    height: 100%; width: 100%;
  }
  .next.hover-filled-slide-right:hover::before {
    width: 0%;
  }
  .next, .start{
    margin:20px 0;
    padding : 0 40px;
    height:40px
    cursor : pointer;
  }

`

