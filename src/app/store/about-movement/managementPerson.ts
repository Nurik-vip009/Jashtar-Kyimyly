import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

export interface ManagementPerson {
  id: number;
  image: string;
  full_name: string;
  position: string;
  order: number;
  is_active: boolean;
}

export interface ManagementBlock {
  title: string;
  leaders: ManagementPerson[];
}

interface ManagementState {
  data: ManagementBlock | null;
  loading: boolean;
  error: string | null;
  fetchManagement: () => Promise<void>;
}

export const useManagementStore = create<ManagementState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchManagement: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axiosInstance.get<ManagementBlock[]>(
        "/movement/leadership/"
      );

      const block = response.data[0];

      const sortedLeaders = (block?.leaders || []).sort(
        (a, b) => a.order - b.order
      );

      set({
        data: {
          title: block?.title || "",
          leaders: sortedLeaders,
        },
        loading: false,
      });
    } catch (err: any) {
      console.error("Ошибка при загрузке руководства:", err.message);

      set({
        data: null,
        loading: false,
        error: err.message,
      });
    }
  },
}));
