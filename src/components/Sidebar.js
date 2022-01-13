import React from "react";
import SidebarCard, { SidebarCardBody, SidebarCardHeader, Card, Button } from "./SidebarCard";

import RecruitersInfoPic from "../assets/RecruitersInformation.jpg";
import RulesNRegulationsPic from "../assets/RulesNRegulations.jpg";

const Sidebar = () => {
  return (
    <div className="sticky">
      <Card className="registrationForVacancy">
      <SidebarCardHeader>REGISTRATION FOR VACANCY UPDATES</SidebarCardHeader>
      <SidebarCardBody>
        <p className='text-sm pb-2 m-4'> All students who wish to receive updates regarding the posts on GLC Placement Committee website are requested to fill the form by clicking on the below mentioned link </p>
        <Button>Resgister Now</Button>
      </SidebarCardBody>
      </Card>
      <Card className="quickContacts">
      <SidebarCardHeader>QUICK CONTACTS</SidebarCardHeader>
      <SidebarCardBody>
        <p className='text-sm pb-2 m-4'> <b>Ms. Mansi Dhadke </b> (+91 8657156719)
        General Secretary </p>
        <p className='text-sm pb-2 m-4'> <b>Mr. Haryashwa Singh Thakore</b> (+91 9921462543)
Assistant General Secretary </p>
      </SidebarCardBody>
      </Card>
      <Card className="impDates">
      <SidebarCardHeader>IMPORTANT DATES</SidebarCardHeader>
      <SidebarCardBody>
        <p className='text-sm pb-2 m-4'> Will be updated soon..</p>
      </SidebarCardBody>
      </Card>
      <Card className="rulesNRegulations">
      <SidebarCardHeader>RULES AND REGULATIONS</SidebarCardHeader>
      <SidebarCardBody>
        <img className="mx-auto my-2" src={RulesNRegulationsPic}alt="img"></img>
        <p className='text-sm pb-2 m-4'> GLC Placement Committee Rules and Regulations for students seeking placements. 1. Placement committee will not be responsible for any recruiter cancelling their registration or delaying it. 2. We request...
        Read All</p>
        <Button>Click here to go to the Recruiter Registration Form</Button>
      </SidebarCardBody>
      </Card>
      <Card>
      <SidebarCardHeader>PAST RECRUITERS</SidebarCardHeader>
      <SidebarCardBody>
        <img className="mx-auto my-2" src={RecruitersInfoPic} alt="img"></img>
        <p className='text-sm pb-2 m-4'> The Government Law College Placement Committee was started in the academic year 1998-99. The GLC 'On Campus Recruitment Program' is one of the first and only recruitment program organized amongst Law colleges in Mumbai.

        Take a glimpse at our Past Recruiters</p>
      </SidebarCardBody>
      </Card>
       
      {/* <SidebarCard
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
      /> */}
    </div>
  );
};

export default Sidebar;
