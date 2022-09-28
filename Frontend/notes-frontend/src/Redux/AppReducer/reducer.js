import *as types from "./actionTypes"
const initState={

    isLoading:false,
    isError:false,
    notesData:[],
    name:""
}

export const reducer = (oldState=initState,action) => {

    const{type,payload}=action

   switch(type){
    
        case types.GET_NOTES_DATA_REQUEST: return{ ...oldState,isLoading:true}

        case types.GET_NOTES_DATA_SUCCESSFUL:
            console.log(payload)
             return{...oldState,isLoading:false,notesData:[...payload.data],name:payload.name}
        
        case types.GET_NOTES_DATA_FAILURE: return{...oldState,isError:true}

        default: return oldState

   } 
}

