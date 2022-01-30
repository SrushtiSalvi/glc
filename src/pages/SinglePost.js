import { BsClockHistory, BsExclamationLg } from 'react-icons/bs';
import { GoChecklist, GoLocation } from 'react-icons/go';
import React, { useEffect, useState } from 'react';
import { getAllVacancyPosts, getSinglePost } from '../api/api';
import { useLocation, useParams } from 'react-router-dom';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import IMAGE from '../assets/default-post-image.png';
import { MdAlternateEmail } from 'react-icons/md';
import MiniPostCard from '../components/MiniPostCard';
import PostCard1 from '../components/PostCard1';
import SinglePostField from '../components/SinglePostField';

const SinglePost = () => {
  let { id } = useParams();
  // use state for post
  const [post, setPost] = useState({});
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // api call to / post / get_post / ${ id }
    const getData = async () => {
      let res = await getSinglePost(id);
      setPost(res['data']['post']);
      setAllPosts(res['data']['similar_posts']);
    };
    getData();
  }, [id]);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center space-y-5 p-5 h-full">
      <div className="drop-shadow-xl bg-white h-full rounded-lg w-full p-5 lg:w-2/3">
        <div className="">
          <section className="flex justify-start items-center space-x-5">
            <div className="w-16 h-16 aspect-square rounded-lg">
              <img
                src={IMAGE}
                alt={post.company_name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-primary-light text-normal flex flex-col">
                <span className="font-semibold">{post.company_name}</span>
                <small>Pune</small>
              </h1>
              <p className="text-gray-400 text-xs">{post.created_at}</p>
            </div>
          </section>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-auto p-5 border place-items-start lg:place-items-center border-gray-200 rounded-lg w-full bg-white lg:w-2/3">
        <div className="">
          <p className="text-gray-400 text-xs font-medium">Experience</p>
          <p className="text-gray-900">{post.experience || 'Min. 1 year'}</p>
        </div>
        <div className="">
          <p className="text-gray-400 text-xs font-medium">Eligibility</p>
          <p className="text-gray-900">
            {post.eligibility || 'Post Graduate'}
          </p>
        </div>
        <div className="">
          <p className="text-gray-400 text-xs font-medium">Position</p>
          <p className="text-gray-900">{post.position || 'Junior Advocate'}</p>
        </div>
        <div className="">
          <p className="text-gray-400 text-xs font-medium">Status</p>
          <p
            className={`uppercase font-bold ${
              post.status?.toLowerCase() === 'open'
                ? 'text-green-500'
                : 'text-red-500'
            }`}>
            {post.status}
          </p>
        </div>
      </div>
      <div className="p-5 border border-gray-200 rounded-lg w-full bg-white lg:w-2/3">
        <p className="text-gray-400 text-xs font-medium">Overview</p>
        <p
          className="text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>

      {/* <div className="drop-shadow-xl bg-white h-full rounded-lg w-full p-5">
        <div className="p-4 bg-white">
          <ul className="list-none">
            <SinglePostField
              icon={<GoChecklist className="text-3xl" />}
              heading="Eligibility">
              <p>{post.eligibility}</p>
            </SinglePostField>
            <SinglePostField
              icon={<GoChecklist className="text-3xl" />}
              heading="Position:">
              <p>
                <ol>{post.position}</ol>
              </p>
            </SinglePostField>
            <SinglePostField
              icon={<GoChecklist className="text-3xl" />}
              heading="Joining:">
              <p>{post.joining}</p>
            </SinglePostField>
            <SinglePostField
              icon={<GoChecklist className="text-3xl" />}
              heading="Area of Practice:">
              <p> Dispute Resolution</p>
            </SinglePostField>
            <SinglePostField
              icon={<FaRupeeSign className="text-2xl" />}
              heading="Stipend:">
              <p>INR 4,000 P.M.</p>
            </SinglePostField>
            <SinglePostField
              icon={<MdAlternateEmail className="text-3xl" />}
              heading="Email ID:">
              <p>placements.glc@gmail.com</p>
            </SinglePostField>
            <SinglePostField
              icon={<AiOutlineClockCircle className="text-3xl" />}
              heading="Duration:">
              <p>
                <ol>1 month (For Short Term Intern)</ol>
                <ol>Minimum 3 months (For Long Term Intern)</ol>
              </p>
            </SinglePostField>
            <SinglePostField
              icon={<GoChecklist className="text-3xl" />}
              heading="Note:">
              <p>
                <li>
                  This internship will NOT be WFH. Candidates will have to
                  attend the office physically.
                </li>
                <li>
                  Candidates applying for Long Term Intern will be preferred.
                </li>
              </p>
            </SinglePostField>
            <SinglePostField
              icon={<GoLocation className="text-3xl" />}
              heading="Address:">
              <p>
                32/33, Mittal Chamber, Barrister Rajni Patel Marg, Opp. Inox
                Cinema, Nariman Point, Mumbai – 400021.
              </p>
            </SinglePostField>
            <SinglePostField
              icon={<GoChecklist className="text-3xl" />}
              heading="Subject:">
              <p>Application for Vidur Legal</p>
            </SinglePostField>
            <SinglePostField
              className="col-span-2"
              icon={<BsClockHistory className="text-2xl" />}
              heading="Deadline:">
              <p>{post.deadline}</p>
            </SinglePostField>
            <SinglePostField
              className="col-span-3"
              icon={<BsExclamationLg className="text-3xl" />}
              heading="Important Note:">
              <p>
                <li>
                  The CVs should be strictly in the Placements CV format. Here
                  is the link for the same-
                  <a href="http://www.glcplacements.com/wp-content/uploads/2015/09/New-Placement-CV-Format3.pdf">
                    http://www.glcplacements.com/wp-content/uploads/2015/09/New-Placement-CV-Format3.pdf
                  </a>
                </li>
                <li>
                  Mention your contact details in the mail and not in the CV.
                </li>
                <li>
                  Above-mentioned details are subject to changes made by the
                  Recruiter. Placement Committee shall not be liable for the
                  same.
                </li>
              </p>
            </SinglePostField>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePost;
