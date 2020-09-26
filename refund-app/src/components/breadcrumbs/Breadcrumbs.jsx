import React, { Fragment } from 'react';

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

export default BreadCrumb;
