import Skeleton from "@/components/skeleton/Skeleton";
import { api } from "@/data/api";
import { slugify } from "@/utility/slugify";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./homeArtWrk.module.css";

const HomeWork = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/project/allProjects`, {
        cache: "no-store",
      });
      const response2 = await response.json();
      setProjects(response2?.data?.slice(0, 4));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjData();
  }, []);

  return (
    <section className={styles.homeWork}>
      <div className={styles.hWrkHead}>
        <h1>Our Latest Projects</h1>
      </div>
      {loading ? (
        <section className={styles.workShow}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={styles.projTemp} style={{ padding: "0" }}>
              <Skeleton
                style={{
                  width: "100%",
                  height: "var(--card-image-height, 200px)",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              />
              <div style={{ padding: "1rem", flex: 1, width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Skeleton style={{ height: "1.2rem", width: "90%" }} />
                <Skeleton style={{ height: "1.2rem", width: "70%" }} />
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className={styles.workShow}>
          {projects?.map((data) => {
            const { _id, title, thumbnail } = data;
            // console.log(data);
            const titleLink = slugify(title);
            return (
              <div
                className={styles.projTemp}
                key={_id}
              >
                <img src={thumbnail?.photo} alt={`${title} image`} />
                <h4>{title}</h4>
                <Link href={`/work/${titleLink}/${_id}`} className={styles.projectLink}>
                  <button>View project</button>
                </Link>
              </div>
            );
          })}
        </section>
      )}
      <div className={styles.seeAllWork}>
        <Link href={"/our-works"}>
          <button>View all projects</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeWork;
