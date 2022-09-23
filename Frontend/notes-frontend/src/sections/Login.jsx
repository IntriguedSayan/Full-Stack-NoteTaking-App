import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {


    
  return (
    <Box width={"40%"} border="1px solid black" m={"auto"} mt="6%" height={"60%"} pb="10px">

        <Input width={"350px"} mt="5%" name="email" placeholder="type your email" />
        <Input width={"350px"} mt="5%" name="password" placeholder="type your Password" />
        <Button size={"lg"} colorScheme="green" display={"block"} m={"auto"} mt="3%">LOGIN</Button>

    </Box>
  )
}

export default Login