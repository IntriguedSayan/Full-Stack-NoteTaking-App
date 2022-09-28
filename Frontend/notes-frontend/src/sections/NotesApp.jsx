import { Box } from '@chakra-ui/react'
import React from 'react'
// import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 
import NoteInputModal from '../components/NoteInputModal'
import notesPic from "../assets/notesbg.jpg"

const NotesApp = () => {




  return (
    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}>
      <Navbar/>
    <Box  backgroundImage={notesPic} backgroundSize="cover" mt={"2%"} width={"100%"} >
   
        <NoteInputModal/>
        <NoteList/>
    </Box>
    </motion.div>
  )
}

export default NotesApp