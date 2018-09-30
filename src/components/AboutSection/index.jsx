import React from 'react';
import RawHtml from "react-raw-html";
import ScrollAnchor from '../ScrollAnchor';
import styles from './index.module.scss';
import data from '../../data/AboutSection';

const CurrentlyDoing = (props) => (
  (props.link) ?
    <li>
      <a href={props.link} target="_blank" rel="noopener noreferrer">{props.children}</a>
    </li>
  :
    <li>
      {props.children}
    </li>
);

const AboutSection = () => (
  <div className={styles.AboutSection}>
    <div className={styles.heading}>{data.section}</div>
    <div className={styles.columns}>
      <div className={styles.colLeft}>
        <img src={data.image} alt={data.caption} />
        <span>{data.caption}</span>
      </div>
      <div className={styles.colRight}>
        <h2 className={styles.title}>
          {data.heading}
          <span className={styles.underline} />
        </h2>
        <RawHtml.div>{data.content}</RawHtml.div>
        <div>
          <a className={styles.email} href={`mailto:${data.email}`}>{data.email}</a> {`//`} <a className={styles.resume} href={data.resume} target="blank">resume</a>
        </div>
        <div className={styles.divider} />
        <div className={styles.currently}>
          <p>I am currently:</p>
          <ul>
            {
              data.currently.map(e => (
                <CurrentlyDoing key={e.icon} link={e.link}>
                  <i className={`fa ${e.icon}`}></i> {e.action}: <span>{e.value}</span>
                </CurrentlyDoing>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    <ScrollAnchor to="#work" />
  </div>
);

export default AboutSection;
