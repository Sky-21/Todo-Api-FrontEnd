import React, {useEffect, useState} from 'react'
import { Container, Title, Options, CreateCat} from './styles'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

import api from '../../services/api'
import { useCategorie } from '../../Context/categorieContext'



import { Input } from '../../Components/GlobalComponents'

export default () => {

  const [categories , setCategories] = useState([])
  const { categorie,setCategorie} = useCategorie()
  const [creating , setCreating] = useState(true)
  const [newCategorie , setNewCategorie] = useState('')
  

  useEffect(() => {
    apiRequest()
    
  }, [])

  const apiRequest =  ()=>{
     api.get('/categories').then(request => {
      
       setCategories(request.data)
     })
     
  }


  const getCategorie = (e)=>{
    setCategorie(e.target.value)
  }

  const createCategorie = (e) => setCreating(true)
  const cancelCreate = () => setCreating(false)
   

  const handleCreateCategorie = (e) =>{
    setNewCategorie(e.target.value)
  }


  const create = async () =>{
    
    const response = await api.post('/categories', {
      title:newCategorie
    })
  

    setCreating(false)

    setCategories([...categories, response.data])

  }



 

  return (
    <Container>
      
      <Title>Todo List</Title> 
      
        <Options onChange={(e) => getCategorie(e)} value={categorie}>
        <option value='0'>Escolha uma categoria</option>
        {
          categories.map((categorie, id)=> (
        
          <option value={categorie.id} key={id}>{categorie.title}</option>
          
        
          ))
        }

      
        </Options>
        
      
      {
        creating === true ? (
          <CreateCat>
            
           <button onClick={cancelCreate}><FaMinusCircle size={20} className='icon'/></button>
            <Input type='text' placeholder='nome da categoria:' value={newCategorie} onChange={e => handleCreateCategorie(e)}/>
            <button onClick={create}>Criar</button> 
          </CreateCat>
          
        ) : (
          <CreateCat>
          <button onClick={createCategorie}><FaPlusCircle size={20} className='icon'/></button>
          </CreateCat>
        )
      }
      
      
    </Container>
  )
}
