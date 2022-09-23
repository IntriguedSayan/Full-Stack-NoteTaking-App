import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const NoteInput = () => {
    const[noteData,setNoteData]=useState({
        heading:"",
        description:"",
        tag:"" 
    })
  return (
    
    <Box width={"40%"} border="1px solid black" m={"auto"} mt="6%" height={"60%"} pb="10px">
        <Text fontSize={"4xl"}>THE NOTES APP</Text>

        <Input width={"350px"} mt="5%" name="heading" placeholder="Add your notes from here" />
        <Input width={"350px"} mt="5%" name="Description" placeholder="Add description about your notes" />
        <Input width={"350px"} mt="5%" name="tag" placeholder="Give tags to your notes" />
        <Button size={"lg"} colorScheme="cyan" display={"block"} m={"auto"} mt="3%">ADD</Button>
    </Box>

  )
}

export default NoteInput