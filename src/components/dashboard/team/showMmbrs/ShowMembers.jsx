import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../team.module.css";
import { useState } from "react";
import { api } from "@/data/api";
import { useDashAuth } from "../../DashCotext/DashContext";
import SmallLoad from "@/components/smallLaoding/smallLoad";
import ToastP from "@/components/popupToast/ToastP";

const ShowMembers = ({ data, onDelete }) => {
  const { _id, name, email, role, phone, memberProfile } = data;




  return (
    <>
      <article
        className={styles.memberData}
        onMouseOver={() => setIsdeleteBtn(true)}
        onMouseLeave={() => setIsdeleteBtn(false)}
      >
        <Image
          src={memberProfile?.photo}
          width={150}
          height={150}
          alt={`${name}'s Profile`}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{email}</p>
        <p>{phone}</p>
        {isDeleteBtn && (
          <button
            className={styles.deleteBtn}
            onClick={() => handleDeleteOpen(_id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />{" "}
          </button>
        )}
      </article>

      
    </>
  );
};

export default ShowMembers;
