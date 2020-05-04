import styled from 'styled-components'



export const Container = styled.div`
   ul{
     width:60%;
     margin: 0 20%;
     display:flex;
     flex-direction:column;
     

     list-style:none;
     li{
       display:flex;
       justify-content:space-around;
       align-items:center;
       background-color:${props => props.theme.TodoColor};
       padding:2%;
       margin:.5%;
       color:white;

       p{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        flex-grow:1;
        
  
       }

     }
   }

`

export const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:1%;
  button{
    margin:0 1%;

    
  }
  
` 
export const Creating = styled.div`
  width:100%;
  height: 100%;
  display:flex;
  justify-content:space-around;
  align-items:center;

`
