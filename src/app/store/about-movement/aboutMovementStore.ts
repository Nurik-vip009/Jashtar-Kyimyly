import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

export interface MovementItem {
  id: number;
  image: string;
  order: number;
  is_active: boolean;
}

export interface AboutMovement {
  id: number;
  title: string;
  text: string;
  movement_items: MovementItem[];
}

interface AboutMovementState {
  data: AboutMovement | null;
  loading: boolean;
  error: string | null;
  fetchAboutMovement: () => Promise<void>;
}

export const useAboutMovementStore = create<AboutMovementState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchAboutMovement: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axiosInstance.get<AboutMovement[]>(
        "/movement/movement/"
      );

      const apiData = response.data[0];

      const sortedItems = (apiData?.movement_items || []).sort(
        (a, b) => a.order - b.order
      );

      set({
        data: {
          id: apiData.id,
          title: apiData.title,
          text: apiData.text,
          movement_items: sortedItems,
        },
        loading: false,
      });
    } catch (err: any) {
      console.error("Ошибка при загрузке данных:", err.message);

      set({
        data: null,
        loading: false,
        error: err.message,
      });
    }
  },
}));
