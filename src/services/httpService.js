import axios from "axios";
import {toast} from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },

    error =>{
        toast.error("An unexpected error occurred.");
    }
)

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    get:axios.get,
    post: axios.post
}