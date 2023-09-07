import { useState } from 'react';
import prefectures from './../data/prefectures.json';

export const useDecidePrefecture = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [shuffledPrefectures, setShuffledPrefectures] = useState(prefectures);

  // アニメーション前の都道府県データシャッフル用関数
  const shufflePrefectures = () => {
    const copiedPrefectures = [...prefectures];
    copiedPrefectures.sort(() => Math.random() - 0.5);

    return copiedPrefectures;
  };

  let animationInterval;

  const startAnimation = () => {
    animationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const lastIndex = shuffledPrefectures.length - 1;
        // 最後の画像まで表示したら最初の画像に戻る
        if (prevIndex === lastIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 50);
  };

  const stopAnimation = () => clearInterval(animationInterval);

  return [
    currentImageIndex,
    isAnimating,
    setIsAnimating,
    shuffledPrefectures,
    setShuffledPrefectures,
    shufflePrefectures,
    startAnimation,
    stopAnimation,
  ];
};
