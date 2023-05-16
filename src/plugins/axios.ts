import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useGenericStore } from "@/stores/generics";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

/* REQUEST INTERCEPTORS */
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const token = useAuthStore().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    useGenericStore().setLoading(true);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
/* RESPONSE INTERCEPTORS */
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    useGenericStore().setLoading(false);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    useGenericStore().setLoading(false);

    return Promise.reject(error);
  }
);

export default {
  install: function (app: any) {
    app.config.globalProperties.$axios = instance;
  },
};
