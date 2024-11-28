
import React from 'react';

const Bill = ({ src, valor, onClick }) => {
  return (
    <div className="w-72 h-28 mt-6 justify-center items-center">
      <img
        src={src}
        className="w-72 h-28"
        onClick={() => onClick(valor)} 
      />
    </div>
  );
};

export default Bill
