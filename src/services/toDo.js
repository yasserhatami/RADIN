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
    },
    getAllTasks: async () => {
        return await Api({
            url: "dashboard/to-do/",
        }).then(res => {
            console.log(res);
            return res
           
        })
    }
}

export default toDo