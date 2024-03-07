import React from "react";
import { Box, Heading, Text, Flex, Spacer, Input, IconButton, Image, Container, SimpleGrid, Link, VStack, HStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading size="xl" mr={8}>
              News Website
            </Heading>
            <Spacer />
            <HStack spacing={4}>
              <Input placeholder="Search articles" />
              <IconButton icon={<FaSearch />} aria-label="Search" />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Featured News */}
      <Container maxW="container.lg" my={8}>
        <Heading mb={4}>Featured News</Heading>
        <Image src="https://images.unsplash.com/photo-1636629198288-8fe85b92110a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwZmVhdHVyZWQlMjBpbWFnZXxlbnwwfHx8fDE3MDk4MDIyMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured News" />
        <Heading size="lg" mt={4}>
          Article Title
        </Heading>
        <Text>Article excerpt goes here...</Text>
        <Link color="blue.500" href="#">
          Read More
        </Link>
      </Container>

      {/* News Grid */}
      <Container maxW="container.lg" my={8}>
        <Heading mb={4}>Latest News</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Box key={item}>
              <Image src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcwOTgwMjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt={`Article ${item}`} />
              <Heading size="md" mt={2}>
                Article {item} Title
              </Heading>
              <Text>Article {item} excerpt...</Text>
              <Link color="blue.500" href={`#article-${item}`}>
                Read More
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Flex>
            <VStack align="start">
              <Heading size="md" mb={4}>
                About Us
              </Heading>
              <Link href="#">Our Story</Link>
              <Link href="#">Contact Us</Link>
            </VStack>
            <Spacer />
            <VStack align="start">
              <Heading size="md" mb={4}>
                Follow Us
              </Heading>
              <HStack>
                <Link href="#">
                  <FaFacebook />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
