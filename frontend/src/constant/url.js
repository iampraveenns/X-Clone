// export const baseUrl = "http://localhost:5000"
// // export const baseUrl = "https://x-clone-5bts.onrender.com"

export const baseUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:5000"
  : "https://x-clone-backend-7h2y.onrender.com"