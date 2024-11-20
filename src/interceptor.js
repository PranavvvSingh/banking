import axios from "axios"

const BASE_URL = import.meta.VITE_BASE_URL

const apiClient = axios.create({
   baseURL: BASE_URL, // Backend base URL
})


apiClient.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem("jwtToken") // Retrieve token from storage

      if (token) {
         config.headers["Authorization"] = `Bearer ${token}` // Attach token to headers
      }

      return config
   },
   (error) => {
      return Promise.reject(error)
   },
)


apiClient.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response && error.response.status === 401) {
         console.error("Unauthorized, logging out...")
         localStorage.removeItem("jwtToken")
         window.location.href = "/log-in"
      }
      return Promise.reject(error)
   },
)

export default apiClient
