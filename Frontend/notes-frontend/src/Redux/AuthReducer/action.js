import *as types from "./actionTypes"
import axios from "../../axios/index"

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