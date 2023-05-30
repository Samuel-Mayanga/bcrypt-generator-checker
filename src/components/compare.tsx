import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { compare } from "bcryptjs";
import { useState } from "react";

export const CompareComponent = () => {
  const [inputString, setInputString] = useState("");
  const [hashString, setHashString] = useState("");
  const [match, setMatch] = useState<boolean>(false);

  const decrypt = async () => {
    try {
      let result = await compare(inputString, hashString);
      if (result) {
        setMatch(true);
      }
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
        {
          <Box w="full" p={3} borderRadius="lg" bgColor="teal.100">
            <Text>{match ? "Math" : " not match"}</Text>
          </Box>
        }
        <Flex w="full" gap={4}>
          <Input
            w="full"
            placeholder="hash"
            onChange={(e) => setHashString(e.target.value)}
          />
          <Input
            placeholder="String"
            onChange={(e) => setInputString(e.target.value)}
          />
          <Button onClick={decrypt}>Encrypt</Button>
        </Flex>
      </VStack>
    </Box>
  );
};
