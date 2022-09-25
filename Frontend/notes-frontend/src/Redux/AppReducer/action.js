import axios from "../../axios"
import *as types from "./actionTypes"

const getDataRequest=()=>{
    return {type:types.GET_NOTES_DATA_REQUEST}
}

export const getData=(params)=>(dispatch)=>{

        dispatch(getDataRequest())

    return axios.get("/notes")
                .then((res)=>dispatch({type:types.GET_NOTES_DATA_SUCCESSFUL,payload:res.data}))
                .catch((err)=>dispatch({type:types.GET_NOTES_DATA_FAILURE}))    

}

const addDataRequest=()=>{

    return {type:types.ADD_NOTES_DATA_REQUEST}

}

export const addData=(payload)=>(dispatch)=>{

        dispatch(addDataRequest())
     
    return axios.post("/notes/create",payload)
                .then((res)=>dispatch({type:types.ADD_NOTES_DATA_SUCCESSFUL}))    
                .catch((err)=>dispatch({type:types.ADD_NOTES_DATA_FAILURE}))

}



