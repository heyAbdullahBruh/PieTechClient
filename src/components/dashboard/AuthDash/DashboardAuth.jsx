"use client";
import { useState } from "react";
import styles from "../dashboard.module.css";
import SmallLoad from "@/components/smallLaoding/smallLoad";
import { api } from "@/data/api";

const DashboardAuth = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInpChange = (e) => {
    setAuthData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { email, password } = authData;

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${api}/admin/logIn`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <aside className={styles.dashAuth}>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          name="email"
          placeholder="Mr. Email"
          onChange={handleInpChange}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Ms. Password"
          onChange={handleInpChange}
          value={password}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? <SmallLoad /> : "Try To Auth"}
        </button>
      </form>
    </aside>
  );
};

export default DashboardAuth;
