import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch,} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteData, getData } from '../Redux/AppReducer/action'
import { DELETE_NOTES_DATA_FAILURE, DELETE_NOTES_DATA_SUCCESS } from '../Redux/AppReducer/actionTypes'

export const SingleNote = ({heading,description,tag,id}) => {
  
    const dispatch=useDispatch()
    
    const toast=useToast()

  const handleDelete=()=>{

    
    dispatch(deleteData(id)).then((res)=>{
          if(res.type===DELETE_NOTES_DATA_SUCCESS){
              toast({
                title: "Data deleted Successfully",
                
                status: 'success',
                duration: 8000,
                isClosable: true,
              })
              dispatch(getData())
          }else if(res.type===DELETE_NOTES_DATA_FAILURE){
            toast({
              title: "Failed to delete data.",
              description:"Try again later",
              status: 'error',
              duration: 8000,
              isClosable: true,
            })
          }
    })

  }


  return (
    <Box border={"1px solid cyan"} borderRadius="10px">
        <Link to={`/update/${id}`}>
          <Flex direction={"column"} border="1px solid grey" borderRadius={"10px"}
                justifyContent="center" gap={"2%"}>
              <Text color={"black"}>{heading}</Text>
              <Text color={"cyan.700"}>{description}</Text>
              <Text color={"orange.700"}>{tag}</Text>
          </Flex>
        </Link>
        <Button size={"sm"} colorScheme={"pink"} mt="2%" mb={"1%"} onClick={handleDelete}>DELETE</Button>
    </Box>
  )
}
