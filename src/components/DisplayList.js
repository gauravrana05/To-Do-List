import { VStack, Badge, Heading } from "@chakra-ui/react";
import DisplayTask from "./DisplayTask";

function DisplayList({ tasks, category, setCreated }) {
  let categoryTasks = tasks.filter(function check(task) {
    return task.type === category;
  });
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

      <VStack align="flex-start">
        {categoryTasks.map((item, index) => (
          <DisplayTask key={index} item={item} setCreated={setCreated} />
        ))}
      </VStack>
    </VStack>
  );
}

export default DisplayList;
