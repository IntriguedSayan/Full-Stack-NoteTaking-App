import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ReqAuth = ({children}) => {

   const isAuth = useSelector((store)=>store.authReducer.isAuth)

    console.log(isAuth)

    if(isAuth){
        return children
    }

    return <Navigate to={"/login"} />
   

}

export default ReqAuth