import *as types from "./actionTypes"
const initState={

    isLoading:false,
    isError:false,
    notesData:[]

}

export const reducer = (oldState=initState,action) => {

    const{type,payload}=action

   switch(type){
    
        case types.GET_NOTES_DATA_REQUEST: return{ ...oldState,isLoading:true}

        case types.GET_NOTES_DATA_SUCCESSFUL: return{...oldState,isLoading:false,notesData:[...payload]}
        
        case types.GET_NOTES_DATA_FAILURE: return{...oldState,isError:true}

        default: return oldState

   } 
}

