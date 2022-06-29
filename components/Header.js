import React from 'react';
import Person from '../node_modules/@mui/icons-material/Person';
import ForumIcon from '../node_modules/@mui/icons-material/Forum';
import IconButton from '../node_modules/@material-ui/core/IconButton';
import Fire from '../public/fire-svgrepo-com.svg';
import Image from 'next/image';
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>
      <Image src={Fire} height="50" width="50" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
