import axios from "axios";

// Create an Axios instance with a base URL
const apiInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

// Request interceptor to modify requests before they are sent
apiInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
      `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor to handle responses
apiInstance.interceptors.response.use(
  (response) => {
    console.log("Received response from URL:", response.config.url);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  },
);

// Function to perform GET request
export default apiInstance;
