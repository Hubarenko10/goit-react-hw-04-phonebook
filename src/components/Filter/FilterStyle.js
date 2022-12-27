import styled from "styled-components"

export const Label = styled.label`
display: block;

`
export const Input = styled.input`
display: flex;
width: 370px;
height: 25px;
cursor: pointer;
margin: 0;
&:hover,
&:focus
{
border-color: red;
box-shadow: 0 0 10px #913945;
outline: none;
}
`

export const Header = styled.span`
font-family: 'JetBrains Mono', monospace;
font-weight: 700;
font-size: 20px;
margin-bottom: 10px;
display: flex;
`