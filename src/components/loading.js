import React from 'react';

const Loading = () => {
  return (
    <div className="h-4/5 m-5 mt-6 animate-pulse cursor-wait">
      <div className="mt-4 flex flex-col">
        <span className="h-4 bg-gray-200 rounded w-1/3 mb-2"></span>
        <span className="h-4 bg-gray-200 rounded w-1/4"></span>
      </div>
      <div className="flex my-0 h-36">
        <div className="text-left m-auto h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="ml-6 my-8 rounded-full bg-gray-300 w-16 h-16 md:h-28 md:w-28"></div>
      </div>
      <div className="flex justify-center mb-5 py-3">
        <div className="h-4 bg-gray-200 rounded w-32 mr-4"></div>
        <div className="h-4 bg-gray-200 rounded w-32 mr-4"></div>
        <div className="h-4 bg-gray-200 rounded w-32 mr-4"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>
      <div className="h-2 bg-gray-200 rounded w-full"></div>
      <div className="mt-10 my-6 flex justify-around">
        <span className="flex-1 text-left h-4 bg-gray-200 rounded w-1/3"></span>
        <span className="mx-10 rounded-full bg-gray-300 h-5 w-5"></span>
        <span className="flex-1 text-right h-4 bg-gray-200 rounded w-1/3"></span>
      </div>
      <div className="mt-10 flex justify-around">
        <span className="flex-1 text-left h-4 bg-gray-200 rounded w-1/3"></span>
        <span className="mx-10 rounded-full bg-gray-300 h-5 w-5"></span>
        <span className="flex-1 text-right h-4 bg-gray-200 rounded w-1/3"></span>
      </div>
      <div className="mt-10 flex justify-around">
        <span className="flex-1 text-left h-4 bg-gray-200 rounded w-1/3"></span>
        <span className="mx-10 rounded-full bg-gray-300 h-5 w-5"></span>
        <span className="flex-1 text-right h-4 bg-gray-200 rounded w-1/3"></span>
      </div>
      <div className="mt-10 flex justify-around">
        <span className="flex-1 text-left h-4 bg-gray-200 rounded w-1/3"></span>
        <span className="mx-10 rounded-full bg-gray-300 h-5 w-5"></span>
        <span className="flex-1 text-right h-4 bg-gray-200 rounded w-1/3"></span>
      </div>
      <div className="mt-10 flex justify-around">
        <span className="flex-1 text-left h-4 bg-gray-200 rounded w-1/3"></span>
        <span className="mx-10 rounded-full bg-gray-300 h-5 w-5"></span>
        <span className="flex-1 text-right h-4 bg-gray-200 rounded w-1/3"></span>
      </div>
      <div className="mt-10 flex justify-around">
        <span className="flex-1 text-left h-4 bg-gray-200 rounded w-1/3"></span>
        <span className="mx-10 rounded-full bg-gray-300 h-5 w-5"></span>
        <span className="flex-1 text-right h-4 bg-gray-200 rounded w-1/3"></span>
      </div>
    </div>
  );
};

export default Loading;
