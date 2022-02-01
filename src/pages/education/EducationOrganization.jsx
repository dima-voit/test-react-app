import React from "react";
import styles from './education.module.scss';

const EducationOrganization = (props) => {
  return (
      <div className={styles.education__inner}>
        <h2 className={styles.education__title}>{ props.title }</h2>
        <div className={styles.content__wrap}>
          <span className={styles.period}>{ props.date }</span>
          <p className={styles.education__text}><b>{ props.name }</b></p>
          <p className={styles.education__text}>{ props.faculty }</p>
        </div>
      </div>
  )
}

export default EducationOrganization