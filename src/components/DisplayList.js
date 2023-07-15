import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
  Heading,
  Box,
} from "@chakra-ui/react"
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"
import React, { useState } from "react"

function Icon({priority}){
        return (priority === "Low")? <ChevronDownIcon w={8} h={8} color='blue' mt={4}/>
                                    :(priority === "Medium")
                                    ?<ChevronDownIcon w={8} h={8} mt={3} />
                                    :<ChevronUpIcon w={8} h={8} mt={3} color='green'/>

}

function DisplayList({ tasks, category }) {

  let categoryTasks = tasks.filter(function check(task){ console.log(task.type, "chal hat boddk" , category);return task.type === category });

  return !categoryTasks.length ? (
    <Badge colorScheme="purple" variant="outline" borderRadius="4" p="4" m="5">
      No todos for Today!!
    </Badge>
  ) : (
    <VStack width="100%" align="flex-start">
      <Heading fontSize="2xl" textTransform='capitalize'> {category}({categoryTasks.length})</Heading>
     
     {categoryTasks.map((item) => (
        <HStack>
          <Flex p={6} display="block">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{item.task.title}</Heading>
              <Text mt={4}>{item.task.description}</Text>
              <Box p={1} display="flex" justifyContent="flex-end">
                <Icon priority = {item.priority}/>
                <Text mt={4}>{item.priority}</Text>
                <Text m={4}>{item.points}</Text>
              </Box>
            </Box>
          </Flex>
        </HStack>
      ))}
    </VStack>
  )
}

export default DisplayList
