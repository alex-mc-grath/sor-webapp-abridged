import React from 'react';
import {useState, useRef, useEffect} from 'react'
import { StyledUploadRectangle } from './Style';

export const UploadRectangle = ({onChange = null, text = "Files up to 100Mb", maxUploadSize = 100000000, multiple=true, loadController = null}) => {

  const [fileText, setFileText] = useState(text)
  const fileRef = useRef()

  const onFileSelected = ({target}) => {

    let totalSize = 0
    let fileNames = [];
    for(let i=0; i< target.files.length; i++)
    {
      totalSize += target.files[i].size
      fileNames.push(target.files[i].name)
    }

    if(totalSize >= maxUploadSize)
    {
      alert("Total size of files is too large")
      fileRef.current.value = null;
      setFileText(text)
      return
    }

    setFileText(fileNames.join("; "))

    if(onChange)
    {
      onChange(target.files)
    }
  }

  const clearInput = () => {
    if(fileRef.current)
    {
      fileRef.current.value = null;
    }
    setFileText(text);
  }

  useEffect(() => {
    if(loadController)
    {
      loadController({
        clearInput
      })
    }
  }, [])

  return (
    <label style={{width: "100%"}}>
      <StyledUploadRectangle>
        
        <svg width='21' height='27' viewBox='0 0 21 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path fill-rule='evenodd' clip-rule='evenodd' d='M1.13184 6.63007C1.13184 3.59402 2.97728 1.13281 5.25374 1.13281H15.5585C17.835 1.13281 19.6804 3.59402 19.6804 6.63007V20.3732C19.6804 23.4093 17.835 25.8705 15.5585 25.8705H5.25374C2.97728 25.8705 1.13184 23.4093 1.13184 20.3732V6.63007Z' stroke='#ADADAD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M10.4072 19.0011L15.133 12.6984C15.9378 11.6254 17.2424 11.6254 18.0472 12.6984L19.6815 14.8781' stroke='#ADADAD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <ellipse cx='5.76935' cy='7.31476' rx='1.54571' ry='2.06146' stroke='#ADADAD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M1.49512 22.634L5.85403 16.8207C6.65884 15.7477 7.96342 15.7477 8.76822 16.8207L15.3808 25.6396' stroke='#ADADAD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>

        <span className='upload-text'>Upload a file</span>
        <span className='small'>{fileText}</span>

        <input type="file" file={fileRef} style={{display: "none"}} onChange={onFileSelected} multiple={multiple}/>
        
        
      </StyledUploadRectangle>
    </label>
  );
};
