import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { compare } from "bcryptjs";
import { useState } from "react";

export const CompareComponent = () => {
  const [inputString, setInputString] = useState("");
  const [hashString, setHashString] = useState("");
  const [match, setMatch] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const decrypt = async () => {
    setMatch(false);
    try {
      let result = await compare(inputString, hashString);
      if (result) {
        setMatch(true);
      }
    } catch (error) {}
  };

  return (
    <Box px={5} py={10} bg="white" borderRadius="2xl">
      <VStack alignItems="flex-start" spacing={3}>
        <Text fontSize="2xl" fontWeight="semibold">
          Decrypt
        </Text>
        <Text>
          Test your Bcrypt hash against some plaintext, to see if they match.
        </Text>
        {
          <Box
            w="full"
            p={3}
            borderRadius="lg"
            bgColor={match ? "teal.100" : "red.200"}
          >
            <Text>
              {loading ? "checking...." : match ? "Match !!!" : "No match"}{" "}
            </Text>
          </Box>
        }

        <Flex w="full" gap={4} direction="column">
          <Box w="full">
            <Input
              placeholder="hash"
              onChange={(e) => setHashString(e.target.value)}
            />
          </Box>
          <HStack>
            <Input
              placeholder="String"
              onChange={(e) => setInputString(e.target.value)}
            />
            <Button
              isLoading={loading}
              colorScheme="red"
              leftIcon={<UnlockIcon />}
              onClick={async () => {
                setLoading(true);
                await sleep(1500);
                decrypt();
                setLoading(false);
              }}
            >
              Decrypt
            </Button>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};
