// components/TextEditor.jsx
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Link from "@tiptap/extension-link";
import styles from "./textEditor.module.css";

import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faListUl,
  faListOl,
  faQuoteRight,
  faUndo,
  faRedo,
  faCode,
  faHeading,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faAlignJustify,
  faImage,
  faMinus,
  faLink,
  faUnlink,
  faParagraph,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";

const MenuBar = ({ editor }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  // const [imgSize, setImgSize] = useState("1");

  const insertImage = () => {
    if (imgUrl.trim()) {
      editor.chain().focus().setImage({ src: imgUrl, alt: imgAlt }).run();
      setImgUrl("");
      setImgAlt("");
    }
  };

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const isActive = (name, options) =>
    editor.isActive(name, options) ? styles.active : "";

  const [headingOpen, setHeadingOpen] = useState(false);
  const [alignOpen, setAlignOpen] = useState(false);
  const [imageInpOpen, setImageInpOpen] = useState(false);

  return (
    <div className={styles.toolbar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={isActive("bold")}
      >
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={isActive("italic")}
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={isActive("underline")}
      >
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={isActive("strike")}
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>

      <div className={styles.headControl}>
        <button
          onClick={() => {
            setHeadingOpen((prev) => !prev);
          }}
        >
          Heading
        </button>
        {headingOpen && (
          <div className={styles.headings}>
            {[1, 2, 3, 4].map((level) => (
              <button
                key={level}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level }).run()
                }
                className={isActive("heading", { level })}
              >
                <FontAwesomeIcon icon={faHeading} />
                {level}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={isActive("paragraph")}
      >
        <FontAwesomeIcon icon={faParagraph} /> Normal
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={isActive("bulletList")}
      >
        <FontAwesomeIcon icon={faListUl} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={isActive("orderedList")}
      >
        <FontAwesomeIcon icon={faListOl} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={isActive("blockquote")}
      >
        <FontAwesomeIcon icon={faQuoteRight} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={isActive("codeBlock")}
      >
        <FontAwesomeIcon icon={faCode} />
      </button>

      <div className={styles.alignControl}>
        <button onClick={() => setAlignOpen((prev) => !prev)}>align</button>
        {alignOpen && (
          <div className={styles.aligns}>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={isActive({ textAlign: "left" })}
            >
              <FontAwesomeIcon icon={faAlignLeft} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={isActive({ textAlign: "center" })}
            >
              <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={isActive({ textAlign: "right" })}
            >
              <FontAwesomeIcon icon={faAlignRight} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={isActive({ textAlign: "justify" })}
            >
              <FontAwesomeIcon icon={faAlignJustify} />
            </button>
          </div>
        )}
      </div>

      <div className={styles.imageControl}>
        <button onClick={() => setImageInpOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faImage} />
        </button>
        {imageInpOpen && (
          <div className={styles.imgInp}>
            <input
              placeholder="Image URL"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <input
              placeholder="Image Alt"
              value={imgAlt}
              onChange={(e) => setImgAlt(e.target.value)}
            />
            <button onClick={insertImage}>
              <FontAwesomeIcon icon={faImage} /> Add
            </button>
          </div>
        )}
      </div>

      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <button onClick={setLink} className={isActive("link")}>
        <FontAwesomeIcon icon={faLink} />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <FontAwesomeIcon icon={faUnlink} />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <FontAwesomeIcon icon={faUndo} />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

const TextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
      StarterKit.configure({
        link: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className={styles.editorWrapper}>
      <MenuBar editor={editor} />
      <div className={styles.scrollContainer}>
        <EditorContent editor={editor} className={styles.editorContent} />
      </div>
      {/* lorem500 */}
    </div>
  );
};

export default TextEditor;
