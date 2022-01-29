import React from 'react';

const AddNotice = () => {
  return (
    <form>
      <div class="bg-gray-100 min-h-screen md:px-20 pt-6">
        <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 class="text-center text-2xl font-bold text-primary mb-10">
            ADD NOTICE
          </h1>
          <div class="space-y-4">
            <div>
              <label for="title" class="text-lx font-serif">
                Title:
              </label>
              <input
                type="text"
                placeholder="title"
                id="title"
                class="ml-2 outline-none py-1 px-2 text-md border rounded-md"
              />
            </div>
            <div>
              <label for="description" class="block mb-2 text-lg font-serif">
                Description:
              </label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                placeholder="write here.."
                class="w-full font-serif  p-4 text-gray-600 bg-gray-100 outline-none rounded-md"></textarea>
            </div>
            <div>
              <label for="name" class="text-lx font-serif">
                Name:
              </label>
              <input
                type="text"
                placeholder="name"
                id="name"
                class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label for="email" class="text-lx font-serif">
                Email:
              </label>
              <input
                type="text"
                placeholder="name"
                id="email"
                class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <button class=" px-6 py-2 mx-auto block rounded-md text-md font-semibold text-indigo-100 bg-primary-dark  ">
              ADD NOTICE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddNotice;
