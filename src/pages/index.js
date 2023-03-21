import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Box,
  Button,
  Center,
  chakra,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { DiGithubBadge } from "react-icons/di"
import Container from "../components/container"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges[2])
  return (
    <Layout>
      <Seo title="Home" />
      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "10rem", md: "12rem" }}
          pb={{ base: "0", md: "5rem" }}
        >
          <Container>
            <Box textAlign="center">
              <chakra.h1
                maxW="680px"
                mx="auto"
                fontSize={{
                  base: "2.25rem",
                  sm: "3rem",
                  lg: "4rem",
                }}
                fontFamily="heading"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                {data.allMarkdownRemark.edges[2].node.frontmatter.title} <br />
              </chakra.h1>

              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                An API for smart contract developers to implement ZKP into their
                smart contract.
              </Text>

              <Divider orientation="vertical" h="60px" />
              <Box
                fontSize="3xl"
                dangerouslySetInnerHTML={{
                  __html: data.allMarkdownRemark.edges[2].node.html,
                }}
              />
            </Box>
          </Container>
        </Box>
      </Box>
      <Divider />
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          html
        }
      }
    }
  }
`
