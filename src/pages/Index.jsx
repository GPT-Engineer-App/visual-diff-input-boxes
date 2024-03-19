import React, { useState } from "react";
import { Box, Heading, Textarea, Grid, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const getDiff = () => {
    const lines1 = input1.split("\n");
    const lines2 = input2.split("\n");
    const maxLines = Math.max(lines1.length, lines2.length);

    const diff = [];

    for (let i = 0; i < maxLines; i++) {
      if (lines1[i] !== lines2[i]) {
        diff.push(
          <Box key={i}>
            <Text bg={useColorModeValue("red.100", "red.800")} color={useColorModeValue("red.800", "red.100")}>
              {lines1[i] || ""}
            </Text>
            <Text bg={useColorModeValue("green.100", "green.800")} color={useColorModeValue("green.800", "green.100")}>
              {lines2[i] || ""}
            </Text>
          </Box>,
        );
      } else {
        diff.push(
          <Text key={i} color={useColorModeValue("gray.800", "gray.100")}>
            {lines1[i]}
          </Text>,
        );
      }
    }

    return diff;
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Visual Diff Tool
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Textarea value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Enter text 1" h="200px" />
        <Textarea value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Enter text 2" h="200px" />
      </Grid>
      <Flex mt={4} direction="column">
        <Heading as="h2" size="lg" mb={2}>
          Diff Result:
        </Heading>
        <Box p={4} borderWidth={1} borderRadius="md" overflowY="auto" maxH="300px">
          {getDiff()}
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
