import { getLocalData, saveLocalData } from "../../utilis/localStorage"
import *as types from "./actionTypes"


const initState={
    isAuth:getLocalData("tokenKey") ? true : false,
    isAuthLoading:false,
    isError:false,
    token:getLocalData("tokenKey") || ""
}

export const reducer=(oldState=initState,action)=>{

    const{type,payload}=action

    switch(type){
        case types.LOGIN_REQUEST:
            return {...oldState,isAuthLoading:true}
        
        case types.LOGIN_SUCCESSFUL:
            console.log(payload)
            saveLocalData("tokenKey",payload)
            return {...oldState,isAuthLoading:false,isAuth:true,token:payload}
         
        case types.LOGIN_FAILURE:
            return {...oldState,isError:true,isAuth:false,isAuthLoading:false,token:""} 
        
        default:return oldState    
    }


}