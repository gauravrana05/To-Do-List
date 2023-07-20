import { HStack, Badge } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import DisplayList from "./DisplayList";
const baseURL = "http://localhost:3000/api/v1/tasks/";

export default function ShowToDo() {

  const  [tasks, setTasks]  = useState()

    const Tasks = async () => {
      try {
        const res = await axios.get(baseURL);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    Tasks();


  return !tasks ? (
    <HStack
      h="calc(100vh - 312px)"
      margin="auto"
      align="start"
    >
      <Badge colorScheme="purple" variant="outline" borderRadius="4" p={4}>
        No Task, press Create Button to start new Tasks!!
      </Badge>
    </HStack>
  ) : (
    <HStack justifyContent="space-evenly" alignItems='flex-start' gap={7} width="100%">
      <DisplayList tasks={tasks} setTasks={setTasks} category="notStarted" />
      <DisplayList tasks={tasks} setTasks={setTasks} category="started" />
      <DisplayList tasks={tasks} setTasks={setTasks} category="completed" />
    </HStack>
  );
}
