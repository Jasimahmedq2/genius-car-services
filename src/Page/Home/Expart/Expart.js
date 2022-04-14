import React from 'react';

const Expart = ({expart}) => {
  const {name, imag} = expart

  return (
    <div className='col-12 col-md-6 col-lg-4 g-5'>
      <img src={imag} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Expart;