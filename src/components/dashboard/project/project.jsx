"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./project.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateProject from "./post/createProject";
import { useState } from "react";

const Project = () => {
  const [createOpen, setCreateOpen] = useState(false);
  return (
    <aside className={styles.project}>
      <section className={styles.create}>
        <div className={styles.createPop}>
          <button onClick={()=>setCreateOpen(true)}>
            <FontAwesomeIcon icon={faPlus} /> Add A New Project
          </button>
        </div>
        {createOpen && (
          <CreateProject open={createOpen} setOpen={setCreateOpen} />
        )}
      </section>

      <section className={styles.readAndUpdate}>
        <div className={styles.read}>
          <h1>Read</h1>
        </div>
        <div className={styles.update}>
          <h1>update</h1>
        </div>
      </section>
    </aside>
  );
};

export default Project;
