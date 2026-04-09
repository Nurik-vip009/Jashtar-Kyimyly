// src/app/store/events/events.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

export interface Events {
  id: number;
  title: string;
  description: string;
  date: string;
  event_status: string;
  images: { id: number; image: string; event: number }[];
}

interface EventsState {
  event: Events[]; // Список всех событий
  loading: boolean;
  error: string | null;
  fetchevents: () => Promise<void>;
}

export const useEventsStore = create<EventsState>((set) => ({
  event: [],
  loading: false,
  error: null,

  fetchevents: async () => {
    set({ loading: true, error: null });
    try {
      // Запрос к вашему новому API
      const response = await axiosInstance.get<any[]>("/event/events-page/");
      const data = response.data[0];
      console.log(data)

      // Объединяем предстоящие и архивные события в один массив для фильтрации
      const allEvents = [
        ...data.upcoming_events.map((e: any) => ({
          ...e,
          description: e.short_text,
          event_status: "upcoming",
          images: [{ id: e.id, image: e.image, event: e.id }]
        })),
        ...data.archive_events.map((e: any) => ({
          ...e,
          description: e.short_text,
          event_status: "past",
          images: [{ id: e.id, image: e.image, event: e.id }]
        }))
      ];

      set({ event: allEvents, loading: false });
    } catch (err) {
      set({ error: "Ошибка загрузки", loading: false });
    }
  },
}));