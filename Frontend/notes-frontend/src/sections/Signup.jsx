import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../Redux/AuthReducer/action'
import { SIGUP_FAILURE, SIGUP_SUCCESSFUL } from '../Redux/AuthReducer/actionTypes'
import { useToast } from '@chakra-ui/react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import "./Signup.css"
import Glass from './Glass'
import { NavLink } from 'react-router-dom'

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
          position:"top"
        })
      }else if(res.type===SIGUP_FAILURE){
        toast({
          title: "Something went wrong.",
          description: "Please try again.",
          status: 'error',
          duration: 8000,
          isClosable: true,
          position:"top"
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
      <Glass bgimg={"https://user-images.githubusercontent.com/101392591/193494979-deedef9c-02e9-47ae-9e88-a07e87ba4044.jpg"}>
      <Text fontSize={"4xl"}>SignUp</Text>
        <Input width={"350px"} mt="5%" name="name" onChange={handleChange} placeholder="Add your name here" />
        <Input width={"350px"} mt="5%" name="email" onChange={handleChange} placeholder="Add your email" />
        <Input width={"350px"} type="password" mt="5%" name="password" onChange={handleChange} placeholder="Add your Password" />
        <Button size={"lg"} colorScheme="cyan" display={"block"} onClick={handleSignUp} m={"auto"} mt="3%">SIGNUP</Button>
        <Box mt={"4%"} >
        <NavLink to={"/login"}><Text fontSize={"large"} color="Highlight">Login</Text></NavLink>
        </Box>
      </Glass>
    </motion.div>
  )
}

export default Signup