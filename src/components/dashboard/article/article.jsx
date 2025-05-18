"use client";

import { useEffect, useState } from "react";
import styles from "./article.module.css";
import { api } from "@/data/api";

const ArticleP = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({});
  const [loading, setLoading] = useState(false);

  const [Articles, setArticles] = useState([]);

  const fetchArtclData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/article/allArticles`);
      const response2 = await response.json();
      setArticles(response2?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtclData();
  }, []);

  useEffect(() => {
    if (newArticle && newArticle?._id) {
      setArticles((prev) => {
        const exists = prev.some((p) => p._id === newArticle._id);
        return exists ? prev : [newArticle, ...prev];
      });
    }
  }, [newArticle]);

  const handleArticleUpdate = (updatedArt) => {
    setArticles((prev) =>
      prev.map((p) => (p._id === updatedArt._id ? updatedArt : p))
    );
  };

  const handleArticleCut = (ArtclId) => {
    setArticles((prev) => prev.filter((p) => p._id !== ArtclId));
  };
  return (
    <aside className={styles.article}>
      <section className={styles.create}></section>
      <section className={styles.readArt}></section>
    </aside>
  );
};

export default ArticleP;
