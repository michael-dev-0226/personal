import React, { useState } from 'react'
import { useColorMode, Heading, Flex, Stack, Button } from '@chakra-ui/core'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allProjectsData = [
    
  ]

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allProjectsData,
    },
  }
}

const Product = ({ allProjectsData }) => {
  const { colorMode } = useColorMode()
  const [searchValue, setSearchValue] = useState('')
  const [expanded, setExpanded] = useState(false)

  const redTextColor = {
    light: 'gray.700',
    dark: 'red.100',
  }
  const filteredProjects = allProjectsData
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <Layout>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          width="100%"
          maxWidth="800px"
        >
          <Flex
            spacing={8}
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            maxWidth="800px"
          >
            <Heading
              color={redTextColor[colorMode]}
              letterSpacing="tight"
              mb={2}
              as="h1"
              size="2xl"
            >
              👀 Products
            </Heading>
          </Flex>
          <Stack width="100%" spacing={8} mt={8}>
            {!filteredProjects.length && 'No projects found.'}
            {filteredProjects.map((frontMatter, index) => {
              if (index < 3 || expanded)
                return <ProjectCard key={frontMatter.title} {...frontMatter} />
            })}
          </Stack>
          {filteredProjects.length > 3 && (
            <Button
              fontWeight="medium"
              mx="auto"
              rightIcon={expanded ? 'chevron-up' : 'chevron-down'}
              onClick={() => setExpanded(!expanded)}
              variant="ghost"
            >
              See {expanded ? 'Less' : 'More'}
            </Button>
          )}
        </Stack>
      </Layout>
    </>
  )
}

export default Product
