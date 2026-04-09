// store/useImagesStore.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

export interface ImageItem {
  id: number;
  gallery: number;
  image: string;
  title: string | null;
  date: string;
}

interface ImagesState {
  imagesCards: ImageItem[];
  loading: boolean;
  error: string | null;
  fetchImages: () => Promise<void>;
}

export const useImagesStore = create<ImagesState>((set) => ({
  imagesCards: [],
  loading: false,
  error: null,

  fetchImages: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<ImageItem[]>("/content/images/");

      // Теперь TS знает, что item имеет тип ImageItem
      const transformedData = response.data.map((item) => ({
        id: item.id,
        gallery: item.gallery,
        image: item.image,
        title: item.title ?? null,
        date: item.date,
      }));

      set({ imagesCards: transformedData, loading: false });
    } catch (err: any) {
      set({ error: "Не удалось загрузить изображения", loading: false });
    }
  },
}));
