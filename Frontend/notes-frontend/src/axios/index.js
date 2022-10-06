import axios from "axios"

export default axios.create({
    baseURL:"http://localhost:7600"
    // baseURL:"https://sayan-notes-app.herokuapp.com/"
})