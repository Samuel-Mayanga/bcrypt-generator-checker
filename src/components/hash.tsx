import { UnlockIcon } from "@chakra-ui/icons";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { hash } from "bcryptjs";
import { useState } from "react";

export const HashComponet = () => {
  const [loading, setLoading] = useState(false);
  const [inputString, setInputString] = useState("");
  const [jumps, setJumps] = useState(10);
  const [hashResult, setHasResult] = useState<string>();

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const crypt = async () => {
    try {
      let hashed = await hash(inputString, jumps);
      setHasResult(hashed);
    } catch (error) {}
  };

  return (
    <Box px={5} py={10} bg="white" borderRadius="2xl">
      <VStack alignItems="flex-start" spacing={3}>
        <Text fontSize="2xl" fontWeight="semibold">
          Encrypt
        </Text>
        <Text>
          Encrypt some text. The result shown will be a Bcrypt encrypted hash.
        </Text>
        {hashResult && (
          <Box w="full" p={3} borderRadius="lg" bgColor="teal.100">
            {loading ? "checking...." : hashResult}
          </Box>
        )}
        <Flex w="full" gap={4}>
          <Input
            placeholder="String"
            onChange={(e) => setInputString(e.target.value)}
          />
          <Button
            colorScheme="red"
            leftIcon={<UnlockIcon />}
            loadingText="hashing"
            isLoading={loading}
            onClick={async () => {
              setLoading(true);
              await sleep(1500);
              crypt();
              setLoading(false);
            }}
          >
            encrypt
          </Button>
        </Flex>
        <FormControl py={2}>
          <FormLabel fontWeight="semibold">rounds</FormLabel>

          <NumberInput
            w="30%"
            defaultValue={10}
            onChange={(value) => setJumps(parseInt(value))}
          >
            <NumberInputField readOnly />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </VStack>
    </Box>
  );
};
