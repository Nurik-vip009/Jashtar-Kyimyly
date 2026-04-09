import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
  fetchnews: () => Promise<void>;
}

export const NewsStore = create<NewsState>((set) => ({
  news: [],
  loading: false,
  error: null,

  fetchnews: async () => {
    set({ loading: true, error: null });
    try {
      // axiosInstance уже содержит Accept-Language через setLanguage
      const response = await axiosInstance.get<News[]>("/home");
      console.log(response);

      // Преобразуем данные при необходимости
      const transformedData = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        date: item.date,
        image: item.image,
      }));

      set({ news: transformedData });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({
        error: error.response?.data?.message || "Что-то пошло не так",
      });
      console.error("Ошибка при загрузке новостей:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
