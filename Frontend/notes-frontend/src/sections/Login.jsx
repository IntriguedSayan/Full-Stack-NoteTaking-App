import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  NavLink, useLocation, useNavigate } from 'react-router-dom'
import { logIn } from '../Redux/AuthReducer/action'
import { LOGIN_FAILURE, LOGIN_SUCCESSFUL } from '../Redux/AuthReducer/actionTypes'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 
import "./Login.css"
import Glass from './Glass'


const Login = () => {

  const[loginState,setLoginState]=useState({email:"",password:""})
  const dispatch=useDispatch()
  const location=useLocation()
  const toast=useToast()
  const Navigate=useNavigate()

  const comingFrom=location.state?.from?.pathname || "/notes"
 
  const handleChange=(e)=>{

    const {name,value}=e.target 
    setLoginState({...loginState,[name]:value})

 }
 const handleClick=()=>{

  dispatch(logIn(loginState)).then((res)=>{
    if(res.type===LOGIN_SUCCESSFUL){
       toast({
        title: "Login Successful",
        description: "Welcome to notes section. Start writing your notes",
        status: 'success',
        duration: 8000,
        isClosable: true,
        position:"top"
       })
       Navigate(comingFrom)
    }else if(res.type===LOGIN_FAILURE){
      toast({
        title: "Login failed",
        description: "Please try after some time with correct credentials.",
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
     exit={{x:window.innerWidth,transition:{duration:0.5}}}
    >
      <Navbar/>
      <Glass bgimg={"https://user-images.githubusercontent.com/101392591/193494994-66849985-36cd-4612-a93a-a8cc08b1ee17.jpg"}>
      <Text fontSize={"4xl"}>LOGIN</Text>
        <Input width={"350px"} mt="5%" name="email" onChange={handleChange} placeholder="type your email" />
        <Input width={"350px"} type="password" mt="5%" name="password" onChange={handleChange} placeholder="type your Password" />
        <Button size={"lg"} colorScheme="green" onClick={handleClick} display={"block"} m={"auto"} mt="3%">LOGIN</Button>

        <Box mt={"4%"} >
        <NavLink to={"/signup"}><Text fontSize={"large"} color="Highlight">SignUp</Text></NavLink>
        </Box>
      </Glass>
    </motion.div>
  )
}

export default Login