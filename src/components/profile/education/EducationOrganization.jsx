import React from "react";
import './education.css';

const EducationOrganization = (props) => {
  return (
      <section className="section">
        <h2 className="section__title">{ props.title }</h2>
        <div className="content__wrap">
          <span className="period">{ props.date }</span>
          <p className="section__text"><b>{ props.name }</b></p>
          <p className="section__text">{ props.faculty }</p>
        </div>
      </section>
  )
}

export default EducationOrganization