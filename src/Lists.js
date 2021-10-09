import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/layout";
import React, { useState } from "react";

const Lists = ({
  image = "",
  name = "",
  price = "",
  info = "",
  removeTour = "",
  id = "",
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Box m="10">
      <Container maxW="container.sm">
        <Box borderRadius="5" boxShadow="dark-lg">
          <Image
            src={image}
            alt={name}
            // h="400"
            w="610"
            //   objectFit="cover"
            borderTopRightRadius="6"
            borderTopLeftRadius="6"
          />
          <Flex mt="5" mr="5" ml="5">
            <Heading as="h5" size="md">
              {name}
            </Heading>
            <Spacer />
            <Badge colorScheme="blue" fontSize="20" borderRadius="4">
              ${price}
            </Badge>
          </Flex>
          <Flex>
            <Text mt="5" mr="5" ml="5" color="gray.500" textAlign="justify">
              {readMore ? info : `${info.substring(0, 200)}...`}
              <Button size="sm" onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show More" : "Show Less"}
              </Button>
            </Text>
          </Flex>
          <Button
            colorScheme="pink"
            variant="solid"
            pl="10"
            pr="10"
            m="5"
            variant="outline"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Lists;
