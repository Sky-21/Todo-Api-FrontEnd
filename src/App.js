import React, {useState} from 'react';
import GlobalStyle from './Styles/GlobalStyle'
import themes from './Styles/Theme'


import { ThemeProvider } from 'styled-components'
import CategorieProvider from './Context/categorieContext'


import Header from './pages/Header'
import Main from './pages/Main'




function App() {
  const [theme ] = useState(themes.dark)
 

  return (
    <ThemeProvider theme={theme}>
      <CategorieProvider>

    

        <Header/>
        <GlobalStyle/>
        <Main/>
        
      

      </CategorieProvider>
    </ThemeProvider>
  );
}

export default App;
