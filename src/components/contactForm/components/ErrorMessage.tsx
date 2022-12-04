import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface Props {
  onRetry: () => void;
  message: string;
}

const ErrorMessage = ({ onRetry, message }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '350px',
        background: theme.palette.grey['100'],
        textAlign: 'center',
        px: 10,
        py: 3,
      }}
    >
      <Typography variant="body1" paragraph>
        We apologize, but there was an error when attempting to submit your
        message to the server.
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 5 }}>
        {message}
      </Typography>

      <Button
        sx={{ minWidth: 150 }}
        component={'a'}
        variant="contained"
        color="primary"
        size="large"
        onClick={onRetry}
      >
        Retry
      </Button>
    </Box>
  );
};

export default ErrorMessage;
