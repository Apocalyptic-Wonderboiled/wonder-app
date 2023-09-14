import styles from './StartStopButton.module.css';
import PlaceIcon from '@mui/icons-material/Place';

export const StartStopButton = (props) => {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      <PlaceIcon fontSize="midium" className={styles.icon} />
      {props.text}
    </button>
  );
};
