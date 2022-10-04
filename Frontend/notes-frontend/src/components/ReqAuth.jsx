import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ReqAuth = ({children}) => {

   const {isAuth}=useSelector((store)=>{
        return{
            isAuth:store.authReducer.isAuth
        }
        
    },shallowEqual)

    console.log(isAuth)

    if(isAuth){
        return children
    }

    return <Navigate to={"/login"} />
   

}

export default ReqAuth