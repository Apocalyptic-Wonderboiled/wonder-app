import logo from './logo.svg';
import './App.css';
import { useChatGpt } from './hooks/useChatGpt';
import { StartStopButton } from './components/StartStopButton';
import { useRandomPrefecture } from './hooks/useRandomPrefecture';
import { useState, useEffect } from 'react';

function App() {
  const [text, getReply] = useChatGpt();
  const [prefecture, getPrefecture] = useRandomPrefecture();
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
    if (isButtonClicked) return;
    getPrefecture();
  };

  useEffect(() => {
    if (!prefecture) return;
    getReply(prefecture.romaji);
  }, [prefecture]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>デプロイテスト用のテキスト</p>
        <p>{text && isButtonClicked ? text : 'ここにテキストが書かれます'}</p>
        <StartStopButton handleClick={handleClick} text={isButtonClicked ? 'はじめる' : 'STOP'} />
      </header>
    </div>
  );
}

export default App;
