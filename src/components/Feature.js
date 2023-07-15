import { VStack} from "@chakra-ui/react"
import DisplayList from "./DisplayList"

function Feature({ tasks, category }) {
    return (
      <VStack
        align="flex-start"
        width="28%"
        height="700px"
        shadow="md"
        borderWidth="1px"
      >
        <DisplayList tasks={tasks} category={category} />
      </VStack>
    )
  }

  export default Feature;