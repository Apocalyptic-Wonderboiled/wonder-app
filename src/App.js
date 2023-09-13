import { createContext } from 'react';
import Container from '@mui/material/Container';
import { Top } from './components/Top';
import { DecidePrefecture } from './components/DecidePrefecture';
import { useScreen } from './hooks/useScreen';

export const ScreenContext = createContext();

function App() {
  const screen = useScreen();

  return (
    <ScreenContext.Provider value={screen}>
      <Container justifycontent="center" alignitems="center" style={{ minHeight: '100vh' }}>
        {screen.isTop ? <Top handleClick={screen.setScreenDecidePrefecture} /> : <DecidePrefecture />}
      </Container>
    </ScreenContext.Provider>
  );
}

export default App;
