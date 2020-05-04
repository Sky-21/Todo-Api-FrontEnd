import React, {useEffect, useState }from 'react'



import { Container, Buttons, Creating } from './styles'

import { Button , Input, Text} from '../../Components/GlobalComponents'

import { useCategorie } from '../../Context/categorieContext'
import api from '../../services/api'
export default () => {

  const { categorie, setCategorie } = useCategorie()
  const [todos , SetTodos] = useState([])
  const [creatingTodo, setCreatingTodo] = useState(true)

  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => { 
    getTodos()
    
  }, [ categorie ])

  const getTodos = ()=>{
    api.get(`/todos/${categorie}`).then(response => {
      console.log(response.data, `/todos/${categorie}`)
      SetTodos(response.data)
    })
  }

  
  const HandleCreateMakeTodo = () => {
    setCreatingTodo(true)
  }

  const HandleCreateTodo = async () => {
    const response = await api.post('/todos' , {
      title,
      content,
      Cat_id:categorie,
    })
    
    SetTodos([...todos, response.data.Todo])

    setCreatingTodo(false)
    clearInputs()
  }
  //Deleta uma todo atravez da id , e deleta o elemento do array
  //para realizar a atualização
  const HandleDeleteTodo= async (id, index) =>{
    await api.delete(`/todos/${id}`)
    
    const FakeTodos = todos
    FakeTodos.splice(index, 1)

    SetTodos([...FakeTodos])

  }
  //Delta uma categoria atravez do id
  const HandleDeleteCategorie = async (id) =>{
    console.log(id)
    await api.delete(`/categories/${id}`).then(response => console.log(response.data))
  }


  const HandleCancelTodo = () => 
setCreatingTodo(false)

  const log = () =>{
    console.log(todos)
    console.log(categorie)
    
  }

 

  const clearInputs = () =>{
    setContent('')
    setTitle('')
  }


 
  return (
    <Container>
      {
        categorie !== 0 && (
        <Buttons>
          <Button onClick={HandleCreateMakeTodo}>Criar atividade</Button>
          <Button onClick={() => HandleDeleteCategorie(categorie)}>Deletar categoria</Button>
          
       </Buttons>
       )
      }
      <ul>
        { todos.map((todo, index) => (
          <li key={index}>
            <p> <span className='atividade'>Atividade: {todo.title}</span> <span className='horario'>Horario: {todo.content}</span></p> 
            
            <Button onClick={() => HandleDeleteTodo(todo.id, index )}>Deletar</Button>
          </li>
        ))
        }
        <li>
          
          {
            creatingTodo && (
              <Creating>
                <Input type='text' placeholder='Atividade' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Input type='text' placeholder='Horario' value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button onClick={HandleCreateTodo}>Criar</Button>
                <Button onClick={HandleCancelTodo}>Cancelar</Button>
              </Creating>
            )
          }
        </li>
      </ul> 

  
       
  </Container>
  )
}