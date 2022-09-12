import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, image, link }: Props): JSX.Element => (
  <Card sx={{ maxWidth: 250, mx: 'auto' }}>
    <CardContent>
      <Typography gutterBottom variant="h3" component="div">
        {title}
      </Typography>
    </CardContent>
    <CardMedia
      component="img"
      height="140"
      image={`/services/${image}`}
      alt={title}
    />
    <CardActions>
      <Button size="small" component="a" href={link}>
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default ServiceCard;
