import React from 'react';

const Rectangle = ({ width, height, color }) => {
  // Calculate the necessary dimensions
  const rectangleWidth = width || 100;
  const rectangleHeight = height || 200;

  return (
    <svg width={rectangleWidth} height={rectangleHeight} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width={rectangleWidth} height={rectangleHeight} fill={color || "gray"} />
    </svg>
  );
};

export default Rectangle;
