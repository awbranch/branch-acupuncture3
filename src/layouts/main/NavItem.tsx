import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
  link: string;
  colorInvert: boolean;
}

const NavItem = ({ title, link, colorInvert }: Props): JSX.Element => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = activeLink.indexOf(link) === 0;
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <NextLink href={link} passHref>
        <Link
          underline={hasActiveLink ? 'always' : 'hover'}
          component="a"
          color={linkColor}
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            textDecorationThickness: '2px',
          }}
        >
          <Typography variant="h4" component="span">
            {title}
          </Typography>
        </Link>
      </NextLink>
    </Box>
  );
};

export default NavItem;
