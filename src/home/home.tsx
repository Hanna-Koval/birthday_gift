import React, { useState } from 'react';
import WholeBox from '../svg/wholeBox.tsx';
import Grid from '@mui/material/Grid2';
import './home.css';
import '../svg/box-style.css';
import GiftCard from './gift-card.tsx';

const HomePage = () => {
  const [styleBox, setStyleBox] = useState('whole-box');
  const [styleCard, setStyleCard] = useState('');
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="main-container"
    >
      <WholeBox className={styleBox} />
      <GiftCard className={styleCard} />
      <button
        onClick={() => {
          setStyleBox('opened-box');
          setStyleCard('opened-box-card');
        }}
        disabled={styleBox !== 'whole-box'}
      >
        <div>
          <span>Отримати подарунок</span>
        </div>
      </button>
    </Grid>
  );
};

export default HomePage;
