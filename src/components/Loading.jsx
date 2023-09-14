import { LinearProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './Loading.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FE6561',
    },
  },
});

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loadingText}>おすすめスポット生成中...</p>
      <ThemeProvider theme={theme}>
        <LinearProgress />
      </ThemeProvider>
    </div>
  );
};
