import React, { useState } from 'react';
import axios from 'axios';
import styles from './footer.module.scss';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '25471913-2950087fc607b34181d96d12a';

function randomInteger(min, max) {
  // случайное число от min до max
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

const Footer = () => {
  const [image, setImage] = useState('');
  const handleChange = () => {
    axios
      .get(API_URL, {params: {
        key: API_KEY,
        category: 'places',
        image_type: 'photo',
        order: 'latest'
      }})
      .then(res => {
        let max = res.data.hits.length -1;
        let index = randomInteger(0, max);
        const uri = res.data.hits[index].previewURL;
        uri && setImage(uri);
        // console.log(res.data.hits[0].previewURL);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <div className={styles.footer}>
      <button className={styles.btn} type='button' onClick={handleChange}>
        Click
      </button>
      {image && <img src={image} alt='Image' />}
    </div>
  )
}

export default Footer
