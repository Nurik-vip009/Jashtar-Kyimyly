import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

// Типы данных
export interface BannerImage {
  id: number;
  image: string;
}

export interface Banner {
  id: number;
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  images: BannerImage[];
}

export interface Advantage {
  id: number;
  title: string;
  text: string;
}

export interface AboutBlock {
  id: number;
  description: string;
  advantages: Advantage[];
}

export interface Event {
  id: number;
  title: string;
  data: string;
  image: string;
  short_text: string;
}

export interface News {
  id: number;
  data: string;
  news_image: string;
  description: string;
}

export interface Merch {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface HomePageData {
  id: number;
  slug: string;
  home_title: string;
  banner: string;
  banners_list: Banner[];
  about_movent: string;
  about_blocks: AboutBlock[];
  events: string;
  events_list: Event[];
  news: string;
  news_list: News[];
  brend_material: string;
  merch_list: Merch[];
}

interface HomeStore {
  data: HomePageData | null;
  loading: boolean;
  error: string | null;
  fetchHomeData: () => Promise<void>;
  banners: Banner[];
  aboutBlock: AboutBlock | null;
  events: Event[];
  news: News[];
  merch: Merch[];
}

export const useHomeStore = create<HomeStore>((set, get) => ({
  data: null,
  loading: false,
  error: null,
  banners: [],
  aboutBlock: null,
  events: [],
  news: [],
  merch: [],

  fetchHomeData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<HomePageData>("/home/");
      const data = response.data;

      set({
        data,
        banners: data.banners_list || [],
        aboutBlock: data.about_blocks?.[0] || null,
        events: data.events_list || [],
        news: data.news_list || [],
        merch: data.merch_list || [],
        loading: false,
      });
    } catch (err) {
      console.error("Error loading home data:", err);
      set({
        error: err instanceof Error ? err.message : "Ошибка загрузки данных",
        loading: false,
      });
    }
  },
}));
