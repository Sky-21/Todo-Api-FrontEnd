import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    
    
    font-family: 'Lato', sans-serif;
  }
  body, html, #root{
    background-color:${ props => props.theme.background};
    height:100%;
  }

  .test{
    background-color:${ props => props.theme.boxColor};
    height:100px;
    
    margin:3% 10%;
  }
  .add{
    background-color:${props => props.theme.addButton}
  }
`