import axios from "axios";

const language = localStorage.getItem("lang") || "ru";

export const axiosInstance = axios.create({
  baseURL: "http://157.230.235.0/api/", // Используем рабочий URL
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
