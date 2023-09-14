import Button from '@mui/material/Button';
import PlaceIcon from '@mui/icons-material/Place';

export const StartStopButton = (props) => {
  return (
    <Button variant="contained" onClick={props.handleClick}>
      <PlaceIcon fontSize="small" />
      {props.text}
    </Button>
  );
};
