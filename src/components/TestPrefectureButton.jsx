import Button from '@mui/material/Button';

export const TestPrefectureButton = (props) => {
  return (
    <Button variant="contained" onClick={props.handleClick}>
      ランダム都道府県
    </Button>
  );
};
