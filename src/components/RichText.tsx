import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';

interface Props {
  document: PortableTextBlock[];
  colorInvert?: boolean;
}

const RichText = ({ document, colorInvert }: Props): JSX.Element => {
  const sx = colorInvert ? { color: 'common.white' } : {};
  const components = {
    marks: {
      link: ({ children, value }) => (
        <Link component={NextLink} href={value.href} sx={sx}>
          {children}
        </Link>
      ),
    },
    block: {
      h1: ({ children }) => (
        <Typography variant="h1" paragraph sx={sx}>
          {children}
        </Typography>
      ),
      h2: ({ children }) => (
        <Typography variant="h2" paragraph sx={sx}>
          {children}
        </Typography>
      ),
      h3: ({ children }) => (
        <Typography variant="h3" paragraph sx={sx}>
          {children}
        </Typography>
      ),
      h4: ({ children }) => (
        <Typography variant="h4" paragraph sx={sx}>
          {children}
        </Typography>
      ),
      h5: ({ children }) => (
        <Typography variant="subtitle1" paragraph sx={sx}>
          {children}
        </Typography>
      ),
      normal: ({ children }) => (
        <Typography variant="body1" paragraph sx={sx}>
          {children}
        </Typography>
      ),
    },
  };

  return (
    <div>
      <PortableText value={document} components={components as any} />
    </div>
  );
};

export default RichText;
