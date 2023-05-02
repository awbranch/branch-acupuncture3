import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { Title, Para } from './elements';

interface Props {
  document: PortableTextBlock[];
}

const EmailText = ({ document }: Props): JSX.Element => {
  const components = {
    h1: {
      normal: ({ children }) => <Title>{children}</Title>,
    },
    block: {
      normal: ({ children }) => <Para>{children}</Para>,
    },
  };

  return <PortableText value={document} components={components as any} />;
};

export default EmailText;
