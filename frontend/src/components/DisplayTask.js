import { Text, Flex, Heading, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import EditModal from "./EditModal";
import { EditIcon } from "@chakra-ui/icons";
import Icon  from "../static/Icon";


function DisplayTask({  item }) {
  
  const [isOpen, setIsOpen] = useState(false);
  
  function handleEditClick({ item }) {
    setIsOpen(true);
  }

  return (
    <Flex p={2} display="block">
      <Box p={1} shadow="md" borderWidth="1px" backgroundColor='white'>
        <Heading fontSize="md">
          
          {item.title}

          <Button colorScheme="whiteAlpha" textColor={"black"} float={"right"} onClick={() => handleEditClick({ item })}>
            <EditIcon />
          </Button>
          
          <EditModal isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
        
        </Heading>
        
        <Text overflow="clip" overflowWrap="anywhere" fontSize="small" mt={2}>
          {item.description}
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
  );
}
export default DisplayTask;
