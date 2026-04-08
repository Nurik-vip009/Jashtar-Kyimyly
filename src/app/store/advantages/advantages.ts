import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

interface Advantages {
  id: number;
  text: string;
  title: string;
}

interface HomeResponse {
  about_blocks: Advantages[];
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
      const response = await axiosInstance.get<HomeResponse>("/home");

      const transformedData = response.data.about_blocks;

      set({ data: transformedData, loading: false });
    } catch (err: any) {
      console.error("Ошибка при загрузке:", err.message);
      set({ data: [], loading: false, error: err.message });
    }
  },
}));
