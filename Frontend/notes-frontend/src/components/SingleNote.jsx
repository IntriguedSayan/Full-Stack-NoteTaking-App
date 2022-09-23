import {Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const SingleNote = ({heading,description,tag}) => {
  return (
        <Flex direction={"column"} justifyContent="center">
            <Text color={"black"}>{heading}</Text>
            <Text color={"cyan.700"}>{description}</Text>
            <Text color={"orange.700"}>{tag}</Text>
        </Flex>
  )
}
