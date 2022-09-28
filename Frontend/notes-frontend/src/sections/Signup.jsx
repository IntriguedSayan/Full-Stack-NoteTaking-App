import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../Redux/AuthReducer/action'
import { SIGUP_FAILURE, SIGUP_SUCCESSFUL } from '../Redux/AuthReducer/actionTypes'
import { useToast } from '@chakra-ui/react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Signup = () => {

  const [signUpState,setSignUpState]=useState({name:"",email:"",password:""})
  const dispatch=useDispatch()
  const toast=useToast()

  const handleChange=(e)=>{

      const{name,value}=e.target
      setSignUpState({...signUpState,[name]:value})

  }

  const handleSignUp=()=>{
    dispatch(signUp(signUpState)).then((res)=>{
      if(res.type===SIGUP_SUCCESSFUL){
        toast({
          title: 'Account created.',
          description: "Your account has been created",
          status: 'success',
          duration: 8000,
          isClosable: true,
        })
      }else if(res.type===SIGUP_FAILURE){
        toast({
          title: "Something went wrong.",
          description: "Please try again.",
          status: 'error',
          duration: 8000,
          isClosable: true,
        })
        
      }
    })
  }

  return (
    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}>
      <Navbar/>
    <Box width={"40%"} border="1px solid black" m={"auto"} mt="10%" height={"60%"} pb="10px">
                     <Text fontSize={"4xl"}>SignUp</Text>
        <Input width={"350px"} mt="5%" name="name" onChange={handleChange} placeholder="Add your name here" />
        <Input width={"350px"} mt="5%" name="email" onChange={handleChange} placeholder="Add your email" />
        <Input width={"350px"} mt="5%" name="password" onChange={handleChange} placeholder="Add your Password" />
        <Button size={"lg"} colorScheme="cyan" display={"block"} onClick={handleSignUp} m={"auto"} mt="3%">SIGNUP</Button>
    </Box>
    </motion.div>
  )
}

export default Signup