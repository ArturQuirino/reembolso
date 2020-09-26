import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {
  const { links } = props;
  return (
    <nav className="breadcrumb">
      {links.map((link, index) => (
        <Fragment key={link + index}>
          {index === 0 ? '' : ' / '}
          <a href={link.url} className="breadcrumb__anchorLinks">
            {link.label}
          </a>
        </Fragment>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired
  ),
};

export default Breadcrumbs;
