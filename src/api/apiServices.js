// src/api/apiService.ts
const apiClient = axios.create({
  baseURL: "https://backend-portfolio-lac.vercel.app/api", // Replace with the deployed backend URL
  headers: {
    "Content-Type": "application/json",
  },
});
