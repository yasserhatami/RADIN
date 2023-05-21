import Api from "@/utils/axios.js";

const toDo = {
    rigester: async (data, headers) => {
        return await Api({
            url: "dashboard/to-do/",
            method: 'post',
            data,
            headers
        }).then(res => {
                return res
            })
    }}
    
export default toDo