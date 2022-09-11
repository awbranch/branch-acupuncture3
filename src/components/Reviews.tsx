import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const mock = [
  {
    feedback:
      "Molly's insight and knowledge of her craft and the human " +
      'body are impressive. I have been able to take my painful days and ' +
      'reduce them significantly, hoping to go even further. She always ' +
      'provides results and addresses the whole picture in reference to ' +
      'mind/body/spirit.',
    name: 'BAC Client',
  },
  {
    feedback:
      'Results. Molly has a wisdom about many problems, and I have been ' +
      'fortunate to have several conditions improved because of her ' +
      'knowledge and methods to treat medical problems.',
    name: 'BAC Client',
  },
  {
    feedback:
      'Molly is a true healer – she holistically looks at you as a person ' +
      'and treats you accordingly. After each treatment, I am floating. ' +
      'Certainly, would recommend her time and again.',
    name: 'BAC Client',
  },
  {
    feedback: 'The very best!! She is so very cognizant of all your concerns!!',
    name: 'BAC Client',
  },
  {
    feedback:
      'Thank you for all the years of caring for me. You have done for me ' +
      'things no one else in my life has. You came to me when I was very ' +
      'sick, and you always have had faith that I would get better. You are ' +
      'the most special person I know.',
    name: 'BAC Client',
  },
  {
    feedback:
      'You have been a light to me in my quest to be and stay healthy as I ' +
      'know you have been to others. Your gentle ways, the manner in which ' +
      'you listen to your patients and your warmth and caring nature and ' +
      'that of your staff could be a model for any medical staff. I always ' +
      'felt healing begin immediately as I put my hand on the entry door.',
    name: 'BAC Client',
  },
];

const Reviews = (): JSX.Element => {
  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box maxWidth={600} width={1}>
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i}>
              <Box
                width={1}
                height={1}
                component={Card}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                boxShadow={0}
                sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography align={'center'} variant={'body1'}>
                    {item.feedback}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={`— ${item.name}`}
                    />
                  </ListItem>
                </CardActions>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Reviews;
