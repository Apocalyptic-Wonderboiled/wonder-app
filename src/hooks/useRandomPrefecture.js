import { useState } from 'react';
import prefectures from '../data/prefectures.json';

export const useRandomPrefecture = () => {
  const [prefecture, setPrefecture] = useState(null);

  const getPrefecture = () => {
    const randomIndex = Math.floor(Math.random() * prefectures.length);
    setPrefecture(prefectures[randomIndex]);
  };

  return [prefecture, getPrefecture];
};
