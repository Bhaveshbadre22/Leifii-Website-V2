// Destination.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Destination = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Destination Component</h1>
      <p>Image ID: {id}</p>
    </div>
  );
};

export default Destination;
