import NextLink from 'next/link';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <NextLink href="/" passHref>
        <Box
          display={'flex'}
          component="a"
          title="Branch Acupuncture Center"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={'img'} src="/logo-dark.svg" height={1} width={1} />
        </Box>
      </NextLink>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NextLink href="/services" passHref>
            <Link underline="none" component="a" color="text.primary">
              Services
            </Link>
          </NextLink>
        </Box>
        <Box marginLeft={3}>
          <NextLink href="/theory" passHref>
            <Link underline="none" component="a" color="text.primary">
              Theory
            </Link>
          </NextLink>
        </Box>
        <Box marginLeft={3}>
          <NextLink href="/about" passHref>
            <Link underline="none" component="a" color="text.primary">
              About
            </Link>
          </NextLink>
        </Box>
        <Box marginLeft={3}>
          <NextLink href="/appointments" passHref>
            <Link underline="none" component="a" color="text.primary">
              Appointments
            </Link>
          </NextLink>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
