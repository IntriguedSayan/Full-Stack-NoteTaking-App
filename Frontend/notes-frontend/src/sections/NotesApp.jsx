import { Box } from '@chakra-ui/react'
import React from 'react'
import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'

const NotesApp = () => {




  return (
    <Box mt={"10%"}>
        <NoteInput/>
        <NoteList/>
    </Box>
  )
}

export default NotesApp