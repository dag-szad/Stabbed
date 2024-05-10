import React, { useState } from 'react';

const BaseSelector = ({ changeBase }) => {
  const [fileWidth, setFileWidth] = useState(0);
  const [fileHeight, setFileHeight] = useState(0);

  const handleFileUpload = (newFile) => {
    const file = newFile.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        if (img.width > 0 && img.height > 0) {
          setFileHeight(img.height);
          setFileWidth(img.width);
          changeBase({
            url: e.target.result,
            file: file,
          });
        } else {
          console.error('Invalid image dimensions');
        }
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <button type="button" onClick={() => changeBase('ear')}>
        Ear
      </button>
      <button type="button" onClick={() => changeBase('lips')}>
        Lips
      </button>
      <button type="button" onClick={() => changeBase('nose')}>
        Nose
      </button>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export { BaseSelector };