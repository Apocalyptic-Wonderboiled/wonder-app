import { useEffect, useState } from 'react';
import { useChatGpt } from './../hooks/useChatGpt';
import { useDecidePrefecture } from './../hooks/useDecidePrefecture';
import { StartStopButton } from './StartStopButton';
import { Loading } from './Loading';
import styles from './DecidePrefecture.module.css';
import { ErrorAlert } from './ErrorAlert';
import { Header } from './Header';

export const DecidePrefecture = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText, getReply] = useChatGpt();
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
      getReply(shuffledPrefectures[currentImageIndex].romaji)
        .then((reply) => setText(reply))
        .catch((error) => setIsError(true))
        .finally(() => setIsLoading(false));
    }
    return () => stopAnimation();
  }, [isAnimating]);

  const handleStopClick = () => {
    if (text) return;

    setIsAnimating(false);
    setIsLoading(true);
  };

  return (
    <>
      <Header />
      <div className={styles.imageContainer}>
        <img
          src={`/images/DecidePrefecture/${shuffledPrefectures[currentImageIndex].image}`}
          alt={shuffledPrefectures[currentImageIndex].kanji}
          className={styles.image}
        />
      </div>
      <h1>あなたが行くのは{shuffledPrefectures[currentImageIndex] && shuffledPrefectures[currentImageIndex].kanji}</h1>
      {isLoading && <Loading />}
      {isError && <ErrorAlert text="おすすめスポットの取得ができませんでした。もう一度お試しください。" />}
      <p>{text && text}</p>
      <div className={styles.buttonContainer}>
        <StartStopButton handleClick={handleStopClick} text="STOP" />
      </div>
    </>
  );
};
