import *as types from "./actionTypes"
import axios from "../../axios/index"
import { getLocalData } from "../../utilis/localStorage"


const signUpRequest=()=>{

    return {type:types.SIGUP_REQUEST}
}

export const signUp=(payload)=>(dispatch)=>{

    dispatch(signUpRequest())
    return axios.post("/auth/signup",payload)
            .then(()=>dispatch({type:types.SIGUP_SUCCESSFUL}))
            .catch((err)=>dispatch({type:types.SIGUP_FAILURE,msg:err}))

}

const loginRequest=()=>{

    return {type:types.LOGIN_REQUEST}

}

export const logIn=(payload)=>(dispatch)=>{

    dispatch(loginRequest())
  return axios.post("/auth/login",payload)
         .then((res)=>dispatch({type:types.LOGIN_SUCCESSFUL,payload:res.data.token}))
         .catch((err)=>dispatch({type:types.LOGIN_FAILURE}))

}

export const logOut=(params)=>(dispatch)=>{

    dispatch({type:types.LOGOUT_REQUEST})
            try{
                return dispatch({type:types.LOGOUT_SUCCESSFUL})
            }catch(err){
                return dispatch({type:types.LOGOUT_FAILURE,payload:err})
            }
 
}

export const profileUpdate=(payload,id)=>(dispatch)=>{

    const token=getLocalData("tokenKey")

    dispatch({type:types.PROFILE_UPDATE_REQUEST})
    return axios.patch(`/user/${id}`,payload,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>dispatch({type:types.PROFILE_UPDATE_SUCCESSFULL}))
      .catch((err)=>dispatch({type:types.PROFILE_UPDATE_FAILURE,err:err}))

}