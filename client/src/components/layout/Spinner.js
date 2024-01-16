import React from 'react';

const Spinner = () => (
  <div className='flex items-center justify-center h-screen'>
    <div className='text-center'>
      <span className='loading loading-dots loading-lg'></span>
    </div>
  </div>
);

export default Spinner;
