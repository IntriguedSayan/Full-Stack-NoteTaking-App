import { Grid } from '@chakra-ui/react'
import React from 'react'
import { SingleNote } from './SingleNote'

const NoteList = () => {
  return (
        <Grid gridTemplateRows={"auto"} gridTemplateColumns={"repeat(4,1fr"} gap="6">
            <SingleNote/>
        </Grid>
  )
}

export default NoteList