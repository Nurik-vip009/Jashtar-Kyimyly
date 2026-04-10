// src/app/store/materials/materials.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface Material {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface MaterialsState {
  materials: Material[];
  loading: boolean;
  error: string | null;
  fetchMaterials: () => Promise<void>;
}

export const useMaterialsStore = create<MaterialsState>((set) => ({
  materials: [],
  loading: false,
  error: null,

  fetchMaterials: async () => {
    set({ loading: true, error: null });
    try {
      // Список мерча из /home/ (поле merch_list)
      const response = await axiosInstance.get("/home/");
      const merchList = response.data.merch_list || [];

      const mappedMaterials = merchList.map((item: any) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      }));
      set({ materials: mappedMaterials, loading: false });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({
        error: error.response?.data?.message || "Ошибка загрузки товаров",
        loading: false,
      });
    }
  },
}));
