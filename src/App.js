import { HStack, VStack, Text, Heading, Button } from "@chakra-ui/react";
import "./css/App.css";
import { useState } from "react";

import ShowToDo from "./components/ShowToDo";
import CreateModal from "./components/CreateModal";

// const baseURL = "http://localhost:3000/api/v1/tasks/";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [created, setCreated] = useState(false);
  function handleCreateClick() {
    setIsOpen(true);
  }

  return (
    <VStack align="flex-start">
      <HStack padding="40px" display="block" justifySelf="start" left="0">
        <Heading fontSize="x-large" ml={41}>
          Kanban Board
        </Heading>
        <Text fontSize="medium" ml={41}>
          Buzz Aldrin’s tasks
        </Text>

        <Button
          onClick={() => handleCreateClick()}
          fontSize="md"
          colorScheme="facebook"
          marginTop={75}
          ml={41}
        >
          Create
        </Button>
      </HStack>
      <CreateModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={{
          title: "",
          description: "",
          priority: "low",
          points: 0,
          type: "notStarted",
        }}
        operation="create"
        setCreated={setCreated}
      />
      <ShowToDo created={created} setCreated={setCreated} />

      <HStack padding={4} justifyContent="center" width="100%">
        <Heading fontSize="md">@devtools2023</Heading>
      </HStack>
    </VStack>
  );
}

export default App;
