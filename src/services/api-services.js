import { publicAxios, privateAxios } from "./base-service";
const ID = localStorage.getItem("token");
const header = {
  // headers: { Authorization: `${localStorage.getItem('token')}` },
  headers: { Authorization: `Bearer ${ID}` },
};
console.log("id", ID);
// headers: { Authorization: `Bearer ${ID}` },

export const registerService = (payload) =>
  publicAxios.post("/auth/local/register/", payload);

export const loginService = (payload) =>
  publicAxios.post("/auth/local", payload);

export const forgotPasswordService = (email) =>
  publicAxios.get(`/generateotps/${email}`);
// publicAxios.get(`/generateotps/rajesh.g@rejolut.com/`);

export const verifyMailOtpService = (payload) =>
  publicAxios.get(`/otps/${payload}`);

export const resetPassword = (payload, otp) =>
  publicAxios.put(`/forgetpassword/${otp}`, payload);

  export const categoriesService = (payload) =>
    publicAxios.get("/rental-categories", payload);

export const userDataService = (payload, id) =>
  privateAxios.put(`/users/${id}`, payload, header);

