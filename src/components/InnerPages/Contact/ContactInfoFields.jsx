import React from "react";
import styles from "./ContactForm.module.css";

function ContactInfoFields({ formData, handleInputChange }) {
  return (
    <div className={styles.rowGrid}>
      <div className={styles.formGroup}>
        <label htmlFor="form-name" className={styles.label}>
          Nombre Completo *
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={styles.input}
          required
          placeholder="Ej: Juan Pérez"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="form-email" className={styles.label}>
          Correo Electrónico *
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={styles.input}
          required
          placeholder="ejemplo@empresa.cl"
        />
      </div>
    </div>
  );
}

export default ContactInfoFields;
