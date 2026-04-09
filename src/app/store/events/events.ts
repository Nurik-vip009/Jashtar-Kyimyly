import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

// Структура одного события из API
export interface EventItem {
  id: number;
  title: string;
  image: string; // В API это строка, а не массив объектов
  date: string;
  short_text: string;
}

// Структура всего ответа страницы
export interface EventsPageData {
  id: number;
  upcoming_title: string;
  upcoming_events: EventItem[];
  archive_title: string;
  archive_events: EventItem[];
}

interface EventsState {
  eventsPage: EventsPageData | null;
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
}

export const useEventsStore = create<EventsState>((set) => ({
  eventsPage: null,
  loading: false,
  error: null,

  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      // Путь должен соответствовать вашему API
      const response = await axiosInstance.get<EventsPageData[]>("event/events-page/");
      
      // Поскольку API возвращает массив с одним объектом конфигурации страницы:
      set({ eventsPage: response.data[0] }); 
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({ error: error.response?.data?.message || "Ошибка при загрузке данных" });
    } finally {
      set({ loading: false });
    }
  },
}));