import React, { useState } from 'react'
import { useColorMode, Heading, Flex, Stack, Button } from '@chakra-ui/core'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allProjectsData = [
    {
      title: 'Newwit',
      description:
        'Structured and booted sidechain with 4 validator nodes. Developed smart contracts on sidechain for governance, utility and NFT token and NFT marketplace. Built bridge connecing EVM chains for transfering tokens',
      href: 'https://newwit.com/',
      thumbnail: '/images/newwit.png',
      size: '',
      tags: [
        'Sidechain',
        'Solidity',
        'Typescript',
        'Ethers.js',
        'Hardhat',
        'Smart contract',
        'NFT',
        'ERC721A',
        'EVM',
      ],
    },
    {
      title: 'Whenstaking',
      description:
        'Developed NFT platform which implemented NFT staking protocol. Upgrade frontend to react.js to next.js for SSR and optimizing. Compressed high dimension NFT assets using Node.js, AWS lambda, S3, API gateway',
      href: 'https://whenstaking.com/',
      thumbnail: '/images/whenstaking.png',
      size: '',
      tags: [
        'ReactJs',
        'NextJs',
        'Typescript',
        'Wax.js',
        'Node.js',
        'AWS',
        'Lambda',
        'S3',
        'API Gateway',
        'Wax blockchain',
      ],
    },
    {
      title: 'Kodadot',
      description:
        'Was involved in the frontend development of NFT marketplace which is operating on Kusama network. Developed collection, gallery and detail pages and updated filter functions. Visualized the history of floor and sold price of collection',
      href: 'https://kodadot.com/',
      thumbnail: '/images/kodadot.png',
      size: '',
      tags: ['Vue', 'Vuex', 'Typescript', 'Chart.js', 'GraphQL', 'Kusama'],
      github: 'https://github.com/kodadot/nft-gallery',
    },
    {
      title: 'Maryoku',
      description:
        'Developed planner and vendor system of event marketplace. Designed and built backend using Grooy & Grails and MongoDB and made RESTful APIs for data integration. Engaged in developing frontend development using Vue. Structure CI/CD on GitLab',
      href: 'https://maryoku.com/',
      thumbnail: '/images/maryoku.png',
      size: '',
      tags: [
        'Vue',
        'Vuex',
        'Chart.js',
        'RESTful API',
        'Groovy',
        'Grails',
        'MongoDB',
        'AWS',
        'CI/CD',
        'Agile',
      ],
    },
    {
      title: 'Amazon Integration APP',
      description:
        'Developed Shopify APP for integrating products and orders on Amazon marketplace with Shoify Store. ',
      href: 'https://apps.shopify.com/amazon-3',
      thumbnail: '/images/amazon.png',
      size: '',
      tags: [
        'React.js',
        'Redux',
        'Shopify Polaris',
        'PHP',
        'Laravel',
        'Amazon MWS',
        'Shopify API',
      ],
    },
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
