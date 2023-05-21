import Api from "@/utils/axios.js";

const contract = {
    createContract: async (data) => {
        return await Api({
            url: "contracts/",
            method: 'post',
            data
            
        }).then(res => {
                return res
            })
    }}
    
export default contract