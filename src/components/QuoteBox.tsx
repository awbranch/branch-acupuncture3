import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  text: string;
  author: string;
}

const QuoteBox = ({ text, author }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        color: 'text.highlight',
        textAlign: 'center',
        my: 16,
        mx: 'auto',
        maxWidth: '550px',
      }}
    >
      <Box component={'img'} src={'/logo-red.svg'} width={50} />

      <Typography variant="body1" component="div">
        <Box
          component="div"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 500,
            fontStyle: 'italic',
            lineHeight: 1.4,
            mt: 1,
          }}
        >
          “{text}”
        </Box>
      </Typography>
      <Typography variant="body2" component="div">
        <Box
          component="div"
          sx={{ fontSize: '1.15rem', fontWeight: 500, mt: 2 }}
        >
          {author}
        </Box>
      </Typography>
    </Box>
  );
};

export default QuoteBox;
