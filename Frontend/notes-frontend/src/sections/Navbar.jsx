import { Flex } from '@chakra-ui/react'
import React from 'react'
import NavbarComp from '../components/NavbarComp'
const routes=[
    {
        "to":"/",
        "tile":"HOMEPAGE"
    },{
        "to":"/signup",
        "tile":"SIGNUP"
    },{
        "to":"/login",
        "tile":"LOGIN"
    },{
        "to":"/notes",
        "tile":"NOTES"
    }
]
const Navbar = () => {
  return (
    <Flex backgroundColor="black"  border={"1px solid white"} justifyContent="space-around"
    alignItems={"center"} position="fixed" width={"100%"} top="0" zIndex="2" height="80px" >

        {
            routes.map((elem)=>(

                <NavbarComp key={elem.to} to={elem.to} title={elem.tile} />

            ))
        }

    </Flex>
  )
}

export default Navbar