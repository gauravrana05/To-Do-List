import { ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";

export default function Icon({ priority }) {
    return priority === "low" ? (
      <ChevronDownIcon w={6} h={6} color="green" mt={2} />
    ) : priority === "medium" ? (
      <ChevronDownIcon w={6} h={6} color="blue" mt={2} />
    ) : (
      <ChevronUpIcon w={6} h={6} mt={2} color="red" />
    );
  }
