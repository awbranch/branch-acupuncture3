import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Section from 'components/Section';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import path from 'path';
import { promises as fs } from 'fs';

interface Props {
  questions: Array<Question>;
}

const Appointments: NextPage = ({ questions }: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Appointments</Typography>
        <Typography variant="body1">
          Pellentesque urna nulla, tincidunt quis tempus sed, lacinia vel urna.
          Duis orci justo, ultricies et gravida ac, porttitor et nulla.
          Suspendisse eget dignissim massa, at rutrum ex. Integer ut ante at
          libero dictum dapibus condimentum ac sapien. Morbi non lacus quis
          justo feugiat scelerisque. Aliquam at blandit sapien, quis ultricies
          eros. Phasellus orci metus, porttitor sit amet maximus laoreet,
          convallis mollis neque. Nullam ac metus velit. Ut ut vehicula erat.{' '}
        </Typography>

        <Section id="schedule-session">
          <Typography variant="h2">Schedule a Session</Typography>
          <Box>Session</Box>
        </Section>

        <Section id="questions">
          <Typography variant="h2">Questions</Typography>
          <List
            sx={{
              listStyleType: 'none',
            }}
          >
            {questions.map((question) => (
              <ListItem
                key={question.id}
                sx={{ display: 'block', px: 0, py: 3 }}
              >
                <Typography variant="h3">{question.question}</Typography>
                <Typography variant="body1">
                  <div dangerouslySetInnerHTML={{ __html: question.answer }} />
                </Typography>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </Main>
  );
};

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'questions.json');
  const questions = JSON.parse(await fs.readFile(file, 'utf8'));

  return {
    props: { questions },
  };
}

export default Appointments;
