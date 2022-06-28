import styled from 'styled-components/macro';
import { useState } from 'react';

const StyledImageFileUpload = styled.label`
  font-size: 160px;
  cursor: pointer;

  input {
    display: none;
  }

  i {
    padding: 0px 15px;
    border: dashed 2px gray;
    border-radius: 10px;
  }
`;

const PreviewDiv = styled.div`
  display: inline-block;
  width: 270px;
  height: 180px;
  border-radius: 15px;
  background: url(${({ imageData }) => imageData});
  background-size: cover;
  background-position: center;
`;

export const ImageFileUpload = ({ onChange, disabled = false }) => {
  const [imageData, setImageData] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (result) => {
        setImageData(fileReader.result);
        if (onChange) {
          onChange(file);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <StyledImageFileUpload>
      {!imageData && <i className='fa-solid fa-image-landscape'></i>}
      {imageData && <PreviewDiv imageData={imageData} />}
      <input type='file' accept='.png, .jpg, .jpeg' onChange={onFileChange} disabled={disabled} />
    </StyledImageFileUpload>
  );
};
