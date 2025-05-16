"use client";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { api } from "@/data/api";
import { useDashAuth } from "./DashCotext/DashContext";
import SmallLoad from "../smallLaoding/smallLoad";
import ToastP from "../popupToast/ToastP";
import { useState } from "react";

const DashboardNav = () => {
  const { accessToken, setAccessToken } = useDashAuth();
  const [loading, setLoading] = useState(false);

  const [popInfo, setPopInfo] = useState({
    trigger: null,
    type: null,
    message: null,
  });
  const handleLogOut = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/admin/logOut`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      setPopInfo({
        trigger: Date.now(),
        type: data?.success,
        message: data?.message,
      });

      if (data?.success) {
        setTimeout(() => {
          setAccessToken("");
          window.location.reload();
        }, 2000);
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <aside className={styles.dashboardNav}>
      <section className={styles.dashNavSec}>
        <ul>
          <li>
            <Link href={"/dashboard"}>
              <button>Dashboard</button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/project"}>
              <button>Projects</button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/article"}>
              <button>Articles</button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/team"}>
              <button>Teams</button>
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} disabled={loading}>
              {loading ? <SmallLoad /> : "End"}
            </button>
          </li>
        </ul>
      </section>
      <ToastP popInfo={popInfo} />
    </aside>
  );
};

export default DashboardNav;
