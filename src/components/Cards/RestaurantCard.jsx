import React from 'react'
import { IMG_URL } from '../../constant/constant'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MdStars} from 'react-icons/md'
import { Link } from 'react-router-dom';

const greenStar = {
    color:'green',
    fontSize:'1.2rem'
}
const RestaurantCard = (props) => {
    const {id,name,cloudinaryImageId,areaName,cuisines
        ,avgRating} = props.data.info;
  return (

<Link to={`restaurantDetailsPage/${id}`}>
    <Card sx={{ width: 280 , height:295 }} >
    <CardMedia
      className=''
      sx={{ height: 160 }}
      image= {IMG_URL+cloudinaryImageId}
      title="restaurants-img"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <div className='flex gap-2 items-center '>

       <MdStars  style={greenStar}/> {avgRating}
      </div>
      <Typography variant="body2" color="text.secondary">
      <h5>{cuisines.join(', ').substring(0,35)}</h5>
      <h5>{areaName}</h5>
      </Typography>
    </CardContent>
    
  </Card>
</Link>

  )
}

export default RestaurantCard