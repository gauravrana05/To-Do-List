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
} from "@chakra-ui/react"
import "./css/App.css"
import { useState } from "react"
import taskList from "./TaskList.json"
import DisplayList from "./components/DisplayList"

function App() {
  const [tasks, setTasks] = useState(taskList)

  const [modalTitle, setModalTitle] = useState({})
  const [modalDescription, setModalDescription] = useState({})
  const [modalPriority, setModalPriority] = useState({})
  const [modalPoints, setModalPoints] = useState({})
  const [modalStatus, setModalStatus] = useState({})

  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  function handleCreateClick() {
    setIsOpen(true)
  }
  function handleTitleInputChange(e, id) {
    setModalTitle({ ...modalTitle, text: e.target.value })
    console.log(modalTitle, id)
  }
  function handleDescriptionInputChange(e, id) {
    setModalDescription({ ...modalDescription, text: e.target.value })
    console.log(modalDescription, id)
  }

  function handlePriorityInputChange(e, id) {
    setModalPriority({ ...modalPriority, text: e.target.value })
    console.log(modalPriority, id)
  }

  function handleStatusInputChange(e, id) {
    setModalStatus({ ...modalStatus, text: e.target.value })
    console.log(modalStatus, id)
  }

  function handlePointsInputChange(e, id) {
    setModalPoints({ ...modalPoints, text: e.target.value })
    console.log(modalPoints, id)
  }
  function handleCreateSubmit(e) {
    e.preventDefault()
    setModalTitle("")
    setModalDescription("")
    setModalPoints()
    setModalPriority()
    setModalStatus()
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
                <FormControl>
                <FormLabel>Task Name: </FormLabel>
                <Input
                  value={modalTitle.text}
                  key={modalTitle.id}
                  variant="outline"
                  type="text"
                  placeholder="Enter Task..."
                  onChange={handleTitleInputChange}
                />
                </FormControl>
                <FormControl>
                  <FormLabel>Enter Description here: </FormLabel>
                <Textarea
                  value={modalDescription.text}
                  key={modalDescription.id}
                  variant="outline"
                  type="text"
                  placeholder="Description"
                  onChange={handleDescriptionInputChange}
                /></FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="teal" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" colorScheme="teal" mr={3}>
                  Update
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
