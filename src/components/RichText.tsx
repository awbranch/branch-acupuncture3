import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  document: Document;
}

const RichText = ({ document }: Props): JSX.Element => {
  return (
    <>
      {documentToReactComponents(document, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <Typography variant="body1" paragraph>
              {children}
            </Typography>
          ),
          [INLINES.HYPERLINK]: (node, children) => (
            <Link component={NextLink} href={node.data.uri}>
              {children}
            </Link>
          ),
        },
      })}
    </>
  );
};

export default RichText;
