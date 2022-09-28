import React from 'react'
import {
  Box,
  Flex,
  Link,
  Text,
  Stack,
  Image,
  IconButton,
  useColorMode,
  Badge,
} from '@chakra-ui/core'

const ProjectCard = ({
  title,
  description,
  href,
  github,
  thumbnail,
  size,
  tags,
}) => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  }
  const iconColor = {
    light: 'gray.1000',
    dark: 'white',
  }
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  const yellowColor = {
    light: 'yellow.500',
    dark: 'yellow.200',
  }

  const blueColor = {
    light: 'blue.500',
    dark: 'blue.200',
  }

  const colorSchemes = ['green', 'yellow', 'red', 'purple', 'gray']

  return (
    <Box
      display={{ md: 'flex' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      alignItems="center"
      width="100%"
      p={2}
      mb={4}
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none',
      }}
    >
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{ md: 40 }}
          src={thumbnail}
          alt="project thumbnail"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {title}
        </Text>
        <Text mt={2} color="gray.500">
          {description}
        </Text>
        <Box display={{ md: 'flex' }} alignItems="center">
          <Flex wrap="wrap">
            {tags.map((frontMatter, index) => (
              <Badge transform="lowercase" ml="1">
                {frontMatter}
              </Badge>
            ))}
          </Flex>
          <Flex justifyContent={'center'} ml="auto">
            {href && (
              <Link href={href} isExternal>
                <IconButton
                  aria-label="Website"
                  icon="website"
                  size="lg"
                  color={blueColor[colorMode]}
                  variant="ghost"
                ></IconButton>
              </Link>
            )}
            {github && (
              <Link href={github} isExternal>
                <IconButton
                  aria-label="GitHub"
                  icon="github"
                  size="md"
                  color={yellowColor[colorMode]}
                  variant="ghost"
                ></IconButton>
              </Link>
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard
