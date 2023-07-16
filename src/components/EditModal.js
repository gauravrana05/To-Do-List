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
} from "@chakra-ui/react"

import { useState } from "react"

const EditModal = ({isOpen, setIsOpen, tasks, setTasks, item, operation}) => {
  
  const [modalTitle, setModalTitle] = useState(item.task.title)
  const [modalDescription, setModalDescription] = useState(item.task.description)
  const [modalPriority, setModalPriority] = useState(item.priority)
  const [modalPoints, setModalPoints] = useState(item.points)
  const [modalStatus, setModalStatus] = useState(item.type)

  function onClose() {
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
  function editTask(item){

    const updatedTask = tasks.map((task) => 
    { return task.id === item.id ? item: task });
    setTasks(updatedTask)
    
  }

  function handleCreateSubmit(e) {
    e.preventDefault()
    console.log(modalStatus)
    if(operation === 'create'){
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
}
else if(operation ==='edit'){
    item.task.title = modalTitle;
    item.task.description = modalDescription;
    item.priority = modalPriority;
    item.type = modalStatus;
    item.points = modalPoints;
    
    console.log(item);
    console.log(tasks);
    setTasks(tasks)
    editTask(item);
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
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default EditModal
