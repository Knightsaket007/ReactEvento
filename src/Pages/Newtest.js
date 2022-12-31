import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import React from 'react';
import Rating from "./Rating.json"

const Newtest = () => {
  // Calculate the number of full, half, and empty stars needed
  function getStarElements(val) {
   
   const  fullStars = Math.floor(val);
    console.log(fullStars)
    const halfStars = val % 1 >= 0.5  ? 1 : 0;
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

    return starElements;
  }

  return (
    <>
      {
        Rating.map((item, index) => {
          // Get the star elements for the item
          const starElements = getStarElements(item.Stars);

          return (
            <div style={{ color: 'white' }}>
              {starElements}
            </div>
          )
        })
      }
    </>
  );
};

export default Newtest;