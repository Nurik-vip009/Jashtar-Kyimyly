import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  cta_text: string;
  cta_link: string; // поправил название: у тебя было ta_link
}

interface BannerState {
  banners: Banner[];
  loading: boolean;
  error: string | null;
  fetchBanners: () => Promise<void>;
}

export const BannerStore = create<BannerState>((set) => ({
  banners: [],
  loading: false,
  error: null,

  fetchBanners: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<Banner[]>(`home/banners/`);

      const transformedData: Banner[] = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        cta_text: item.cta_text,
        cta_link: item.cta_link, // добавил
      }));

      set({ banners: transformedData });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({
        error: error.response?.data?.message || "Не удалось загрузить баннеры",
      });
    } finally {
      set({ loading: false });
    }
  },
}));
