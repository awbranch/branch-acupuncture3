import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Menu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Theory',
    href: '/theory',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Appointments',
    href: '/appointments',
  },
  {
    name: 'Testimonials',
    href: '/#testimonials',
  },
  {
    name: 'Questions',
    href: '/appointments#questions',
  },
  {
    name: 'Contact',
    href: '/about#contact',
  },
];

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar = ({ open, variant, onClose }: Props): JSX.Element => {
  const router = useRouter();

  const goToLink = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: { xs: '100%', sm: 400 },
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          onClick={() => onClose()}
        >
          <IconButton>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Stack spacing={2}>
          {Menu.map((m) => (
            <Button
              key={m.name}
              onClick={() => goToLink(m.href)}
              sx={{ fontSize: '1.1rem' }}
            >
              {m.name}
            </Button>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
