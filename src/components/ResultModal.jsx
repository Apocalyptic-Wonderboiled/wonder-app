import { useState } from 'react';
import Modal from '@mui/material/Modal';
import PlaceIcon from '@mui/icons-material/Place';
import styles from './ResultModal.module.css';

export const ResultModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalLabel}>
          <h3 id="modal-modal-title">
            <PlaceIcon fontSize="large" />
            <span className={styles.modalLabelText}>あなたが行くのは</span>
          </h3>
        </div>
        <div className={styles.modalMain}>
          <div className={styles.modalImageContainer}>
            <img
              // src={`/images/DecidePrefecture/${props.image}`}
              src={`/images/DecidePrefecture/${'1_aomori.png'}`}
              // alt={shuffledPrefectures[currentImageIndex].kanji}
              className={styles.modalImage}
            />
          </div>
          <p id="modal-description" className={styles.modalDescription}>
            こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
          </p>
        </div>
      </div>
    </Modal>
  );
};
