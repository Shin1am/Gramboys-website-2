import React from 'react';

const Cylinder = ({ width, height, radius, color }) => {
  // Calculate the necessary dimensions
  const cylinderWidth = width || 100;
  const cylinderHeight = height || 200;
  const cylinderRadius = radius || 30;
  const halfWidth = cylinderWidth / 2;

  return (
    <svg width={cylinderWidth} height={cylinderHeight} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx={halfWidth} cy={cylinderRadius} rx={halfWidth} ry={cylinderRadius} fill={color || "gray"} />
      <rect x="0" y={cylinderRadius} width={cylinderWidth} height={cylinderHeight - 2 * cylinderRadius} fill={color || "gray"} />
      <ellipse cx={halfWidth} cy={cylinderHeight - cylinderRadius} rx={halfWidth} ry={cylinderRadius} fill={color || "gray"} />
    </svg>
  );
};

export default Cylinder;
