import React from 'react';
import RawHtml from 'react-raw-html';
import data from '../../data/ContactSection';
import styles from './index.module.scss';

const ContactSection = () => (
  <div className={styles.ContactSection}>
    <div className={styles.heading}>{data.section}</div>
    <RawHtml.h2>{data.heading}</RawHtml.h2>
    <RawHtml.div>{data.copy}</RawHtml.div>
  </div>
);

export default ContactSection;
