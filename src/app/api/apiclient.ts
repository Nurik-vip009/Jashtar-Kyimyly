import axios from "axios";

const language = localStorage.getItem("lang") || "ru";

export const axiosInstance = axios.create({
  baseURL: "http://157.230.235/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "ngrok-skip-browser-warning": "true",
    "Accept-Language": language,
  },
});

// Функция для смены языка динамически
export const setLanguage = (lang: "ky" | "ru" | "en") => {
  localStorage.setItem("lang", lang); // сохраняем выбранный язык
  axiosInstance.defaults.headers["Accept-Language"] = lang; // обновляем хедер
};
