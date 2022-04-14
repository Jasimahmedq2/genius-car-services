import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
  const {name, id, description, price, img} = service;
  const navigate = useNavigate()
  const handleServicesDetails = id =>{
     navigate(`/services/${id}`)
  }
  return (
    <div className='service-container'>
     <img className='w-100' src={img} alt="" />
      <h3>{name}</h3>
      <p>price:{price}</p>
      <p>{description}</p>
      <button onClick={() => handleServicesDetails(id)}>book: {name}</button>
    </div>
  );
};

export default Service;