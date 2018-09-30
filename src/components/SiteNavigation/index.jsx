import React, {Fragment} from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import data from '../../data/SiteNavigation';
import scrollTo from '../ScrollAnchor/scroll';

const cx = classnames.bind(styles);

function scrollToSection(e, to) {
  e.preventDefault();
  console.log(document.querySelector(to));
  scrollTo(
    document.querySelector(to),
    300,
    'easeOutQuad'
  );
}

const SiteNavigation = ({small, hidden}) => (
  <Fragment>
    <div className={cx('SiteNavigation', {small}, {hidden})}>
      <div className={styles.content}>
        <a className={styles.logo} href="/">
          <h1>The Emily Jones</h1>
        </a>
        <div className={styles.nav}>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
          <a href="#work" onClick={(e) => scrollToSection(e, '#work')}>Work</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
          <a className={styles.resume} href={data.resume}>resume</a>
        </div>
      </div>
    </div>
    <div className={cx('placeholder', {show:small})}></div>
  </Fragment>
);

export default SiteNavigation;
