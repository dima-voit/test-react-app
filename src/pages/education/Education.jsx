import React from "react";
import EducationOrganization from "./EducationOrganization";
import styles from './education.module.scss';

const education = [
  {
    id: 1,
    title: "Higher education",
    name: "Donbas National Academy of Civil Engineering and Architecture",
    faculty: "Faculty of Industrial and Civil Engineering",
    date: "",
  },
  {
    id: 2,
    title: "Courses",
    name: "IT Hillel",
    faculty: "Front-End Basic, Front-End Pro",
    date: "",
  },
  {
    id: 3,
    title: "",
    name: "Prometheus",
    faculty: "Fundamentals of WEB UI development",
    date: "",
  },
];

const Education = () => {
  return (
    <div className={styles.education}>
      {education.map((education) => (
        <EducationOrganization 
          key={education.id}
          title={education.title} 
          name={education.name} 
          faculty={education.faculty} 
          date={education.date} />
      ))}
    </div>
  )
}

export default Education