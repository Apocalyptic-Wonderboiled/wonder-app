import { useState } from 'react';
import Container from '@mui/material/Container';
import { Top } from './components/Top';
import { DecidePrefecture } from './components/DecidePrefecture';

function App() {
  const [isTopPage, setIsTopPage] = useState(true);

  const linkDecidePrefecturePage = () => setIsTopPage(false);

  return <>{isTopPage ? <Top handleClick={linkDecidePrefecturePage} /> : <DecidePrefecture />}</>;
}

export default App;
