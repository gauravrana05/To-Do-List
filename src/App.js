import { nanoid } from 'nanoid';
import {
  HStack,
  VStack,
  Text,
  Heading,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Modal,
  ModalFooter,
  Textarea,
  FormLabel,
  FormControl,
  Select,
  Flex,
} from "@chakra-ui/react"
import "./css/App.css"
import { useState } from "react"
import taskList from "./TaskList.json"
import DisplayList from "./components/DisplayList"

function App() {
  const [tasks, setTasks] = useState(taskList)

  const [modalTitle, setModalTitle] = useState("")
  const [modalDescription, setModalDescription] = useState("")
  const [modalPriority, setModalPriority] = useState({})
  const [modalPoints, setModalPoints] = useState()
  const [modalStatus, setModalStatus] = useState({})

  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  function handleCreateClick() {
    setIsOpen(true)
  }
  function handleTitleInputChange(e) {
    setModalTitle(e.target.value)
    console.log(modalTitle);
  }
  function handleDescriptionInputChange(e) {
    setModalDescription(e.target.value)
  }

  function handlePriorityInputChange(e) {
    setModalPriority( e.target.value )
    console.log(modalPriority);
  }

  function handleStatusInputChange(e) {
    setModalStatus( e.target.value )
    console.log(modalStatus)
  }

  function handlePointsInputChange(e) {
    setModalPoints( e.target.value )

  }

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }
  function handleCreateSubmit(e) {
    e.preventDefault()
    const task = {
      id : tasks.length + 1,
      text : {
        title: modalTitle,
        description: modalDescription,
      },
      points : modalPoints,
      type: modalStatus,
      priority: modalPriority
    }

    console.log(task);
    addTask(task)

    setModalTitle("")
    setModalDescription("")
    setModalPoints(0)
    setModalPriority({})
    setModalStatus({})
    setIsOpen(false)
  }

  return (
    <VStack align="flex-start">
      <HStack padding="40px" display="block" justifySelf="start" left="0">
        <Heading fontSize="xxx-large">Kanban Board</Heading>
        <Text fontSize="3xl">Buzz Aldrin’s tasks</Text>
        <Button
          onClick={() => handleCreateClick()}
          fontSize="2xl"
          colorScheme="facebook"
          marginTop="60px"
        >
          Create
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="4xl">Create a new Task</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleCreateSubmit}>
              <ModalBody>
                <FormControl m={3}>
                  <FormLabel>Task Name: </FormLabel>
                  <Input
                    value={modalTitle}
                    variant="outline"
                    type="text"
                    placeholder="Enter Task..."
                    onChange={handleTitleInputChange}
                  />
                </FormControl>
                <FormControl m={3}>
                  <FormLabel>Enter Description here: </FormLabel>
                  <Textarea
                    value={modalDescription}
                    variant="outline"
                    type="text"
                    placeholder="Description"
                    onChange={handleDescriptionInputChange}
                  />
                </FormControl>
                <FormControl m={3} display="flex" alignItems="center">
                  <FormLabel mb={0}>Story points: </FormLabel>
                  <Input
                    width={20}
                    display="inline-block"
                    value={modalPoints}
                    variant="outline"
                    type="number"
                    placeholder="Points"
                    onChange={handlePointsInputChange}
                  />
                  <Flex w="70%" justifyContent="space-evenly">
                    <Select
                      mx={7}
                      width="40%"
                      display="inline-block"
                      placeholder="Choose Status"
                      value={modalStatus}
                      onChange={handleStatusInputChange}
                    >
                      <option value="started">Started</option>
                      <option value="notStarted">Not Started</option>
                      <option value="completed">Completed</option>
                    </Select>
                    <Select
                      mx={7}
                      width="40%"
                      display="inline-block"
                      placeholder="Priority"
                      value={modalPriority}
                      onChange={handlePriorityInputChange}
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </Select>
                  </Flex>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="telegram" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" colorScheme="facebook" mr={3}>
                  Create
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </HStack>

      <HStack justifyContent="center" gap={7} width="100%">
        <DisplayList tasks={tasks} category="notStarted" />
        <DisplayList tasks={tasks} category="started" />
        <DisplayList tasks={tasks} category="completed" />
      </HStack>

      <HStack padding="40px" justifyContent="center" width="100%">
        <Heading>I am a footer</Heading>
      </HStack>
    </VStack>
  )
}

export default App
