import axios from "axios";

const language = localStorage.getItem("lang") || "ru";

export const axiosInstance = axios.create({
  baseURL: "https://api.jashtarkyimyly.kg/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "Accept-Language": language,
  },
});

export const setLanguage = (lang: "ky" | "ru" | "en") => {
  localStorage.setItem("lang", lang);
  axiosInstance.defaults.headers["Accept-Language"] = lang;
};
