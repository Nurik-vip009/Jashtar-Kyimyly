import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

interface Advantages {
  id: number;
  text: string;
}

interface AdvantagesState {
  data: Advantages[];
  loading: boolean;
  error: string | null;
  fetchAdvantages: () => Promise<void>;
}

export const useAdvantagesStore = create<AdvantagesState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchAdvantages: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("home/advantages/");
      
      // трансформация под твой интерфейс
      const transformedData: Advantages[] = response.data.map((apiData: any) => ({
        id: apiData.id ?? 1, // если id нет — ставим 1
        text: apiData.text,
      }));

      console.log("Данные advantages:", transformedData);

      set({ data: transformedData, loading: false });
    } catch (err: any) {
      console.error("Ошибка при загрузке данных:", err.message);
      set({ data: [], loading: false, error: err.message });
    }
  },
}));
