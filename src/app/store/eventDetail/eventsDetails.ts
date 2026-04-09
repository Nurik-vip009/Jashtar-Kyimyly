import { create } from 'zustand';
import { axiosInstance } from '@/app/api/apiclient'; // Путь к вашему файлу с инстансом

interface EventDetail {
  id: number;
  title: string;
  image: string;
  detail_image: string;
  date: string;
  short_text: string;
  full_text: string;
}

interface EventDetailState {
  eventDetail: EventDetail | null;
  loading: boolean;
  error: string | null;
  fetchEventDetail: (id: number) => Promise<void>;
  clearDetail: () => void;
}

export const useEventDetailStore = create<EventDetailState>((set) => ({
  eventDetail: null,
  loading: false,
  error: null,

  fetchEventDetail: async (id: number) => {
    set({ loading: true, error: null });
    try {
      // Здесь указываем относительный путь. 
      // Итоговый URL: http://157.230.235.0/api/event/events-detail/{id}/
      const response = await axiosInstance.get(`event/events-detail/${id}/`);
      set({ eventDetail: response.data, loading: false });
    } catch (err: any) {
      set({ 
        error: err.response?.data?.detail || 'Ошибка при загрузке данных', 
        loading: false 
      });
    }
  },

  clearDetail: () => set({ eventDetail: null, error: null })
}));