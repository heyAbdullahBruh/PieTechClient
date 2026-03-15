"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GoogleContext({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={"6LfFg4ssAAAAAOU8xBeUNcK4lO0gK9uWa8NADcWt"}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
