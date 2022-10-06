import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getData, updateData } from '../Redux/AppReducer/action'
import { UPDATE_NOTES_DATA_FAILURE, UPDATE_NOTES_DATA_SUCCESS } from '../Redux/AppReducer/actionTypes'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import ViewSingleNote from '../components/ViewSingleNote'

const EditNote = () => {
    
    const[heading,setHeading]=useState("")
    const[description,setDescription]=useState("")
    const[tag,setTag]=useState("")
    const notesData=useSelector((store)=>store.appReducer.notesData)
    const dispatch=useDispatch()
    const {id}=useParams()
    const toast=useToast()
    
    const handleAdd=()=>{
       const payload={
        heading:heading,
        description:description,
        tag:tag
       }
       dispatch(updateData(payload,id)).then((res)=>{
        if(res.type===UPDATE_NOTES_DATA_SUCCESS){
            toast({
                title: "Data updated successfully",
                
                status: 'success',
                duration: 8000,
                isClosable: true,
               })
            dispatch(getData())
        }else if(res.type===UPDATE_NOTES_DATA_FAILURE){
            toast({
                title: "Failed to update data.",
                
                status: 'error',
                duration: 8000,
                isClosable: true,
               })
        }
       }) 

    }
    useEffect(()=>{
        notesData.length===0 && dispatch(getData())
    },[notesData.length,dispatch])
    useEffect(()=>{
        if(id){
            const note=notesData.find((note)=>note._id===id)
            if(note){
                setHeading(note.heading)
                setDescription(note.description)
                setTag(note.tag)
            }
        }
     
    },[id,notesData])
  return (

    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}
     >
        <Navbar />
    <Flex width={"100%"}>
        <Box width={"57%"} mt="10%">
            <ViewSingleNote heading={heading} description={description} tag={tag} />
        </Box>
        <Box width={"40%"} border="1px solid black" m={"auto"} mt="10%" height={"60%"} pb="10px">
            <Text fontSize={"4xl"}>EDIT NOTE</Text>

            <Input width={"350px"} mt="5%" name="heading" value={heading} onChange={(e)=>setHeading(e.target.value)} placeholder="Add your note heading from here" />
            <Input width={"350px"} mt="5%" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Add description about your notes" />
            <Input width={"350px"} mt="5%" name="tag" value={tag} onChange={(e)=>setTag(e.target.value)} placeholder="Give tags to your notes" />
            <Button size={"lg"} colorScheme="cyan" display={"block"} onClick={handleAdd} m={"auto"} mt="3%">ADD</Button>
        </Box>
    </Flex>
    </motion.div>
  )
}

export default EditNote