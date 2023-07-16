import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
  Heading,
  Box,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon, EditIcon } from "@chakra-ui/icons"
import EditModal from "./EditModal"
import { useState } from "react"

function DisplayList({ tasks, setTasks, category }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cItem, setcItem] = useState(tasks[0])

  function Icon({ priority }) {
    return priority === "low" ? (
      <ChevronDownIcon w={6} h={6} color="blue" mt={2} />
    ) : priority === "medium" ? (
      <ChevronDownIcon w={6} h={6} mt={2} />
    ) : (
      <ChevronUpIcon w={6} h={6} mt={2} color="green" />
    )
  }

  function handleEditClick({item}) {
    setIsOpen(true)
    setcItem(item);
  }

  function DisplayTask({ item }) {
    return (
      <HStack>
        <Flex p={2}  display="block">
          <Box p={1}  shadow="md" borderWidth="1px">
            <Heading fontSize="md">
              {item.task.title}
              <EditIcon float={"right"} onClick={() => handleEditClick({item})} />

              <EditModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                tasks={tasks}
                setTasks={setTasks}
                item={cItem}
                operation='edit'
              />
            </Heading>
            <Text  overflow='clip' overflowWrap='anywhere' fontSize="small" mt={2}>
              {item.task.description}
            </Text>
            <Box p={1} display="flex" justifyContent="flex-end">
              <Icon priority={item.priority} />
              <Text mt={2} textTransform="capatalize">
                {item.priority}
              </Text>
              <Text m={2}>{item.points}</Text>
            </Box>
          </Box>
        </Flex>
      </HStack>
    )
  }
  let categoryTasks = tasks.filter(function check(task) {
    return task.type === category
  })
  return !categoryTasks.length ? (
    <VStack
      width="28%"
      height="700px"
      shadow="md"
      borderWidth="1px"
      align="center"
    >
      <Badge
        colorScheme="purple"
        variant="outline"
        borderRadius="4"
        p="4"
        m="5"
      >
        No todos!!
      </Badge>
    </VStack>
  ) : (
    <VStack
      width="25%"
      height="700px"
      shadow="md"
      borderWidth="1px"
      align="flex-start"
    >
      <Heading fontSize="medium" m={3} textTransform="capitalize">
        {category}({categoryTasks.length})
      </Heading>

      <VStack overflow={"scroll"} scrollBehavior={"smooth"} align="flex-start">
        {categoryTasks.map((item) => (
          <DisplayTask item={item} />
        ))}
      </VStack>
    </VStack>
  )
}

export default DisplayList
