import React from "react";
import Subscriber from "../Subscriber";

const Subscribers = () => {
  return (
    <div className="overflow-x-scroll w-full p-5 scrollbar-hide">
      <table className="w-full divide-y divide-gray-300">
        <thead className="text-center">
          <th class="px-6 py-3 text-sm leading-4 text-blue-500 tracking-wider">
            ID
          </th>
          <th class="px-6 py-3 text-sm leading-4 text-blue-500 tracking-wider">
            Fullname
          </th>
          <th class="px-6 py-3 text-sm leading-4 text-blue-500 tracking-wider">
            Email
          </th>
          <th class="px-6 py-3 text-sm leading-4 text-blue-500 tracking-wider">
            Phone
          </th>
          <th class="px-6 py-3  text-sm leading-4 text-blue-500 tracking-wider">
            Created At
          </th>
          <th class="px-6 py-3  text-sm leading-4 text-blue-500 tracking-wider"></th>
        </thead>
        <tbody className="text-center divide-y divide-gray-300">
          <Subscriber />
          <Subscriber />
          <Subscriber />
          <Subscriber />
          <Subscriber />
        </tbody>
      </table>
    </div>
  );
};

export default Subscribers;
