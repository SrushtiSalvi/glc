import React, { useEffect, useState } from 'react';

import IMAGE from '../assets/default-post-image.png';
import { getSinglePost } from '../api/api';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  let { id } = useParams();
  // use state for post
  const [post, setPost] = useState({});

  useEffect(() => {
    // api call to / post / get_post / ${ id }
    const getData = async () => {
      let res = await getSinglePost(id);
      setPost(res['data']['post']);
    };
    getData();
  }, [id]);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center space-y-5 p-5 h-full">
      <div className="drop-shadow-xl bg-white rounded-lg w-full p-5 lg:w-2/3">
        <div className="shrink">
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-auto p-5 border place-items-start lg:place-items-center border-gray-200 rounded-lg w-full bg-white lg:w-2/3 shrink">
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
      <div className="p-5 border border-gray-200 rounded-lg w-full bg-white lg:w-2/3 grow">
        <p className="text-gray-400 text-xs font-medium">Overview</p>
        <p
          className="text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>
    </div>
  );
};

export default SinglePost;
