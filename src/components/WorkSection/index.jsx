import React from 'react';
import RawHtml from 'react-raw-html';
import WorkEntry from './WorkEntry';
import data from '../../data/WorkSection';
import styles from './index.module.scss';

const WorkSection = () => (
  <div className={styles.WorkSection}>
    <div className={styles.content}>
      <div className={styles.heading}>{data.section}</div>
      <div className={styles.title}>
        <RawHtml.h2>
          {data.heading}
        </RawHtml.h2>
      </div>
      <div className={styles.works}>
        {
          data.works.map(category => (
            <div
              key={category.name}
              className={styles.workCategory}
            >
              <span className={styles.workCategoryHeading}>{category.name}</span>
              <div className={styles.entries}>
                {
                  category.entries.map(work => (
                    <div
                      key={work.name}
                      className={styles.entry}
                    >
                      <WorkEntry {...work} />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default WorkSection;
