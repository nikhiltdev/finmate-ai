import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials:true
});


axiosInstance.interceptors.response.use(
    (response) => response,
    async(error) => {
        console.log("interceptors" , error.config)
        let originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            try {
                await axiosInstance.get("/auth/generate-access-token")
                return axiosInstance(originalRequest)
            } catch (error) {
                window.location.href = "/"
                return Promise.reject(error)
            }
        } 
        return Promise.reject(error);
    }
)


export default axiosInstance
