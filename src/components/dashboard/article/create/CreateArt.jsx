import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { api } from "@/data/api";
import { useDashAuth } from "../../DashCotext/DashContext";
import SmallLoad from "@/components/smallLaoding/smallLoad";
import ToastP from "@/components/popupToast/ToastP";

const CreateArticle = ({ setOpen, setData }) => {
  const [articleData, setArticleData] = useState({
    title: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const { accessToken } = useDashAuth();

  const [popInfo, setPopInfo] = useState({
    trigger: null,
    type: null,
    message: null,
  });

  const colletArticleData = (e) => {
    setArticleData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const { title, details } = articleData;
  /*Collect Thumbnail image */
  const [thumb, setThumb] = useState([]);
  const [thumbImg, setThumbImg] = useState("");

  const handleThumbInp = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumb(file);
    const thumbUrl = URL.createObjectURL(file);
    setThumbImg(thumbUrl);
  };
  useEffect(() => {
    return () => {
      if (thumbImg) {
        URL.revokeObjectURL(thumbImg);
      }
    };
  }, [thumbImg]);

  /* @Handle Upload Pojects ---> */

  const formData = new FormData();
  formData.append("title", title);
  formData.append("details", details);
  formData.append("thumbnail", thumb);


  const handleUploadProj = async (e) => {
    e.preventDefault();
    console.log(artData);
    // setLoading(true);
    // try {
    //   const res = await fetch(`${api}/article/add`, {
    //     method: "POST",
    //     headers: {
    //       authorization: `Bearer ${accessToken}`,
    //     },
    //     body: formData,
    //   });
    //   const data = await res.json();
    //   setPopInfo({
    //     trigger: Date.now(),
    //     type: data?.success,
    //     message: data?.message,
    //   });
    //   setData(data?.article);
    //   if (data?.success) {
    //     setTimeout(() => {
    //       setOpen(false);
    //       setGallray([]);
    //       setThumb([]);
    //       setThumbImg("");
    //       setArticleData({ title: "", details: "" });
    //     }, 2000);
    //   }
    // } catch (err) {
    //   console.error("Upload failed", err);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className={styles.createArt} onClick={() => setOpen(false)}>
      <div className={styles.closeBtn}>
        <button onClick={() => setOpen(false)}>❌Close</button>
      </div>

      <div className={styles.createForm} onClick={(e) => e.stopPropagation()}>
        <div className={styles.scrollWrap}>
          <form onSubmit={handleUploadProj}>
            <label id={styles.pTitle}>
              <textarea
                placeholder="Article Title"
                name="title"
                value={title}
                onChange={colletArticleData}
              ></textarea>
            </label>
            <label
              className={styles.thumbnailLabel}
              style={{ backgroundImage: thumbImg && `url(${thumbImg})` }}
            >
              <span>
                <FontAwesomeIcon icon={faPlus} /> Thumbnail
              </span>
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                className={styles.thumbnailInput}
                onChange={handleThumbInp}
              />
            </label>

            <label id={styles.pDesc}>
              <textarea
                name="details"
                placeholder="Article Details"
                value={details}
                onChange={colletArticleData}
              ></textarea>
            </label>
            <button type="submit" disabled={loading}>
              {loading ? <SmallLoad /> : "Upload"}
            </button>
          </form>
        </div>
      </div>
      <ToastP popInfo={popInfo} />
    </div>
  );
};

export default CreateArticle;
