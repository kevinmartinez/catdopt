import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';

function Header(props) {
  return (
    <div title={props.title}>
      <span>{props.logo}</span>
      <Search searchValue={props.searchValue} />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

// Same approach for defaultProps too
// Header.defaultProps = {
//   logo: 'Lyckan',
// };

export default Header;
