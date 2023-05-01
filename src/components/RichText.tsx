import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';

interface Props {
  document: PortableTextBlock[];
}

const RichText = ({ document }: Props): JSX.Element => {
  const components = {
    marks: {
      link: ({ children, value }) => (
        <Link component={NextLink} href={value.href}>
          {children}
        </Link>
      ),
    },
    block: {
      h2: ({ children }) => (
        <Typography variant="h2" paragraph>
          {children}
        </Typography>
      ),
      normal: ({ children }) => (
        <Typography variant="body1" paragraph>
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
