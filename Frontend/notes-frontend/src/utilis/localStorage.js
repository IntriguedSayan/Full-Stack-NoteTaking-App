const getLocalData=(key)=>{

    if(key){
        const data=localStorage.getItem(key)
        return data
    }
    
}

const saveLocalData=(key,data)=>{

    if(key && data){
        localStorage.setItem(key,data)
    }

}

export { getLocalData,saveLocalData }
