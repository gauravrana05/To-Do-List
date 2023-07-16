import {
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
  HStack,
  VStack,
} from "@chakra-ui/react"

import { useState } from "react"

const EditModal = ({ isOpen, setIsOpen, tasks, setTasks, item, operation }) => {
  const [modalTitle, setModalTitle] = useState(item.task.title)
  const [modalDescription, setModalDescription] = useState(
    item.task.description
  )
  const [modalPriority, setModalPriority] = useState(item.priority)
  const [modalPoints, setModalPoints] = useState(item.points)
  const [modalStatus, setModalStatus] = useState(item.type)
  const canSave = [
    modalTitle,
    modalDescription,
    modalPriority,
    modalPoints,
    modalStatus,
  ].every(Boolean)

  function onClose() {
    setModalTitle("")
    setModalDescription("")
    setModalPoints(0)
    setModalPriority("low")
    setModalStatus("notStarted")
    setIsOpen(false)
  }
  function handleTitleInputChange(e) {
    setModalTitle(e.target.value)
  }
  function handleDescriptionInputChange(e) {
    setModalDescription(e.target.value)
  }

  function handlePriorityInputChange(e) {
    setModalPriority(e.target.value)
  }

  function handleStatusInputChange(e) {
    setModalStatus(e.target.value)
  }

  function handlePointsInputChange(e) {
    setModalPoints(e.target.value)
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }
  function editTask(item) {
    const updatedTask = tasks.map((task) => {
      return task.id === item.id ? item : task
    })
    setTasks(updatedTask)
  }

  function handleCreateSubmit(e) {
    e.preventDefault()
    console.log(modalStatus)
    if (operation === "create") {
      const task = {
        id: tasks.length + 1,
        task: {
          title: modalTitle,
          description: modalDescription,
        },
        points: Number(modalPoints),
        type: modalStatus,
        priority: modalPriority,
      }
      console.log(task)
      addTask(task)
    } else if (operation === "edit") {
      item.task.title = modalTitle
      item.task.description = modalDescription
      item.priority = modalPriority
      item.type = modalStatus
      item.points = modalPoints

      console.log(item)
      console.log(tasks)
      setTasks(tasks)
      editTask(item)
    }
    setModalTitle("")
    setModalDescription("")
    setModalPoints(0)
    setModalPriority("")
    setModalStatus("")
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="4xl">Task Details</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleCreateSubmit}>
          <ModalBody>
            <HStack justifyContent={"space-evenly"}>
              <VStack width="60%">
                <FormControl m={3} fontSize='sm' >
                  <FormLabel mb={0} fontSize={"small"}>Task Name: </FormLabel>
                  <Input
                    border='solid 1px black'
                    value={modalTitle}
                    variant="outline"
                    type="text"
                    placeholder="Enter Task..."
                    onChange={handleTitleInputChange}
                  />
                </FormControl>
                <FormControl m={3} >
                  <FormLabel mb={0} fontSize={"small"}>Description </FormLabel>
                  <Textarea
                    border='solid 1px black'
                    h="200px"
                    value={modalDescription}
                    variant="outline"
                    type="text"
                    placeholder="Description"
                    onChange={handleDescriptionInputChange}
                  />
                </FormControl>
              </VStack>
              <VStack w="20%" alignItems='start' justifyContent='start'>
                  <FormControl mb={10}
                  > 
                  <FormLabel mb={0}fontSize='sm'> Status: </FormLabel>
                    <Select
                    border='solid 1px black'
                      value={modalStatus}
                      onChange={handleStatusInputChange}
                    >
                      <option value="started">Started</option>
                      <option value="notStarted">Not Started</option>
                      <option value="completed">Completed</option>
                    </Select>
                  </FormControl>
                  <FormControl mb={9} >
                  <FormLabel mb={0}fontSize='sm'> Priority: </FormLabel>
                  <Select
                  border='solid 1px black'
                    value={modalPriority}
                    onChange={handlePriorityInputChange}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Select>
                  </FormControl>
                <Flex m={0} align={"center"} flexDirection="column">
                  <FormControl
                    m={3}
                    display="flex"
                    alignItems="start"
                    flexDirection="column"
                  >
                    <FormLabel mb={0} fontSize='sm'> Story points: </FormLabel>
                    <Input
                      border='solid 1px black'
                      value={modalPoints}
                      variant="outline"
                      type="number"
                      placeholder="Points"
                      onChange={handlePointsInputChange}
                    />
                  </FormControl>
                </Flex>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="telegram"
              mr={3}
              variant="ghost"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              isDisabled={!canSave}
              type="submit"
              colorScheme="facebook"
              mr={3}
            >
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default EditModal
