import React from 'react';

const SvgIcon = ({ id, width = 24, height = 24, className = '' }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

export default SvgIcon;