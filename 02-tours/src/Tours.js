import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <sevtion>
      <div className='title'>
        <h2>ours Tour</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </sevtion>
  );
};

export default Tours;
