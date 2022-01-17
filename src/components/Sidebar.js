import React from "react";
import SidebarCardBody from "./SidebarCardBody";
import SidebarCardHeader from "./SidebarCardHeader";
import SidebarButton from "./SidebarButton";

import RecruitersInfoPic from "../assets/RecruitersInformation.jpg";
import RulesNRegulationsPic from "../assets/RulesNRegulations.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="mx-5">
      <div className="registrationForVacancy">
        <SidebarCardHeader>REGISTRATION FOR VACANCY UPDATES</SidebarCardHeader>
        <SidebarCardBody>
          <p className="text-sm p-4">
            All students who wish to receive updates regarding the posts on GLC
            Placement Committee website are requested to fill the form by
            clicking on the below mentioned link
          </p>
          <SidebarButton>Register Now</SidebarButton>
        </SidebarCardBody>
      </div>
      <div className="quickContacts">
        <SidebarCardHeader>QUICK CONTACTS</SidebarCardHeader>
        <SidebarCardBody>
          <p className="text-sm p-4">
            {/* {" "} */}
            <b>Ms. Mansi Dhadke </b> (+91 8657156719) General Secretary{" "}
          </p>
          <p className="text-sm p-4">
            {/* {" "} */}
            <b>Mr. Haryashwa Singh Thakore</b> (+91 9921462543) Assistant
            General Secretary
          </p>
        </SidebarCardBody>
      </div>
      <div className="impDates">
        <SidebarCardHeader>IMPORTANT DATES</SidebarCardHeader>
        <SidebarCardBody>
          <p className="text-sm p-4"> Will be updated soon..</p>
        </SidebarCardBody>
      </div>
      <div className="rulesNRegulations ">
        <SidebarCardHeader>RULES AND REGULATIONS</SidebarCardHeader>
        <SidebarCardBody>
          <img
            className="mx-auto my-2"
            src={RulesNRegulationsPic}
            alt="img"
          ></img>
          <p className="text-sm p-4">
            {/* {" "} */}
            GLC Placement Committee Rules and Regulations for students seeking
            placements. 1. Placement committee will not be responsible for any
            recruiter cancelling their registration or delaying it. 2. We
            request... Read All
          </p>
          <Link to="/" className="text-sm text-center p-2">
            Click here to go to the Recruiter Registration Form
          </Link>
        </SidebarCardBody>
      </div>
      <div>
        <SidebarCardHeader>PAST RECRUITERS</SidebarCardHeader>
        <SidebarCardBody>
          <img className="mx-auto my-2" src={RecruitersInfoPic} alt="img"></img>
          <p className="text-sm p-4">
            {/* {" "} */}
            The Government Law College Placement Committee was started in the
            academic year 1998-99. The GLC 'On Campus Recruitment Program' is
            one of the first and only recruitment program organized amongst Law
            colleges in Mumbai. Take a glimpse at our Past Recruiters
          </p>
        </SidebarCardBody>
      </div>
    </div>
  );
};

export default Sidebar;
