import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

export interface MissionItem {
  id: number;
  image: string;
  order: number;
  is_active: boolean;
}

export interface Goal {
  id: number;
  title: string;
  text: string;
  missions_items: MissionItem[];
}

interface AboutGoalState {
  data: Goal | null;
  loading: boolean;
  error: string | null;
  fetchAboutGoal: () => Promise<void>;
}

export const useAboutGoalStore = create<AboutGoalState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchAboutGoal: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axiosInstance.get<Goal[]>("/movement/missions/");

      // 👉 берем первый элемент
      const apiData = response.data[0];

      // 👉 сортируем картинки
      const sortedItems = (apiData?.missions_items || []).sort(
        (a, b) => a.order - b.order
      );

      set({
        data: {
          id: apiData.id,
          title: apiData.title,
          text: apiData.text,
          missions_items: sortedItems,
        },
        loading: false,
      });
    } catch (err: any) {
      console.error("Ошибка при загрузке целей:", err.message);

      set({
        data: null,
        loading: false,
        error: err.message,
      });
    }
  },
}));
