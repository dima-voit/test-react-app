import React, { useState } from 'react';
import axios from 'axios';
import './footer.css';

const Footer = () => {
  const [image, setImage] = useState('');
  const handleChange = () => {
    axios
      .get('https://pixabay.com/api/?key=25471913-2950087fc607b34181d96d12a&category=places&image_type=photo')
      .then(res => {
        const uri = res.data.hits[Math.floor(Math.random() * 10)].previewURL;
        uri && setImage(uri);
        // console.log(res.data.hits[0].previewURL);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <div className="footer">
      <button className='btn' type='button' onClick={handleChange}>
        Click
      </button>
      {image && <img src={image} alt='Image' />}
    </div>
  )
}

export default Footer
