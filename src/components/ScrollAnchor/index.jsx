import React from 'react';
import styles from './index.module.scss';
import scrollTo from './scroll';

const ScrollAnchor = (props) => (
  <button
    className={styles.ScrollAnchor}
    onClick={() => {
      scrollTo(
        document.querySelector(props.to),
        300,
        'easeOutQuad'
      )
    }}
  >
    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
  </button>
);

export default ScrollAnchor;
