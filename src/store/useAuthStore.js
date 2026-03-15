import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    (set) => ({
      accessToken: "",
      auth: null,

      setAccessToken: (token) => set({ accessToken: token }),
      setAuth: (authData) => set({ auth: authData }),

      refreshToken: async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL || ""}/api/admin/accessToken`,
            {
              method: "GET",
              credentials: "include",
            },
          );
          const getData = await response.json();
          if (getData?.success) {
            set({ accessToken: getData?.token });
            return getData?.token;
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },

      clearAuth: () => set({ accessToken: "", auth: null }),
    }),
    { name: "auth-store" },
  ),
);

export default useAuthStore;
