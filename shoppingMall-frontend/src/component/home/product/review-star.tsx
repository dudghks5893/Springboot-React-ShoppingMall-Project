import React, { useMemo } from 'react';

interface ReviewStarIProps {
  index : number,
  rate : number
}

const ReviewStar = ({index, rate} : ReviewStarIProps) => {

  const fillRate = useMemo(()=>{
    if(rate >= index) {
      return '#D72661'
    }
    return '#dbdbdb'
  },[rate, index]);
  
  return(
    
      <svg  xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill={fillRate}>
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
				</svg>
    
  );}

export default ReviewStar;