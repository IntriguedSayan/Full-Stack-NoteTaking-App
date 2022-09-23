import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {

    

  return (
    <Box width={"40%"} border="1px solid black" m={"auto"} mt="6%" height={"60%"} pb="10px">
            <Text fontSize={"4xl"}>SignUp</Text>
        <Input width={"350px"} mt="5%" name="name" placeholder="Add your name here" />
        <Input width={"350px"} mt="5%" name="email" placeholder="Add your email" />
        <Input width={"350px"} mt="5%" name="password" placeholder="Add your Password" />
        <Button size={"lg"} colorScheme="cyan" display={"block"} m={"auto"} mt="3%">SIGNUP</Button>
    </Box>
  )
}

export default Signup