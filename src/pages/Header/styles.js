import styled from 'styled-components'

export const Container = styled.div`
  height:8vh;
  display:flex;
  justify-content:space-around;
  align-items:center;
  
  background-color:${props => props.theme.headerColor};


`

export const Title = styled.h1`
  color:white;
  &:hover{
    text-shadow:1px 1px 1px;
    letter-spacing:3px;
    
  }
  transition: all .5s;
 

`


export const Options = styled.select`
  height: 4vh;
  color:white;
  
  font-weight:bold;
  font-size:1em;
  
  border:none;
  box-shadow: 1px 1px 5px 1px black;
  background-color: ${props => props.theme.ButtonColor};
  
  option{
    
    font-size:1em;
    
    
  }
  &:before{
    content:'';
    position:absolute;
    top:0px;
    left:0px;
    height: 50px;
    width:50px;
    background-color:red;
  }

`


export const CreateCat = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

  input{
    border-radius:0;
  }
  button{
    background-color:${props => props.theme.ButtonColor};
    border:none;
    width:5vw;
    height: 3vh;
    padding:0 2%;
    
    color:white;
   

  }
  button:nth-child(1){
    background-color:transparent;
    border:none;

    .icon{
      color:${props => props.theme.IconColor};
    }
  }


`


