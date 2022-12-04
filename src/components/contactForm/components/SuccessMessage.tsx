import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface Props {
  type: FormType;
  onDone: () => void;
}

const SuccessMessage = ({ type, onDone }: Props): JSX.Element => {
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
      {type === 'message' ? (
        <Typography variant="body1" paragraph>
          Thank you for contacting the Branch Acupuncture Center. Your question
          will be reviewed and replied to via email as soon as possible.
        </Typography>
      ) : (
        <Typography variant="body1" paragraph>
          Thank you for requesting to become a Branch Acupuncture Center client.
          Your request will be reviewed and replied to via email as soon as
          possible.
        </Typography>
      )}
      <Typography variant="body1" paragraph sx={{ mb: 5 }}>
        We appreciate your business.
      </Typography>
      <Button
        sx={{ minWidth: 150 }}
        component={'a'}
        variant="contained"
        color="primary"
        size="large"
        onClick={onDone}
      >
        Close
      </Button>
    </Box>
  );
};

export default SuccessMessage;
