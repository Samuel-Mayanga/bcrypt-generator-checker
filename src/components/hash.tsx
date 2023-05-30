import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { hash } from "bcryptjs";
import { useState } from "react";

export const HashComponet = () => {
  const [inputString, setInputString] = useState("");
  const [hashResult, setHasResult] = useState<string>();

  const crypt = async () => {
    try {
      let hashed = await hash(inputString, 10);
      setHasResult(hashed);
    } catch (error) {}
  };

  return (
    <Box px={5} py={10} bg="white" borderRadius="2xl">
      <VStack alignItems="flex-start">
        <Text fontSize="2xl" fontWeight="semibold">
          Encrypt
        </Text>
        <Text>
          Encrypt some text. The result shown will be a Bcrypt encrypted hash.
        </Text>
        {hashResult && (
          <Box w="full" p={3} borderRadius="lg" bgColor="teal.100">
            <Text>{hashResult}</Text>
          </Box>
        )}
        <Flex w="full" gap={4}>
          <Input
            placeholder="String"
            onChange={(e) => setInputString(e.target.value)}
          />
          <Button onClick={crypt}>Encrypt</Button>
        </Flex>
      </VStack>
    </Box>
  );
};
