import { create } from "zustand";
import { setLanguage } from "../api/apiclient";
import { useImagesStore } from "./Media/images";
import { useAboutMovementStore } from "./about-movement/aboutMovementStore"; // пример стора с запросами
import { NewsStore } from "./news/news";
// import { NewsDetailStore } from "./news/newsDetail";
import { useVideoStore } from "./Media/video";
// import { useAboutMovementStore } from "./about-movement/aboutMovementStore"; // пример стора с запросами
import { useAboutMovementStore2 } from "./aboutMovement/aboutMovement";
// import { NewsStore } from "./news/news";
import { BannerStore } from "./banner/banner";
import { useAdvantagesStore } from "./advantages/advantages";
import { useEventsStore } from "./events/events";

interface LanguageState {
  currentLang: "ky" | "ru" | "en";
  changeLang: (lang: "ky" | "ru" | "en") => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLang: (localStorage.getItem("lang") as "ky" | "ru" | "en") || "ru",
  changeLang: (lang) => {
    setLanguage(lang); // меняем axios хедер
    localStorage.setItem("lang", lang);
    set({ currentLang: lang });

    // сразу дергаем стор, чтобы обновить данные
    useAboutMovementStore.getState().fetchAboutMovement();
    NewsStore.getState().fetchnews();
    useVideoStore.getState().fetchVideos();
    useImagesStore
      .getState()
      .fetchImages()
      .catch((err) => console.error(err));
    useEventsStore.getState().fetchevents();
    BannerStore.getState().fetchBanners();
    useAboutMovementStore2.getState().fetchAboutMovement();
    useAdvantagesStore.getState().fetchAdvantages();
  },
}));
