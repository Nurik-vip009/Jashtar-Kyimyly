import axios from "axios";

const language =
	typeof window !== "undefined" ? localStorage.getItem("lang") || "ru" : "ru";

export const axiosInstance = axios.create({
	baseURL: "http://157.230.235.0/api/",
	headers: {
		"Content-Type": "application/json",
		Accept: "*/*",
		// УДАЛИТЕ ИЛИ ЗАКОММЕНТИРУЙТЕ СТРОКУ НИЖЕ:
		// "ngrok-skip-browser-warning": "true",
		"Accept-Language": language,
	},
});

export const setLanguage = (lang: "ky" | "ru" | "en") => {
	localStorage.setItem("lang", lang);
	axiosInstance.defaults.headers["Accept-Language"] = lang;
};
