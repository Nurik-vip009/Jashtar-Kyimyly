import { axiosInstance } from "./apiclient";

// Типы данных на основе реального ответа API
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

// Получить данные главной страницы
export const getHomePageData = async (): Promise<HomePageData> => {
  const response = await axiosInstance.get<HomePageData>("/home/");
  return response.data;
};
