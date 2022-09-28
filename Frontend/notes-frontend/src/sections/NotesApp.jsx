import { Box } from '@chakra-ui/react'
import React from 'react'
import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 

const NotesApp = () => {




  return (
    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}>
      <Navbar/>
    <Box mt={"10%"}>
        <NoteInput/>
        <NoteList/>
    </Box>
    </motion.div>
  )
}

export default NotesApp