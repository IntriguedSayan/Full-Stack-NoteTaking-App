import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarComp = ({to,title,disp}) => {
  return (
    <Box>
        <NavLink to={to}>
            <Text color={"white"} display={disp} fontSize={{base:"small",md:"large",lg:"xl"}}>{title}</Text>
        </NavLink>
    </Box>
  )
}

export default NavbarComp