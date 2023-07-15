
import {
  Stack,
  HStack,
  VStack,
  Text,
  Box,
  Heading,
  Container,
  Button,
} from "@chakra-ui/react"
import "./App.css"
import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import DisplayList from "./components/DisplayList"

function App() {
  const todosList = [
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Watch a movie" },
  ]

  const taskList = [
    { id: 1, task: { title: "Clean office space", description: "I want to clean my office table, mop the floor, and vacuum the chair. "}, points: 3, type: "notStarted",priority:"High" },
    { id: 2, task: { title: "Build a space ship ", description: "I want to build a space so that I can fly to the moon & back" }, points:3, type: "started",priority: "Low" },
    { id: 3, task: { title: "Design a spacesuit", description: "I want to design a spacesuit, construct one, and test it. " },points:3, type: "completed",priority: "Medium" },
    { id: 4, task: { title: "Wear a spacesuit", description: "I want to design a spacesuit, construct one, and test it. " },points:3, type: "completed",priority: "Medium" },
  ]

  const [todos, setTodos] = useState(todosList)

  const [tasks, setTasks] = useState(taskList)

  function deleteTodo(id) {
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })

    setTodos(newTodos)
    console.log(tasks)
  }

  function addTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  function editTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo
    })
    setTodos(updatedItem)
  }
  function Feature({category}) {
    return (
      <VStack align='flex-start' width='28%' height='700px' shadow="md" borderWidth="1px">
        <DisplayList tasks={tasks} category = {category}/>
      </VStack>
    )
  }

  return (
    
      <VStack  align='flex-start'>
        <HStack padding='40px' display='block' justifySelf='start'left='0'>
          <Heading   fontSize='xxx-large'>Kanban Board</Heading>
          <Text  fontSize="3xl">Buzz Aldrin’s tasks</Text>
          <Button fontSize='2xl' colorScheme='facebook' marginTop='60px'>Create</Button>
        </HStack> 
        <HStack justifyContent='center' gap={7} width='100%'>
        <Feature category = "notStarted"/>
        <Feature category="started"/>
        <Feature category="completed"/>
      </HStack>
      <HStack padding='40px'  justifyContent='center' width='100%'>
          <Heading>I am a footer</Heading>
        </HStack> 
      </VStack>
  )
}

export default App
