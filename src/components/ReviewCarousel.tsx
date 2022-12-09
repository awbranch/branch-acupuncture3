import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface Props {
  reviews: Array<Review>;
}

const ReviewCarousel = ({ reviews }: Props): JSX.Element => {
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
          {reviews.map((review, i) => (
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
                    {review.text}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={`— ${review.name}`}
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

export default ReviewCarousel;
