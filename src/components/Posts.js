import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PostCard from './PostCard1';
import { getAllVacancyPosts } from '../api/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const getData = async () => {
      let res = await getAllVacancyPosts(pageNumber, pageSize);
      if (res.success) {
        setPosts(res.data);
      } else {
        alert(res.message);
      }
    };
    getData();
  }, []);
  return (
    <div className="mx-8">
      <div className="text-right space-x-4 mt-12 mb-2 text-sm">
        <Link
          className="hover:font-semibold transition-all duration-150 text-primary-dark"
          to="/">
          Notice Board
        </Link>
        <Link
          className="hover:font-semibold transition-all duration-150 text-primary-dark"
          to="/">
          Placements
        </Link>
        <Link
          className="hover:font-semibold transition-all duration-150 text-primary-dark"
          to="/">
          Blogs
        </Link>
      </div>
      <div className="my-4 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        {posts.length > 0
          ? posts
              .filter((post) => {
                return post.post_type === 'vacancy';
              })
              .map((post) => {
                return <PostCard isAdmin key={post.post_id} post={post} />;
              })
          : 'no posts available'}
      </div>
      <ul className="flex space-x-4 justify-end">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>Next</li>
      </ul>
    </div>
  );
};

export default Posts;
