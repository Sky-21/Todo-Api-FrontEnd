import styled from 'styled-components'

export const Button = styled.button`
    height: 5vh;
    width:10vw;
    border-radius: 10px;
    border:none;
    background-color:${props => props.theme.ButtonColor};
    color:white;
    
    font-weight:bold;
    transition: all 1s;
    &:hover{
      background-color:${props => props.theme.ButtonColorHover};
      letter-spacing:.7px;
      height: 5.5vh;
      width:13vw;
    }




    

`

export const Input = styled.input`
  border:none;
  width:15vw;
  height: 3vh;
  border-radius:6px;

`



