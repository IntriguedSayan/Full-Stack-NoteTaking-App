import { Box } from '@chakra-ui/react'
import React from 'react'

const Glass = ({children,bgimg}) => {
  return (
    <>
    <Box backgroundImage={bgimg} backgroundSize="cover" width={"100%"} height="100vh" overflowY={"hidden"}>
    <Box className='glass' width={"40%"}   m={"auto"} mt="10%" height={"60%"} pb="10px" borderRadius={"12px"} >{children}
        </Box>
        </Box>
    </>    
  )
}

export default Glass