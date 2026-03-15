"use client";
import { useCallback, useState } from "react";

export const useToast = (
  initialState = { trigger: false, message: "", type: true },
) => {
  const [popInfo, setPopInfo] = useState(initialState);

  const showToast = useCallback((message, type = true) => {
    setPopInfo({ trigger: true, message, type });
  }, []);

  const showSuccess = useCallback((message) => {
    setPopInfo({ trigger: true, message, type: true });
  }, []);

  const showError = useCallback((message) => {
    setPopInfo({ trigger: true, message, type: false });
  }, []);

  const hideToast = useCallback(() => {
    setPopInfo((prev) => ({ ...prev, trigger: false }));
  }, []);

  const resetToast = useCallback(() => {
    setPopInfo(initialState);
  }, [initialState]);

  return {
    popInfo,
    setPopInfo,
    showToast,
    showSuccess,
    showError,
    hideToast,
    resetToast,
  };
};

export default useToast;
