import React from 'react';
import error from '../../banner/error.jpg'

const NotFound = () => {
  return (
    <div>
      <h1 className='text-primary text-center'> PAGE NOT FOUND</h1>
      <img  src={error} className='w-100' alt="" />
    </div>
  );
};

export default NotFound;