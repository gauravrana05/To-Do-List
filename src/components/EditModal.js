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
import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/tasks/";

const EditModal = ({ isOpen, setIsOpen, item }) => {
 
  const [tasks, setTasks] = useState(item)
  console.log(tasks);
  
  const [modalTitle, setModalTitle] = useState(item.title)
  const [modalDescription, setModalDescription] = useState(item.description)
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

  function handleCreateSubmit(e) {
    e.preventDefault()
    console.log(modalStatus)
      item.title = modalTitle
      item.description = modalDescription
      item.priority = modalPriority
      item.type = modalStatus
      item.points = modalPoints

      axios
      .patch(`${baseURL}${item._id}`, item)
      .then((response) => {
      });
      
    setModalTitle("")
    setModalDescription("")
    setModalPoints(0)
    setModalPriority("")
    setModalStatus("")
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={()=> onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="4xl">Task Details</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={ ()=> handleCreateSubmit}>
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
                    onChange={ ()=> handleTitleInputChange}
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
                    onChange={()=> handleDescriptionInputChange}
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
                      onChange={()=> handleStatusInputChange}
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
                    onChange={()=> handlePriorityInputChange}
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
                      onChange={()=> handlePointsInputChange}
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
              onClick={()=> onClose}
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
