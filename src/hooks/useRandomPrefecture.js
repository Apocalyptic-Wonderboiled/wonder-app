import { useState } from 'react';
import prefecturesData from '../data/prefectures.json';

export const useRandomPrefecture = () => {
  const [prefecture, setPrefecture] = useState(null);

  const getPrefecture = () => {
    const randomIndex = Math.floor(Math.random() * prefecturesData.length);
    setPrefecture(prefecturesData[randomIndex]);
  };

  return [prefecture, getPrefecture];
};
