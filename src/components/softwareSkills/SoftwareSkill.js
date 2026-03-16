import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection, networkingSkillsSection} from "../../portfolio";

export default function SoftwareSkill({ section }) {
  const skillsData = section === "networking" ? networkingSkillsSection : skillsSection;
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsData.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
