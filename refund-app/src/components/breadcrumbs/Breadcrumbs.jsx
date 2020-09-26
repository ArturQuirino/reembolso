import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BreadCrumb = (props) => {
  const { links } = props;
  return (
    <nav>
      {links.map((link, index) => (
        <Fragment key={link + index}>
          {index === 0 ? '' : ' / '}
          <a href={link.url}>{link.label}</a>
        </Fragment>
      ))}
    </nav>
  );
};

BreadCrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired
  ),
};

export default BreadCrumb;
