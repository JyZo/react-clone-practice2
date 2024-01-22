import React from 'react';
import { CircleLoader } from 'react-spinners';

const loading = () => {
  return (
    <div>
      <h2>Loading....</h2>
      <CircleLoader color="#9036d6" />
    </div>
  );
};

export default loading;
