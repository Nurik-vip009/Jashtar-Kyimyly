import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

// Интерфейс изображения баннера
export interface BannerImage {
  id: number;
  image: string;
}

// Интерфейс баннера (соответствует API)
export interface Banner {
  id: number;
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  images: BannerImage[]; // API возвращает массив images
}

// Интерфейс ответа от API
interface HomePageResponse {
  id: number;
  slug: string;
  home_title: string;
  banner: string;
  banners_list: Banner[]; // Баннеры находятся здесь
  about_movent: string;
  about_blocks: any[];
  events: string;
  events_list: any[];
  news: string;
  news_list: any[];
  brend_material: string;
  merch_list: any[];
}

interface BannerState {
  banners: Banner[];
  loading: boolean;
  error: string | null;
  fetchBanners: () => Promise<void>;
}

export const BannerStore = create<BannerState>((set) => ({
  banners: [],
  loading: false,
  error: null,

  fetchBanners: async () => {
    set({ loading: true, error: null });
    try {
      // Запрашиваем данные с эндпоинта /home/
      const response = await axiosInstance.get<HomePageResponse>("/home/");

      // Баннеры находятся в banners_list
      const bannersList = response.data.banners_list || [];

      set({
        banners: bannersList,
        loading: false,
      });

      console.log("Загружено баннеров:", bannersList.length);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.error("Ошибка загрузки баннеров:", error);
      set({
        error: error.response?.data?.message || "Не удалось загрузить баннеры",
        loading: false,
      });
    }
  },
}));
