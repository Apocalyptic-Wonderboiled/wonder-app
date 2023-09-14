import { StartStopButton } from './StartStopButton';
import { Header } from './Header';
import styles from './Top.module.css';
import { useRandom } from '../hooks/useRandom';
import { useEffect } from 'react';

export const Top = (props) => {
  const [landmarkImages, getLandmarkImages] = useRandom();

  useEffect(() => {
    getLandmarkImages();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.leftContainer}>
          <img src={'/images/Top/footprints_l.png'} className={styles.footprintsLeftStyle} alt="足跡の画像" />
          <img src={`/images/Top/${landmarkImages[0]}`} className={styles.image1Style} alt="ランドマーク画像" />
          <img src={`/images/Top/${landmarkImages[1]}`} className={styles.image3Style} alt="ランドマーク画像" />
        </div>

        <div className={styles.centerContainer}>
          <img src={'/images/Top/japan.png'} alt="日本列島の画像" />
          <StartStopButton handleClick={props.handleClick} text="はじめる" />
        </div>

        <div className={styles.rightContainer}>
          <img src={`/images/Top/${landmarkImages[2]}`} className={styles.image2Style} alt="ランドマーク画像" />
          <img src={'/images/Top/footprints_r.png'} className={styles.footprintsRighttStyle} alt="足跡の画像" />
        </div>
      </div>
    </>
  );
};
