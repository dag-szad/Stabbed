import React, { useState } from 'react';

const Bases = ({ selectedBase, fileWidth, fileHeight }) => {
  let base = '';
  let width = fileWidth;
  let height = fileHeight;
  // console.log(fileWidth)

  if (selectedBase.url) {
    base = selectedBase.url;
  } else {
    switch (selectedBase) {
      case 'ear':
        base = `src/assets/visualizer/bases/${selectedBase}.png`;
        width = 400;
        height = 500;
        break;
      case 'lips':
      case 'nose':
        base = `src/assets/visualizer/bases/${selectedBase}.png`;
        width = 500;
        height = 400;
        break;
      default:
        base = selectedBase;
        break;
    }
  }

  return (
    <img
      src={base}
      alt="base for piercings"
      style={{ width: width, height: height }}
    />
  );
};

export { Bases };