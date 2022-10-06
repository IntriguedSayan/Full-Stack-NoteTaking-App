import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { getData } from '../Redux/AppReducer/action'

const ViewSingleNote = ({heading,description,tag}) => {

    // const[note,setNote]=useState({})
    // const notesData=useSelector((store)=>store.appReducer.notesData)
    // const dispatch=useDispatch()
    // const {id}=useParams()

    // useEffect(()=>{

    //     if(!notesData){

    //         dispatch(getData())

    //     }
    //     if(notesData&&id){
    //         const note=notesData.filter((elem)=>elem._id===id)
    //         setNote(note)
    //     }    
       
    // },[])


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