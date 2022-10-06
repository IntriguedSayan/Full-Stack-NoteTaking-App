import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ViewSingleNote = ({heading,description,tag}) => {


  return (
    
    <>
    <Flex direction={"column"} height={"400px"}  border="1px solid lawngreen" borderRadius={"15px"} 
     gap="8%" overflowY={"scroll"} >
        <Heading>{heading}</Heading>
        <Text fontSize={"large"} textAlign="center" >{description}</Text>
        <Text textAlign={"left"}>{tag}</Text>
    </Flex>  
    </>    

  )
}

export default ViewSingleNote