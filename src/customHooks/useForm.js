"use client";
import { useState, useCallback } from "react";

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleChangeWithCountryCode = useCallback((e, currentCountryCode) => {
    const { name, value } = e.target;
    if (name === "phone" && !value.startsWith(currentCountryCode)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setField = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setMultipleFields = useCallback((fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialState);
  }, [initialState]);

  const resetToEmpty = useCallback(() => {
    setFormData(
      Object.keys(initialState).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {}),
    );
  }, [initialState]);

  const populateForm = useCallback((data) => {
    setFormData(data);
  }, []);

  return {
    formData,
    setFormData,
    handleChange,
    handleChangeWithCountryCode,
    setField,
    setMultipleFields,
    resetForm,
    resetToEmpty,
    populateForm,
  };
};

export default useForm;
