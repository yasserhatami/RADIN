import Api from "@/utils/axios.js";

const auth = {
    login: async (data, headers) => {
        return await Api({
            url: "rest-auth/login/",
            method: 'post',
            data,
            headers
        }).then(res => {
                return res
            })
    }}
    
export default auth