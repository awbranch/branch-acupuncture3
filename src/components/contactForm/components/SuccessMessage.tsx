import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { PortableTextBlock } from 'sanity';
import RichText from '@/components/RichText';

interface Props {
  message: PortableTextBlock[];
  onDone: () => void;
}

const SuccessMessage = ({ message, onDone }: Props): JSX.Element => {
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
      <RichText document={message} />

      <Button
        sx={{ minWidth: 150, mt: 5 }}
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
