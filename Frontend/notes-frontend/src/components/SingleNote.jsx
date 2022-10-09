import { Badge, Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch,} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteData, getData } from '../Redux/AppReducer/action'
import { DELETE_NOTES_DATA_FAILURE, DELETE_NOTES_DATA_SUCCESS } from '../Redux/AppReducer/actionTypes'
import "./Glass.css"

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

  // border={"1px solid cyan"}
  return (
    <Box  className='glass' height={"auto"} width="220px" borderRadius="12px">
        <Link to={`/update/${id}`}>
          <Flex  direction={"column"}  borderRadius={"10px"}
                justifyContent="center" gap={"2%"}>
              <Box  borderTopRightRadius="10px" borderTopLeftRadius={"10px"}  >
                <Text fontSize={"xl"} color={"black"}>{heading}</Text>
              </Box> 
              <Box  >
                <Text fontSize={"md"} color={"white"}>{description}</Text>
              </Box>  
              <Box  >
                <Badge mr={"25%"}  fontSize={"lg"} color={"orange.700"}>{tag}</Badge>
              </Box> 
          </Flex>
        </Link>
        <Button size={"sm"} colorScheme={"pink"} mt="3%" mb={"1%"} onClick={handleDelete}>DELETE</Button>
    </Box>
  )
}
