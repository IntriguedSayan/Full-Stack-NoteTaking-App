import { Grid,} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/AppReducer/action'

import { SingleNote } from './SingleNote'

const NoteList = () => {

    
    const dispatch=useDispatch()
    const notesData=useSelector((store)=>store.appReducer.notesData)
    
    useEffect(()=>{

      dispatch(getData())
     

    },[dispatch])
  return (
        <Grid  m="auto" mt="6%" width={"80%"} gridTemplateColumns={"repeat(4,1fr)"} gap="6">
          {
            notesData?.map((elem)=>(
              <SingleNote  key={elem._id} id={elem._id}  heading={elem.heading}
               description={elem.description} tag={elem.tag} />
            ))
          }
            
        </Grid>
  )
}

export default NoteList