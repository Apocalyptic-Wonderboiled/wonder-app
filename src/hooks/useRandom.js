import { useState } from 'react';

export const useRandom = () => {
  const [landmarkImages, setlandmarkImages] = useState(['img_01.jpg', 'img_02.jpg', 'img_03.jpg']);

  const originalArray = [
    'img_01.jpg',
    'img_02.jpg',
    'img_03.jpg',
    'img_04.jpg',
    'img_05.jpg',
    'img_06.jpg',
    'img_07.jpg',
    'img_08.jpg',
    'img_09.jpg',
    'img_10.jpg',
    'img_11.jpg',
    'img_12.jpg',
    'img_13.jpg',
    'img_14.jpg',
    'img_15.jpg',
  ];

  const getLandmarkImages = () => {
    const result = [];
    const copiedArray = originalArray.slice(); // オリジナルの配列を変更しないためのコピーを作成

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * copiedArray.length);
      const randomElement = copiedArray.splice(randomIndex, 1)[0];
      result.push(randomElement);
    }

    setlandmarkImages(result);
  };

  return [landmarkImages, getLandmarkImages];
};
