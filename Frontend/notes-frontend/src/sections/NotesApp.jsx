import { Box } from '@chakra-ui/react'
import React from 'react'
// import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 
import NoteInputModal from '../components/NoteInputModal'
// import notesPic from "../assets/notesbg.jpg"
import { useSelector } from 'react-redux'

const NotesApp = () => {


  const notesData=useSelector((store)=>store.appReducer.notesData)

  return (
    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}>
      <Navbar/>
    <Box  backgroundImage={"https://user-images.githubusercontent.com/101392591/194741844-b2203008-b0fa-4b83-bb6f-0ce289371831.jpg"} backgroundSize="cover" height={notesData.length>4?"auto":"100vh"} mt={"2%"} width={"100%"} >
   
        <NoteInputModal/>
        <NoteList/>
    </Box>
    </motion.div>
  )
}

export default NotesApp