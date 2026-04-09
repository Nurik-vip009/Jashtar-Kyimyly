// store/useImagesStore.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

// export interface ImageItem {
//   id: number;
//   gallery: number;
//   image: string;
//   title: string | null;
//   date: string;
// }

interface ImagesState {
  imagesCards: Album[];
  loading: boolean;
  error: string | null;
  fetchImages: () => Promise<void>;
}
interface Album {
  id: number;
  title: string;
  cover_image: string;
  date: string;
  photos_count: number;
}

interface MediaResponse {
  id: number;
  photo_title: string;
  video_title: string;
  albums: Album[];
}
export const useImagesStore = create<ImagesState>((set) => ({
  imagesCards: [],
  loading: false,
  error: null,

  fetchImages: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axiosInstance.get<MediaResponse>("/media");

      const transformedData = response.data.albums;

      set({ imagesCards: transformedData, loading: false });
    } catch (err: any) {
      set({ error: "Не удалось загрузить изображения", loading: false });
    }
  },
}));
