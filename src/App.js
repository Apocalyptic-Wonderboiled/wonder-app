import logo from './logo.svg';
import './App.css';
import { useChatGpt } from './hooks/useChatGpt';
import { StopButton } from './components/StopButton';
import { TestPrefectureButton } from './components/TestPrefectureButton';
import { useRandomPrefecture } from './hooks/useRandomPrefecture';

function App() {
  const [text, getReply] = useChatGpt();
  const handleClick = () => getReply();
  const [prefecture, getPrefecture] = useRandomPrefecture();
  const handleClick2 = () => getPrefecture();

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
        <p>{prefecture ? prefecture.kanji : '都道府県'}</p>
        <p>{prefecture ? prefecture.romaji : 'todoufuken'}</p>
        <TestPrefectureButton handleClick={handleClick2} />
      </header>
    </div>
  );
}

export default App;
