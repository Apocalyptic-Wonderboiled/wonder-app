import { useEffect } from 'react';
import { useChatGpt } from './../hooks/useChatGpt';
import { useRandomPrefecture } from './../hooks/useRandomPrefecture';
import { StartStopButton } from './StartStopButton';
import { Header } from './Header';

export const DecidePrefecture = () => {
  const [text, getReply] = useChatGpt();
  const [prefecture, getPrefecture] = useRandomPrefecture();

  const handleClick = () => getPrefecture();

  useEffect(() => {
    if (!prefecture) return;
    getReply(prefecture.romaji);
  }, [prefecture]);

  return (
    <>
      <Header />
      <h1>都道府県画像シャッフル画面</h1>
      <img src={'都道府県の画像のパス'} alt="都道府県の画像" />
      <p>{text && text}</p>
      <StartStopButton handleClick={handleClick} text="STOP" />
    </>
  );
};
