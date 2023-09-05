import { useEffect } from 'react';
import { useChatGpt } from './../hooks/useChatGpt';
import { useDecidePrefecture } from '../hooks/useDecidePrefecture';
import { StartStopButton } from './StartStopButton';
import styles from './DecidePrefecture.module.css';

export const DecidePrefecture = () => {
  const [text, getReply] = useChatGpt();
  const [
    currentImageIndex,
    isAnimating,
    setIsAnimating,
    shuffledPrefectures,
    setShuffledPrefectures,
    shufflePrefectures,
    startAnimation,
    stopAnimation,
  ] = useDecidePrefecture();

  // 初回レンダリング後のみ、配列の事前シャッフル実行（目押し防止）
  useEffect(() => {
    const shuffledPrefectures = shufflePrefectures();
    setShuffledPrefectures(shuffledPrefectures);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      startAnimation();
    } else {
      stopAnimation();
      getReply(shuffledPrefectures[currentImageIndex].romaji);
    }
    return () => stopAnimation();
  }, [isAnimating]);

  const handleStopClick = () => setIsAnimating(false);

  return (
    <>
      <div className={styles.imageContainer}>
        <img
          src={`/images/${shuffledPrefectures[currentImageIndex].image}`}
          alt={shuffledPrefectures[currentImageIndex].kanji}
          className={styles.image}
        />
      </div>
      <h1>あなたが行くのは{shuffledPrefectures[currentImageIndex] && shuffledPrefectures[currentImageIndex].kanji}</h1>
      <p>{text && text}</p>
      <div className={styles.buttonContainer}>
        <StartStopButton handleClick={handleStopClick} text="STOP" />
      </div>
    </>
  );
};
