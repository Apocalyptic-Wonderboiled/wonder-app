import logo from './logo.svg';
import './App.css';
import { useChatGpt } from './hooks/useChatGpt';
import { StopButton } from './components/StopButton';
import { useRandomPrefecture } from './hooks/useRandomPrefecture';
import { useEffect } from 'react';

function App() {
  const [text, getReply] = useChatGpt();
  const [prefecture, getPrefecture] = useRandomPrefecture();
  const handleClick = () => getPrefecture();

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
        <p>{text ? text : 'ここにテキストが書かれます'}</p>
        <StopButton handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
