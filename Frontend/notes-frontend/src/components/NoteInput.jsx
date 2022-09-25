import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../Redux/AppReducer/action'
import { ADD_NOTES_DATA_FAILURE, ADD_NOTES_DATA_SUCCESSFUL } from '../Redux/AppReducer/actionTypes'


const NoteInput = () => {
    const[noteData,setNoteData]=useState({
                                          heading:"",
                                          description:"",
                                          tag:"" 
                                      })
    
    const dispatch=useDispatch()
    const toast=useToast()
    const handelChange=(e)=>{
        const {name,value}=e.target 
        setNoteData({...noteData,[name]:value})
    }

    const handleAdd=()=>{
        dispatch(addData(noteData)).then((res)=>{
          if(res.type===ADD_NOTES_DATA_SUCCESSFUL){
            toast({
              title: "Your note has beeen added successfully",
              description: "Check below for the added note",
              status: 'success',
              duration: 8000,
              isClosable: true,
             })
          }else if(res.type===ADD_NOTES_DATA_FAILURE){
            toast({
              title: "Failed to add note",
              description: "Please try again later",
              status: 'success',
              duration: 8000,
              isClosable: true,
             })
          }
        })
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