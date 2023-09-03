import Button from '@mui/material/Button';

export const StartStopButton = (props) => {
  return (
    <Button variant="contained" onClick={props.handleClick}>
      {props.text}
    </Button>
  );
};
