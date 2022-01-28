import React, { useEffect, useState } from 'react';

import PostCard from '../PostCard';
import { getAllNoticePosts } from '../../api/api';
import NoticeCard from '../NoticeCard';
import NoticePage from '../NoticePage';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Notices = () => {
  let navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const result = await getAllNoticePosts(pageNumber, pageSize);
      if (result.success) {
        setPosts(result.data);
      } else {
        alert(result.message);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div className="flex justify-end m-4 text-white">
        <button
          onClick={() => {
            navigate('/admin/addNotice');
          }}
          className="group my-auto text-xs flex flex-row space-x-1 bg-black py-1 px-2 border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black">
          <FiPlus className="text-lg my-auto text-white group-hover:text-black" />
          <p className="my-auto">Add Notice</p>
        </button>
      </div>
      <div className=" bg-gray-100 flex">
        {/* <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-primary-dark font-bold text-center my-5">
        Notices
      </h1> */}

        <div className=" py-2 mx-4 w-1/3 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1">
          {posts.length > 0
            ? posts
                .filter((post) => {
                  return post.post_type === 'notice';
                })
                .map((post) => {
                  return <NoticeCard key={post.post_id} post={post} />;
                })
            : 'no posts available'}
        </div>
        <div>
          <NoticePage />
        </div>
      </div>
    </div>
  );
};

export default Notices;
