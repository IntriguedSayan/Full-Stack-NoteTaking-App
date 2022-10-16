import React from 'react'
import { Box, Button, Input} from '@chakra-ui/react'

const EditProfileInput = () => {

  

  return (
    
    <>

        <Box>
              <Box>
                <Input placeholder='edit name' />
              </Box>
              <Box>
                <Input placeholder='edit email' />
              </Box>
              <Button></Button>
        </Box>

    </>

  ) 
}

export default EditProfileInput