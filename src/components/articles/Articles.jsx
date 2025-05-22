"use client";

import { useEffect, useState } from "react";
import styles from "./article.module.css";
import { api } from "@/data/api";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utility/slugify";
import SmallLoad from "../smallLaoding/smallLoad";

const Articles = () => {
  const [articleType, setArticleType] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (artType) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${api}/article/getAll?articleType=${artType}`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      setArticles(data?.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(articleType);
  }, [articleType]);

  return (
    <aside className={styles.articles}>
      <section className={styles.artlBannerSec}>
        <div className={styles.heroCont}>
          <h1>Our Daily News & Articles</h1>
        </div>
      </section>
      {loading ? (
        <SmallLoad />
      ) : (
        <section className={styles.artlShowSec}>
          <div className={styles.artclAct}>
            <button
              className={`${articleType === "" && styles.active}`}
              onClick={() => setArticleType("")}
            >
              All
            </button>
            <button
              className={`${articleType === "article" && styles.active}`}
              onClick={() => setArticleType("article")}
            >
              Article
            </button>
            <button
              className={`${articleType === "news" && styles.active}`}
              onClick={() => setArticleType("news")}
            >
              News
            </button>
          </div>
          <hr />

          <div className={styles.articleData}>
            {articles.length > 0 ? (
              <>
                {articles.map((art) => {
                  const { _id, title, thumbnail, hashtags, articleType } = art;
                  const titleStr = slugify(title);
                  return (
                    <Link key={_id} href={`/pulse/${titleStr}/${_id}`}>
                      <article className={styles.artCont}>
                        <Image
                          src={thumbnail?.photo}
                          width={430}
                          height={230}
                          alt={title}
                        />
                        <p>{articleType}</p>
                        <h4>{title}</h4>
                        <div className={styles.hashtags}>
                          {hashtags?.slice(0, 5).map((h, i) => (
                            <span key={`${h},${i}`}>#{h}</span>
                          ))}
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </>
            ) : (
              <p>{"No Artilcle/News Found"}</p>
            )}
          </div>
        </section>
      )}
    </aside>
  );
};

export default Articles;
