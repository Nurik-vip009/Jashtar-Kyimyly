// store/videoStore.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

interface VideoResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: VideoItem[];
}
export interface VideoItem {
  id: number;
  title: string;
  date: string;
  video_url: string;
  thumbnail: string;
}

interface VideoState {
  videos: VideoItem[];
  loading: boolean;
  error: string | null;
  fetchVideos: () => Promise<void>;
}

export const useVideoStore = create<VideoState>((set) => ({
  videos: [],
  loading: false,
  error: null,
  fetchVideos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<VideoResponse>("/media/videos/");

      const transformedData = response.data.results;

      set({ videos: transformedData, loading: false });
    } catch (err: any) {
      set({
        error: err.message || "Ошибка при загрузке видео",
        loading: false,
      });
    }
  },
}));
