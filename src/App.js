import { createContext } from 'react';
import Container from '@mui/material/Container';
import { Top } from './components/Top';
import { DecidePrefecture } from './components/DecidePrefecture';
import { useScreen } from './hooks/useScreen';
import bgimage from './bg.png';

export const ScreenContext = createContext();

const background = { backgroundImage: `url(${bgimage})` };

function App() {
  const screen = useScreen();

  return (
    <ScreenContext.Provider value={screen}>
      <div style={background}>
        <Container justifycontent="center" alignitems="center" style={{ minHeight: '100vh' }}>
          {screen.isTop ? <Top handleClick={screen.setScreenDecidePrefecture} /> : <DecidePrefecture />}
        </Container>
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
