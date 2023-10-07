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
  
<Link className=' transform transition duration-500 hover:scale-105 hover:drop-shadow-2xl' to={`restaurantDetailsPage/${id}`}>
    <Card sx={{ width: 280 , height:295 }} >
    <CardMedia
      className=''
      sx={{ height: 160 }}
      image= {IMG_URL+cloudinaryImageId}
      title="restaurants-img"
    />
    <CardContent>

      <Typography component={'div'} className='flex text-center items-center justify-between  '>
       <Typography component={'div'} className='text-xl font-semibold'>{name.substring(0,20)}</Typography> 
        <Typography component={'div'} className='flex gap-1 items-center '>
       <MdStars className='' style={greenStar}/>
        <Typography component={'div'} className=''>{avgRating}</Typography>
        </Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary">
      <Typography component={'div'}>{cuisines.join(', ').substring(0,35)}</Typography>
      <Typography component={'div'}>{areaName}</Typography>
        
      <Typography component={'div'} className='flex justify-between items-center'>
      <div className='font-semibold '>{costForTwo}</div>
      <div  className='text-xs	'>Delivery Timimg - {sla.deliveryTime} mins</div>
      </Typography>
      </Typography>
    </CardContent>
    
  </Card>
</Link>

  )
}

export default RestaurantCard