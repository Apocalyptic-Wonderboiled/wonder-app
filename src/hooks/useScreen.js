import { useCallback, useState } from 'react';

// 画面の状態を管理するhooks
export const useScreen = () => {
  const [isTop, setIsTop] = useState(true);

  const setScreenTop = useCallback((current) => {
    setIsTop(current);
  }, []);

  const setScreenDecidePrefecture = () => setIsTop(false);

  return {
    isTop,
    setScreenTop,
    setScreenDecidePrefecture,
  };
};
