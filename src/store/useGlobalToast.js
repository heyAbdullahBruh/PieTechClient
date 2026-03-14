import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useGlobalToast = create(
  devtools(
    (set) => ({
      toasts: [],

      addToast: (toast) => {
        const id = Date.now();
        set((state) => ({
          toasts: [...state.toasts, { id, ...toast }],
        }));

        setTimeout(() => {
          set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
          }));
        }, toast.duration || 3000);

        return id;
      },

      removeToast: (id) => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }));
      },

      clearAllToasts: () => set({ toasts: [] }),

      success: (message, duration) => {
        const id = Date.now();
        set((state) => ({
          toasts: [...state.toasts, { id, message, type: "success", duration }],
        }));

        setTimeout(() => {
          set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
          }));
        }, duration || 3000);
      },

      error: (message, duration) => {
        const id = Date.now();
        set((state) => ({
          toasts: [...state.toasts, { id, message, type: "error", duration }],
        }));

        setTimeout(() => {
          set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
          }));
        }, duration || 3000);
      },
    }),
    { name: "toast-store" },
  ),
);

export default useGlobalToast;
