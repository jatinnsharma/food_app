import React from 'react'
import { SEARCH_CAROUSEL } from '../../constant/constant'

const SearchCarousel = (props) => {
    const {imageId} = props.data
    return  (
    <div>
        <img  className=' h-24' src={SEARCH_CAROUSEL+imageId} alt='' />
    </div>
  )
}

export default SearchCarousel