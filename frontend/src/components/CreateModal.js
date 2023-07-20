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
import axios from "axios"

const baseURL = "https://todo-app-3cwo.onrender.com/api/v1/tasks/"

const CreateModal = ({ isOpen, setIsOpen, setCreated }) => {

  
  const [tasks, setTasks] =  useState({
                                  title: "",
                                  description: "",
                                  priority: "low",
                                  points: 0,
                                  type: "notStarted",
                                 })


  function onClose() {
    setIsOpen(false)
  }



  const handleCreateSubmit = async (e) => {
    
    e.preventDefault()

      const task = {
        title: document.querySelector('.title').value,
        description: document.querySelector('.description').value,
        points: Number(document.querySelector('.points').value),
        type:  document.querySelector('.status').value,
        priority:  document.querySelector('.priority').value,
      }
      

      await axios.post(baseURL, task).then((res) => setTasks(tasks))

    setIsOpen(false)
    setCreated((last) => !last)
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
                
                <FormControl m={3} fontSize="sm">
                  <FormLabel mb={0} fontSize={"small"}>
                    Task Name:{" "}
                  </FormLabel>
                  <Input 
                    isRequired
                    className="title"
                    border="solid 1px black"
                    variant="outline"
                    type="text"
                    placeholder="Enter Task..."
                  />
                </FormControl>

                <FormControl m={3}>
                  <FormLabel mb={0} fontSize={"small"}>
                    Description{" "}
                  </FormLabel>
                  <Textarea
                    isRequired
                    className="description"
                    border="solid 1px black"
                    h="200px"
                    variant="outline"
                    type="text"
                    placeholder="Description"
                  />
                </FormControl>

              </VStack>

              <VStack w="20%" alignItems="start" justifyContent="start">
               
                <FormControl mb={10}>
                  <FormLabel mb={0} fontSize="sm">
                    {" "}
                    Status:{" "}
                  </FormLabel>
                  <Select
                    className="status"
                    border="solid 1px black"
                  >
                    <option value="started">Started</option>
                    <option value="notStarted">Not Started</option>
                    <option value="completed">Completed</option>
                  </Select>
                </FormControl>

                <FormControl mb={9}>
                  <FormLabel mb={0} fontSize="sm">
                    {" "}
                    Priority:{" "}
                  </FormLabel>
                  <Select
                    border="solid 1px black"
                    className="priority"
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
                    <FormLabel mb={0} fontSize="sm">
                      {" "}
                      Story points:{" "}
                    </FormLabel>
                    <Input
                      border="solid 1px black"
                      isRequired
                      className="points"
                      variant="outline"
                      type="number"
                      placeholder="Points"
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

export default CreateModal
