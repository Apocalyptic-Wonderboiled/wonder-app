import Button from '@mui/material/Button';

export const StopButton = (props) => {
  return (
    <Button variant="contained" onClick={props.handleClick}>
      APIリクエスト実行！
    </Button>
  );
};
