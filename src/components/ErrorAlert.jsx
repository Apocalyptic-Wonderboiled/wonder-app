import { Alert, AlertTitle } from '@mui/material';

export const ErrorAlert = (props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.text}
    </Alert>
  );
};
