import { VStack, Badge, Heading, Box } from "@chakra-ui/react";
import DisplayTask from "./DisplayTask";

function DisplayList({ setCreated, tasks, category }) {

  let categoryTasks = tasks.filter(function check(task) {
    return task.type === category;
  });

  return !categoryTasks.length ? (
    <VStack w="25%"  h='auto' backgroundColor='lightgrey'  shadow="md"borderWidth="1px">
       <Heading fontSize="medium" m={3} textTransform="capitalize">
       <Box backgroundColor='wheat' px={5} py={2} borderRadius={9} boxShadow='dark-lg'>{category}({categoryTasks.length})</Box>
      </Heading>
      <Badge colorScheme="purple" variant="outline" borderRadius="4" p="4" m="5" >
        No todos!!
      </Badge>
    </VStack>
  ) : (
    <VStack w="25%"  h='auto' backgroundColor='lightgrey'  shadow="md"borderWidth="1px">
    
      <Heading fontSize="medium" m={3} textTransform="capitalize">
        <Box backgroundColor='wheat' px={5} py={2} borderRadius={9} boxShadow='dark-lg'>{category}({categoryTasks.length})</Box>
      </Heading>

      <VStack align="flex-start" >

        {categoryTasks.map((item) => (
          <DisplayTask  setCreated={setCreated} item={item} />
        ))}
         
      </VStack>
    </VStack>
  );
}

export default DisplayList;
