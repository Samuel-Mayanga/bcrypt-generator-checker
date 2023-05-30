import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { HashComponet } from "./components/hash";
import { CompareComponent } from "./components/compare";

function App() {
  return (
    <Box>
      <Flex p={5} bg="teal.500">
        <Heading color="white">Bcrypt - js</Heading>
      </Flex>
      <SimpleGrid columns={2} py={5}>
        <Box p={5}>
          <HashComponet />
        </Box>
        <Box p={5}>
          <CompareComponent />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default App;
