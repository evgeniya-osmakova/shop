import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ currentMenuItem }) => {
  Header.propTypes = {
    currentMenuItem: PropTypes.string.isRequired,
  };

  return (
    <header className="header">
      <div className="header-wrapper container">
        <h1 className="header-title">{currentMenuItem}</h1>
      </div>
    </header>
  );
};

export default Header;
