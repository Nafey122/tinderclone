import React from 'react';
import IconButton from '../node_modules/@material-ui/core/IconButton';
import ReplayIcon from '../node_modules/@mui/icons-material/Replay';
import CloseIcon from '../node_modules/@mui/icons-material/Close';
import StarRateIcon from '../node_modules/@mui/icons-material/StarRate';
import FavoriteIcon from '../node_modules/@mui/icons-material/Favorite';
import FlashOnIcon from '../node_modules/@mui/icons-material/FlashOn';

const SwipeButtons = () => {
  return (
    <>
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

export default SwipeButtons;
