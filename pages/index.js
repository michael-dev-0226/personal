import React from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Icon,
  Link,
  Divider,
} from '@chakra-ui/core'

import Timeline from '../components/timeline'
import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'

const Index = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }
  const redTextColor = {
    light: 'black',
    dark: 'red.100',
  }
  const yellowTextColor = {
    light: 'black',
    dark: 'yellow.100',
  }
  const greenTextColor = {
    light: 'black',
    dark: 'green.100',
  }
  // const blueTextColor = {
  //   light: 'black',
  //   dark: 'blue.200',
  // }

  const purpleColor = {
    light: 'purple.600',
    dark: 'purple.400',
  }
  const grayColor = {
    light: 'gray.400',
    dark: 'gray.400',
  }
  return (
    <Layout>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading
            color={redTextColor[colorMode]}
            letterSpacing="tight"
            mb={2}
            as="h1"
            size="2xl"
          >
            👋 Hello, I’m Michael!
          </Heading>
          <Text mb={4} color={secondaryTextColor[colorMode]}>
            I'm a Singaporean maker over paying rent in Laguna Hills, California
            🇸🇬🇺🇸. In my day job, I mostly run up and down the software stack as
            a fullstack engineer (<i>with a focus on frontend engineering</i>).
          </Text>
          <Text mb={4} color={secondaryTextColor[colorMode]}>
            I enjoy feature development and working on products that matter! Now
            that I've been working for a couple of years, I decided to create
            this blog to jot down things I wish I knew while working in this
            industry:
            <Box as="ul" pt={2} pl={4} ml={2}>
              <Box as="li" pb={1}>
                Soft skills
              </Box>
              <Box as="li" pb={1}>
                Technology and trends
              </Box>
              <Box as="li" pb={1}>
                Product Development
              </Box>
            </Box>
          </Text>
          <Text color={secondaryTextColor[colorMode]}>
            Feel free to{' '}
            <Link
              color={'blue.400'}
              href="mailto:solomon226@hotmail.com"
              title="Email"
              isExternal
            >
              reach out
            </Link>
            ; I enjoy chatting with folk.
          </Text>
        </Flex>
        {/*<Box w="100%">*/}
        {/*  <Divider />*/}
        {/*  <Flex w="100%" justifyContent="space-evenly" alignItems="center">*/}
        {/*    <Icon*/}
        {/*      aria-label={'periscopedata'}*/}
        {/*      name={'periscopedata'}*/}
        {/*      color={purpleColor[colorMode]}*/}
        {/*      size={['50px', '50px', '60px']}*/}
        {/*      ml={2}*/}
        {/*      mr={4}*/}
        {/*    />*/}
        {/*    <Icon*/}
        {/*      aria-label={'apple'}*/}
        {/*      name={'apple'}*/}
        {/*      color={grayColor[colorMode]}*/}
        {/*      size={['50px', '50px', '60px']}*/}
        {/*      ml={2}*/}
        {/*      mr={4}*/}
        {/*    />*/}
        {/*    <Icon*/}
        {/*      aria-label={'sisense'}*/}
        {/*      name={'sisense'}*/}
        {/*      size={['50px', '50px', '60px']}*/}
        {/*      ml={2}*/}
        {/*      mr={4}*/}
        {/*    />*/}
        {/*    <Icon*/}
        {/*      aria-label={'crowdai'}*/}
        {/*      name={'crowdai'}*/}
        {/*      size={['75px', '75px', '100px']}*/}
        {/*      ml={2}*/}
        {/*      mr={4}*/}
        {/*    />*/}
        {/*  </Flex>*/}
        {/*  <Divider />*/}
        {/*</Box>*/}
        {/*<Flex*/}
        {/*  flexDirection="column"*/}
        {/*  justifyContent="flex-start"*/}
        {/*  alignItems="flex-start"*/}
        {/*  maxWidth="700px"*/}
        {/*>*/}
        {/*  <Heading*/}
        {/*    color={yellowTextColor[colorMode]}*/}
        {/*    letterSpacing="tight"*/}
        {/*    mb={4}*/}
        {/*    size="xl"*/}
        {/*    fontWeight={700}*/}
        {/*  >*/}
        {/*    Project*/}
        {/*  </Heading>*/}
        {/*  <ProjectCard*/}
        {/*    title="Objective: Object Collective Tarot Deck"*/}
        {/*    description="An illustration project to reimagine the Rider-Waite tarot deck as relatable items/animals in the 21st century"*/}
        {/*    href="https://www.kickstarter.com/projects/1988162704/objective-object-collective-tarot-deck"*/}
        {/*    icon="objective"*/}
        {/*    size="56px"*/}
        {/*  />*/}
        {/*</Flex>*/}

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="700px"
          w="100%"
        >
          <Heading
            color={greenTextColor[colorMode]}
            letterSpacing="tight"
            mb={4}
            size="xl"
            fontWeight={700}
          >
            Timeline
          </Heading>
          <Timeline
            activitiesByYear={{
              '2022': [
                {
                  title: 'Joined Gelato Network',
                  description:
                    "With a leap of faith, I jumped into a seed stage startup to flex my engineering muscle; bringing a tool to build automation into dapps to the table. Here I got to build the company's vision of it's product..",
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/channel/UCBk9gXYKOoLHTQxpcnZkBwQ',
                  },
                },
              ],
              '2021': [
                {
                  title: 'Joined Onessus',
                  description:
                    'In the end of 2021, I jumped into a dApp Development Studio; brought full-stack engineering to the table. Here I got to transfer novel concept to reality.',
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/channel/UCyZaZqRgYFdrgVFoB-qT-ag',
                  },
                },
                {
                  title: 'Joined Wallfair.io',
                  description:
                    'In Sep 2021, Took my second frontend engineering to a decentralized social entertainment industry: Here I got to build the frontend pages of social events.',
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/channel/UCqBlRN4MA8N2-SNvM5V52Eg',
                  },
                },
                {
                  title: 'Joined KodaDot',
                  description:
                    'Took my first frontend engineering to blockchain space; Here I got to develop the frontend of interoperable NFT marketplace on Kusama & Polkadot.',
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/channel/UCEULduld5NrqOL49k1KVjoA',
                  },
                },
              ],
              '2020': [
                {
                  title: 'Joined Snikpic',
                  description: 'My career landed on more variety fields',
                },
              ],
              '2019': [
                {
                  title: 'Joined Demoreel.com',
                  description:
                    'I started freelancing and experienced many sources and libraries.',
                },
              ],
              '2016': [
                {
                  title: 'Switch to Computer Engineering Major',
                  description:
                    "I've tried mechanical, eletrical and chemical engineering and at this point nothing really stood out. I went back to software engineering (building something by myself from scratch was fun).",
                },
              ],
              '2014': [
                {
                  title: 'Took my first CS elective',
                  description:
                    'I scored a 20 out of 100 in the finals; and thought coding was not for me.',
                },
              ],
            }}
          />
        </Flex>
      </Stack>
    </Layout>
  )
}

export default Index
