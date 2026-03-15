"use client";
import { useCallback, useState } from "react";

export const useFetch = (options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(
    async (url, fetchOptions = {}) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          ...options,
          ...fetchOptions,
          headers: {
            "Content-Type": "application/json",
            ...options?.headers,
            ...fetchOptions?.headers,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Something went wrong");
        }

        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [options],
  );

  const executeWithAuth = useCallback(
    async (url, fetchOptions = {}, token) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          ...options,
          ...fetchOptions,
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options?.headers,
            ...fetchOptions?.headers,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Something went wrong");
        }

        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [options],
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    error,
    loading,
    execute,
    executeWithAuth,
    reset,
    setData,
  };
};

export default useFetch;
