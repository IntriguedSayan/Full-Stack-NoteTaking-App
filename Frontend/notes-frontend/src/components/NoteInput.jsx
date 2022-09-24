import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../Redux/AuthReducer/action'

const NoteInput = () => {
    const[noteData,setNoteData]=useState({
                                          heading:"",
                                          description:"",
                                          tag:"" 
                                      })
    
    const dispatch=useDispatch()
    const handleAdd=()=>{
        dispatch(signUp(noteData)).then((res)=>{
          
        })
    }

    const handelChange=(e)=>{
        const {name,value}=e.target 
        setNoteData({...noteData,[name]:value})
    }
  return (
    
    <Box width={"40%"} border="1px solid black" m={"auto"} mt="6%" height={"60%"} pb="10px">
        <Text fontSize={"4xl"}>THE NOTES APP</Text>

        <Input width={"350px"} mt="5%" name="heading" onChange={handelChange} placeholder="Add your note heading from here" />
        <Input width={"350px"} mt="5%" name="Description" onChange={handelChange} placeholder="Add description about your notes" />
        <Input width={"350px"} mt="5%" name="tag" onChange={handelChange} placeholder="Give tags to your notes" />
        <Button size={"lg"} colorScheme="cyan" display={"block"} onClick={handleAdd} m={"auto"} mt="3%">ADD</Button>
    </Box>

  )
}

export default NoteInput