import React from "react";
import './education.css';

const EducationOrganization = (props) => {
  return (
      <div className="education__inner">
        <h2 className="education__title">{ props.title }</h2>
        <div className="content__wrap">
          <span className="period">{ props.date }</span>
          <p className="education__text"><b>{ props.name }</b></p>
          <p className="education__text">{ props.faculty }</p>
        </div>
      </div>
  )
}

export default EducationOrganization