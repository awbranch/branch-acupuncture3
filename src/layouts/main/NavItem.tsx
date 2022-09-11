import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

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
          underline={hasActiveLink ? 'always' : 'none'}
          component="a"
          color={linkColor}
          sx={{ fontSize: '1rem', fontWeight: 400 }}
        >
          {title}
        </Link>
      </NextLink>
    </Box>
  );
};

export default NavItem;
