// src/app/store/detail/detailStore.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface GalleryImage {
  id: number;
  image: string;
  order: number;
}

export interface SimilarItem {
  id: number;
  image: string;
}

export interface DetailMaterial {
  id: number;
  title: string;
  description: string;
  price: string;
  main_image: string;
  gallery: GalleryImage[];
  similar_items: SimilarItem[];
}

interface DetailState {
  selectedMaterial: DetailMaterial | null;
  loading: boolean;
  error: string | null;
  fetchMaterialById: (id: number) => Promise<void>;
}

export const useDetailStore = create<DetailState>((set) => ({
  selectedMaterial: null,
  loading: false,
  error: null,

  fetchMaterialById: async (id: number) => {
    set({ loading: true, error: null });
    try {
      // Детальная информация из /merchitems/{id}/
      const response = await axiosInstance.get(`/merchitems/${id}/`);
      console.log("Деталь мерча:", response.data);

      set({
        selectedMaterial: {
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          price: response.data.price,
          main_image: response.data.main_image,
          gallery: response.data.gallery || [],
          similar_items: response.data.similar_items || [],
        },
        loading: false,
      });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.error("Ошибка загрузки детали:", err);
      set({
        error: error.response?.data?.message || "Ошибка загрузки товара",
        loading: false,
        selectedMaterial: null,
      });
    }
  },
}));
