import {
  HStack,
  VStack,
  Text,
  Heading,
  Button
} from "@chakra-ui/react"
import "./css/App.css"
import { useState } from "react"
import taskList from "./TaskList.json"
import DisplayList from "./components/DisplayList"
import EditModal from "./components/EditModal"

function App() {
  const [tasks, setTasks] = useState(taskList)
  const [isOpen, setIsOpen] = useState(false)

  function handleCreateClick() {
    setIsOpen(true)
  }

  return (
    <VStack align="flex-start">
      <HStack padding="40px" display="block" justifySelf="start" left="0">
        <Heading fontSize="x-large">Kanban Board</Heading>
        <Text fontSize='medium'>Buzz Aldrin’s tasks</Text>
        <Button
          onClick={() => handleCreateClick()}
          fontSize="md"
          colorScheme="facebook"
          marginTop={2}
        >
          Create
        </Button>
        <EditModal isOpen={isOpen}
         setIsOpen={setIsOpen}
          tasks= {tasks}
           setTasks={setTasks} 
        item ={{task:{title:"", description:""},priority:"",points:0, type:"notStarted"}} 
        operation = 'create'/>
      </HStack>

      <HStack justifyContent='space-evenly' gap={7} width="100%">
        <DisplayList tasks={tasks} setTasks={setTasks} category="notStarted" />
        <DisplayList tasks={tasks} setTasks={setTasks} category="started" />
        <DisplayList tasks={tasks} setTasks={setTasks} category="completed" />
      </HStack>

      <HStack padding={4} justifyContent="center" width="100%">
        <Heading fontSize="md">@devtools2023</Heading>
      </HStack>
    </VStack>
  )
}

export default App
