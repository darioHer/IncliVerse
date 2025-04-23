"use client";

import Library from "../../components/library/Library";
import styles from "../../styles/libraryPage.module.css";

export default function LibraryPage() {
  return (
    <section className={styles.libraryPage}>
      <h1 className={styles.title}>Nuestra Biblioteca</h1>
      <Library />
    </section>
  );
}
