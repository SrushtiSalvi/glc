import { BsClockHistory, BsExclamationLg } from 'react-icons/bs';
import { GoChecklist, GoLocation } from 'react-icons/go';
import React, { useEffect, useState } from 'react';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import MiniPostCard from '../components/MiniPostCard';
import SinglePostField from '../components/SinglePostField';
import { getSinglePost } from '../api/api';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  let { id } = useParams();
  // use state for post
  const [post, setPost] = useState({});
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // api call to / post / get_post / ${ id }
    const getData = async () => {
      let res = await getSinglePost(id);
      console.log(res);
      setPost(res['data']['post']);
      setAllPosts(res['data']['similar_posts']);
    };
    getData();
  }, [id]);

  return (
    <div className="bg-gray-100 flex">
      <div className="flex flex-col m-6 overflow-y-auto h-full">
        {allPosts && allPosts.length > 0
          ? allPosts.map((post) => {
              return (
                <MiniPostCard
                  post={post}
                  key={post._id}
                  isActive={post._id === id}
                />
              );
            })
          : null}
      </div>
      <div className="flex m-6 p-8 border shadow-xl bg-white lg:w-2/3 mx-8 h-full rounded-lg">
        <div className="p-4 bg-white">
          <h1 className="text-primary-light font-bold text-4xl mb-4 border-l-4 pl-4 border-primary-light">
            {post.company_name}
          </h1>
          <h2 className="text-base text-primary-light font-semibold tracking-wide uppercase mt-2">
            PLACEMENT NOTICE:
          </h2>
          <div className="flex flex-col">
            <p>Post Category</p>
            <p className="text-gray-400 md:text-sm">January 18, 2022 </p>
          </div>

          <div className="mt-10">
            <dl className="md:space-y-0 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
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
                    The CVs should be strictly in the Placements CV format.
                    Here is the link for the same-
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
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
