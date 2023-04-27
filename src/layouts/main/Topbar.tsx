import NextLink from 'next/link';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';

interface Props {
  onSidebarOpen: () => void;
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen, colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <NextLink href="/">
        <Box
          display={'flex'}
          title="Branch Acupuncture Center"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              colorInvert ? '/logo-w-text-white.svg' : '/logo-w-text-black.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </NextLink>

      <Stack
        direction="row"
        spacing={2}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <NavItem title="Services" link="/services" colorInvert={colorInvert} />
        <NavItem title="Theory" link="/theory" colorInvert={colorInvert} />
        <NavItem title="About" link="/about" colorInvert={colorInvert} />
        <NavItem
          title="Appointments"
          link="/appointments"
          colorInvert={colorInvert}
        />
      </Stack>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: colorInvert
              ? alpha(theme.palette.secondary.main, 0.5)
              : alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon
            color={colorInvert ? 'secondary' : 'primary'}
            fontSize="small"
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
