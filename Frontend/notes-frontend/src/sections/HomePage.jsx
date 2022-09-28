import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {motion} from "framer-motion"
import note from "../assets/notepic.jpg"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate=useNavigate()

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0,transition:{duration:0.5}}}
      >
    <Box 
     height={"100vh"}
     backgroundImage={note}
     backgroundSize="cover"
     overflowY="hidden">
        <Button size={"lg"} colorScheme="blackAlpha" mt={"5%"} color="blackAlpha.800" pt={"10px"} pb="20px" fontSize="4xl">The Notes App</Button>
      <Button size={"lg"} colorScheme="blackAlpha" position={"absolute"} bottom="40%"
        left={"20%"}
       onClick={()=>navigate("/notes")}>Get Started</Button>  
    </Box>
    </motion.div>
  )
}

export default HomePage