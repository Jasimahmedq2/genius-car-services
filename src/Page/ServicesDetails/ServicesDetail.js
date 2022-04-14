import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
  const {servicesId} = useParams()
  return (
    <div>
      <h4>secices details: {servicesId}</h4>
    </div>
  );
};

export default ServicesDetail;