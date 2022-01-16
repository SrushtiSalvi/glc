import PostCard from './PostCard';
import React from 'react';

const Posts = () => {
  return (
    <div className="m-5">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-navbackground font-bold text-center my-5">
        Posts
      </h1>
      <div className=" py-2 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <PostCard companyName="Tata Consultancy" date="2 days ago" />
        <PostCard companyName="Mirchandani Advocates & Co" date="1 day ago" />
        <PostCard companyName="Vidur Legal" date="1 day ago" />
        <PostCard companyName="Mirchandani Advocates & Co" date="1 day ago" />
        <PostCard companyName="Adv. Sangram Chinnappa" date="1 day ago" />
        <PostCard companyName="KS Legal & Associates" date="1 day ago" />
        {/* <a className="flex justify-end pr-10 border border-gray-500 ">View More</a> */}
        {/* <button className="flex justify-end border rounded-md border-black ">View More</button> */}
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
