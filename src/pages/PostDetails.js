import React, { useState, useEffect } from "react";
import data from "../posts.json";

const PostDetails = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(data);
  }, []);

  return (
    <div className="bg-red-400 m-10 p-10">
      <h1 className="text-headings text-center font-semibold text-2xl">
        Vidur Legal
      </h1>
      <div className="flex justify-between">
        <p className="text-gray-400 md:text-sm">January 18, 2022 </p>
        <p>post category</p>
      </div>
      <div>
        <h1 className="mt-5">PLACEMENT NOTICE:</h1>
        <section>
          <p>
            <b>Recruiter's Name:</b> Vidur Legal
          </p>
          <p>
            <b>Eligibility:</b> V-III, V-IV, V-V & III-II, III-III
          </p>
          <p>
            <b>Position:</b>
            <ol>Short Term Intern</ol>
            <ol>Long Term Intern</ol>
          </p>
          <p>
            <b>Joining:</b> Immediate (Non-negotiable)
          </p>
          <p>
            <b>Duration:</b>
            <ol>1 month (For Short Term Intern)</ol>
            <ol>Minimum 3 months (For Long Term Intern)</ol>
          </p>
          <p>
            <b>Area of Practice:</b> Dispute Resolution
          </p>
          <h2>Note:</h2>
          <ol>
            <li>
              This internship will NOT be WFH. Candidates will have to attend
              the office physically.
            </li>
            <li>Candidates applying for Long Term Intern will be preferred.</li>
          </ol>
          <p>
            <b>Stipend:</b> INR 4,000 P.M.
          </p>
          <p>
            <b>Address:</b> 32/33, Mittal Chamber, Barrister Rajni Patel Marg,
            Opp. Inox Cinema, Nariman Point, Mumbai – 400021.
          </p>
          <p>
            <b>Email ID:</b>placements.glc@gmail.com
          </p>
          <p>
            <b>Subject:</b> Application for Vidur Legal
          </p>
          <p>
            <b>Deadline:</b> 20th January, 2022, 08:00 PM
          </p>
        </section>
      </div>
    </div>
  );
};

export default PostDetails;
