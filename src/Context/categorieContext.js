import React ,{ createContext, useState, useContext} from 'react'


const CategorieContext = createContext()

export default function CatContext({ children }){
    const [categorie , setCategorie] = useState(1)  
  
  return (
      <CategorieContext.Provider value={{
        categorie ,
        setCategorie
      }}>
        {children}
      </CategorieContext.Provider>
    )
}


export function useCategorie(){
  const context = useContext(CategorieContext)
  const {categorie , setCategorie} = context
 
  return { categorie , setCategorie }
}