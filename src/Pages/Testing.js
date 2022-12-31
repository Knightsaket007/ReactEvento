import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./Rating.json"
const Testing = () => {
  const containerRef = useRef(null);
  
  const [rating, setRating] = useState(5);  // Example rating value

  useEffect(() => {
    // Calculate the number of full, half, and empty stars needed
    let fullStars=0;
    if(rating%1<=0.5){
  fullStars = Math.floor(rating);}
  if(rating%1>=0.5){
    fullStars = Math.ceil(rating);}
    const halfStars = rating % 1 === 0.5 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStars;

    // Create the full, half, and empty star elements
    const starElements = [];
    for (let i = 0; i < fullStars; i++) {
      const element = <TiStarFullOutline key={i} />;
      starElements.push(element);
    }
    if (halfStars) {
      const element = <TiStarHalfOutline key={fullStars} />;
      starElements.push(element);
    }
    for (let i = 0; i < emptyStars; i++) {
      const element = <TiStarOutline key={fullStars + halfStars + i} />;
      starElements.push(element);
    }

    // Clear the container element and append the star elements to it
    containerRef.current.innerHTML = '';
    ReactDOM.render(<React.Fragment>{starElements}</React.Fragment>, containerRef.current);
  }, [rating]);

  return (
    <>
    
      <div ref={containerRef} style={{ color: 'white' }} />
  
    </>
  );
};

export default Testing;