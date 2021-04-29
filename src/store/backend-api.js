// import axios from "axios";
//
// const AXIOS = axios.create({
//   baseURL: `http://localhost:8080/`,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   }
// });

// Add a request interceptor
// AXIOS.interceptors.request.use(function(config) {
//   const token = localStorage.getItem("token");
//   console.log(token);
//   if (token) {
//     config.headers.Authorization = "Bearer " + token;
//   } else {
//     delete config.headers.Authorization;
//   }
//   return config;
// });
