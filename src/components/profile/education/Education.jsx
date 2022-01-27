import React from "react";
import EducationOrganization from "./EducationOrganization";
import './education.css';

const education = [
  {
    title: "Higher education",
    name: "Donbas National Academy of Civil Engineering and Architecture",
    faculty: "Faculty of Industrial and Civil Engineering",
    date: "2006 - 2011",
  },
  {
    title: "Courses",
    name: "IT Hillel",
    faculty: "Front-End Basic, Front-End Pro",
    date: "",
  },
  {
    title: "Courses",
    name: "Prometheus",
    faculty: "Fundamentals of WEB UI development",
    date: "",
  },
];

const Education = () => {
  return (
    <div className="education">
      {education.map((obj) => (
        <EducationOrganization title={obj.title} name={obj.name} faculty={obj.faculty} date={obj.date} />
      ))}
    </div>
  )
}

export default Education