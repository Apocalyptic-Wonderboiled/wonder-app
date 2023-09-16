import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.appName}>Prefecture Picker</h1>
        <h2 className={styles.subtitle}>旅に出よう 〜行き先ランダム決定アプリ〜</h2>
      </div>
    </>
  );
};
