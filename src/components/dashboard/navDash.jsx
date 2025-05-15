import Link from "next/link";
import styles from "./dashboard.module.css";

const DashboardNav = () => {
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
              <button>End</button>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default DashboardNav;
