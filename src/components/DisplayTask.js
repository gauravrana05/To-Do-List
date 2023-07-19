import { Text, Flex, Heading, Box, Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, EditIcon } from "@chakra-ui/icons";
import EditModal from "./EditModal";
import { useState } from "react";

function DisplayTask({ item }) {
  const [citem, setCitem] = useState(item);
  const [isOpen, setIsOpen] = useState(false);

  function Icon({ priority }) {
    return priority === "low" ? (
      <ChevronDownIcon w={6} h={6} color="green" mt={2} />
    ) : priority === "medium" ? (
      <ChevronDownIcon w={6} h={6} color="blue" mt={2} />
    ) : (
      <ChevronUpIcon w={6} h={6} mt={2} color="red" />
    );
  }

  function handleEditClick({ item }) {
    console.log("From Display task1", citem);
    setCitem(item);
    console.log(citem);
    setIsOpen(true);
    console.log("From Display task2", item);
  }
  return (
    // <HStack>
    <Flex p={2} display="block">
      <Box p={1} shadow="md" borderWidth="1px">
        <Heading fontSize="md">
          {item.title}
          <Button
            colorScheme="whiteAlpha"
            textColor={"black"}
            float={"right"}
            onClick={() => handleEditClick({ item })}
          >
            <EditIcon />
          </Button>

          <EditModal isOpen={isOpen} setIsOpen={setIsOpen} item={citem} />
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
    // </HStack>
  );
}
export default DisplayTask;
