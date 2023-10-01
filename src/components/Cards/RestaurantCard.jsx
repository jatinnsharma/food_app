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
        ,avgRating,costForTwo,sla} = props.data.info;
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

      <div className='flex text-center items-center justify-between  '>
       <div className='text-xl font-semibold'>{name}</div> 
        <div className='flex gap-1 items-center '>
       <MdStars className='' style={greenStar}/>
        <div className=''>{avgRating}</div>
        </div>
      </div>
      <Typography variant="body2" color="text.secondary">
      <h5>{cuisines.join(', ').substring(0,35)}</h5>
      <h5>{areaName}</h5>
        
      <div className='flex justify-between items-center'>
      <h5 className='font-semibold '>{costForTwo}</h5>
      <h5 className='text-xs	'>Delivery Timimg - {sla.deliveryTime} mins</h5>
      </div>
      </Typography>
    </CardContent>
    
  </Card>
</Link>

  )
}

export default RestaurantCard