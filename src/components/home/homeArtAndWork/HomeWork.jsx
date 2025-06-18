import { useEffect, useState } from "react";
import styles from "./homeArtWrk.module.css";
import { api } from "@/data/api";
import SmallLoad from "@/components/smallLaoding/smallLoad";
import { slugify } from "@/utility/slugify";
import Link from "next/link";

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
      setProjects(response2?.data?.slice(0,4));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjData();
  }, []);

  const [btnOpen, setBtnOpen] = useState("");
  return (
    <section className={styles.homeWork}>
      <div className={styles.hWrkHead}>
        <h1>👨‍💻 Our latest completed projects</h1>
      </div>
      {loading ? (
        <SmallLoad />
      ) : (
        <section className={styles.workShow}>
          {projects?.map((data) => {
            const { _id, title, thumbnail } = data;
            // console.log(data);
            const handleBtnOpen = (id) => {
              if (id === _id) {
                setBtnOpen(id);
              }
            };
            const titleLink = slugify(title);
            return (
              <div
                className={styles.projTemp}
                key={_id}
                onMouseOver={() => handleBtnOpen(_id)}
                onMouseLeave={() => handleBtnOpen("")}
              >
                <img src={thumbnail?.photo} alt={`${title} image`} />
                <h4>{title}...</h4>
                {btnOpen === _id && (
                  <Link href={`/work/${titleLink}/${_id}`}>
                    <button>See Full Project</button>
                  </Link>
                )}
              </div>
            );
          })}
        </section>
      )}
      <div className={styles.seeAllWork}>
        <Link href={"/our-works"}>
          <button>See All Completed Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeWork;
