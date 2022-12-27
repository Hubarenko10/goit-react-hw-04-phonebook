import styled from "styled-components";

export const Title = styled.h2`
font-weight: 400;
font-size: 23px;
font-family: 'JetBrains Mono', monospace;
margin: 0;
margin-bottom: 5px;
`
export const Form = styled.form`
display: block;
width:450px;
height:150px;
margin-bottom: 90px;
`
export const Btn = styled.button`

align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 35px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 14px;
  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`
export const Input = styled.input`
display: flex;
cursor:pointer;
width: 370px;
height: 25px;
margin: 0;
margin-bottom: 20px;
&:not(:last-child){
   
}

&:focus
{
border-color: red;
box-shadow: 0 0 10px #913945;
outline: none;
}
`
export const Label = styled.label`
display:block;
justify-content: center;
align-items: center;

`