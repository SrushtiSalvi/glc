import React from "react";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div>
      <h1 className="md:text-3xl text-2xl mt-7 mb-2 underline underline-offset-8 decoration-navbackground font-bold text-center">
        Posts
      </h1>
      <section className=" py-2 mx-4 md:grid md:grid-cols-3 ">
        <PostCard companyName="Tata Consultancy" date="2 days ago"/>
        <PostCard companyName="Mirchandani Advocates & Co" date="1 day ago"/>
        <PostCard companyName="Vidur Legal" date="1 day ago"/>
        <PostCard companyName="Mirchandani Advocates & Co" date="1 day ago"/>
        <PostCard companyName="Adv. Sangram Chinnappa" date="1 day ago"/>
        <PostCard companyName="KS Legal & Associates" date="1 day ago"/>
        {/* <a className="flex justify-end pr-10 border border-gray-500 ">View More</a> */}
        {/* <button className="flex justify-end border rounded-md border-black ">View More</button> */}
      </section>
      <ul className="flex space-x-4 justify-end mr-10">
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
