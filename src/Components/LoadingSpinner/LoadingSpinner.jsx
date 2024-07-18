// src/components/LoadingSpinner.js
import { Blocks } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Blocks
        height="130"
        width="130"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
};

export default LoadingSpinner;
