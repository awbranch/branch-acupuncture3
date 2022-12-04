import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropagateLoader from 'react-spinners/PropagateLoader';

const ProcessingMessage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '350px',
        background: theme.palette.grey['100'],
        textAlign: 'center',
        px: 10,
        py: 3,
      }}
    >
      <Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your message is being submitted, please wait...
        </Typography>
        <PropagateLoader
          color={theme.palette.primary.main}
          loading={true}
          size={12}
        />
      </Box>
    </Box>
  );
};

export default ProcessingMessage;
