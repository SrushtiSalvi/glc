import React from "react";
import SidebarCard from "./SidebarCard";

import RecruitersInfoPic from '../assets/RecruitersInformation.jpg';
import RulesNRegulationsPic from '../assets/RulesNRegulations.jpg'

const Sidebar = () => {


  return (
    <div className="sticky">
      <SidebarCard
        heading="REGISTRATION FOR VACANCY UPDATES"
        message="All students who wish to receive updates regarding the posts on GLC Placement Committee website are requested to fill the form by clicking on the below mentioned link"
        button="Resgister Now"
      />
      <SidebarCard
        heading="QUICK CONTACTS"
        message="Ms. Mansi Dhadke (+91 8657156719)
        General Secretary"
      />
      <SidebarCard heading="IMPORTANT DATES" message="Will be updated soon." />
      <SidebarCard
        heading="RULES AND REGULATIONS"
        img={RulesNRegulationsPic}
        message="GLC Placement Committee Rules and Regulations for students seeking placements. 1. Placement committee will not be responsible for any recruiter cancelling their registration or delaying it. 2. We request the students ...

Read All"
        button="Click here to go to the Recruiter Registration Form"
      />
      <SidebarCard
        heading="PAST RECRUITERS"
        img={RecruitersInfoPic}
        message="The Government Law College Placement Committee was started in the academic year 1998-99. The GLC 'On Campus Recruitment Program' is one of the first and only recruitment program organized amongst Law colleges in Mumbai.

        Take a glimpse at our Past Recruiters"
      />
    </div>
  );
};

export default Sidebar;
