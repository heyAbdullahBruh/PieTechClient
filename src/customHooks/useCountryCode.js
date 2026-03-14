"use client";
import { useState, useCallback } from "react";

export const useCountryCode = (defaultCode = "+1") => {
  const [countryCode, setCountryCode] = useState(defaultCode);

  const fetchCountryCode = useCallback(async () => {
    try {
      const response = await fetch("https://ipwho.is/");
      const data = await response.json();

      if (data?.success && data?.calling_code) {
        const code = data.calling_code.startsWith("+")
          ? data.calling_code
          : `+${data.calling_code}`;
        setCountryCode(code);
        return code;
      }
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }

    setCountryCode(defaultCode);
    return defaultCode;
  }, [defaultCode]);

  const formatPhoneNumber = useCallback((phone) => {
    const { parsePhoneNumberFromString } = require("libphonenumber-js");
    const phoneNumber = parsePhoneNumberFromString(phone);
    return phoneNumber ? phoneNumber.formatInternational() : phone;
  }, []);

  const validatePhone = useCallback(
    (phone) => {
      if (!phone.startsWith(countryCode)) {
        return false;
      }
      return true;
    },
    [countryCode],
  );

  return {
    countryCode,
    setCountryCode,
    fetchCountryCode,
    formatPhoneNumber,
    validatePhone,
  };
};

export default useCountryCode;
