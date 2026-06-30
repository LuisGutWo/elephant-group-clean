import React, { useRef } from "react";
import styles from "./ContactForm.module.css";

function FileUploadField({ onFileSelect, currentFile }) {
  const fileInputRef = useRef(null);
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleFileValidation = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE) {
      alert("El archivo excede el tamaño máximo permitido de 10MB.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    onFileSelect(selectedFile);
  };

  return (
    <div className={styles.formGroup}>
      <label htmlFor="form-file" className={styles.label}>
        Adjuntar Vector o Archivo de Diseño (Opcional - Máx 10MB)
      </label>
      <div className={styles.fileUploadContainer}>
        <input
          type="file"
          id="form-file"
          ref={fileInputRef}
          onChange={handleFileValidation}
          className={styles.fileInputHidden}
          accept=".pdf,.ai,.eps,.png,.jpg,.jpeg"
        />
        <button
          type="button"
          className={styles.fileTriggerBtn}
          onClick={() => fileInputRef.current?.click()}
        >
          {currentFile ? "Cambiar Archivo" : "Seleccionar Archivo"}
        </button>
        <span className={styles.fileNameDisplay}>
          {currentFile
            ? currentFile.name
            : "Ningún archivo seleccionado (.ai, .pdf, .eps, .jpg)"}
        </span>
      </div>
    </div>
  );
}

export default FileUploadField;
