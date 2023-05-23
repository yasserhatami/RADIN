import Api from "@/utils/axios.js";
// let token = localStorage.getItem('token')
const toDo = {
    createTask: async (data) => {
        return await Api({
            url: "dashboard/to-do/",
            method: 'POST',
            data
        }).then(res => {
                return res
            })
    }}
    
export default toDo