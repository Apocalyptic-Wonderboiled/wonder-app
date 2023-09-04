import { useState } from 'react';
import Container from '@mui/material/Container';
import { Top } from './components/Top';
import { DecidePrefecture } from './components/DecidePrefecture';

function App() {
  const [isTopPage, setIsTopPage] = useState(true);

  const linkDecidePrefecturePage = () => setIsTopPage(false);

  return (
    <Container justifycontent="center" alignitems="center" style={{ minHeight: '100vh' }}>
      {isTopPage ? <Top handleClick={linkDecidePrefecturePage} /> : <DecidePrefecture />}
    </Container>
  );
}

export default App;
