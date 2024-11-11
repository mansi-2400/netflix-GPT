import React from "react";

const Shimmer = () => {
  return (
    <div>
      <div className="bg-black bg-opacity-55 h-screen w-full ">
        <div className="flex flex-row flex-wrap p-7 m-3">
          {" "}
          {/* Use space-x-6 for horizontal spacing */}
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2">
          <h2 className="text-white">Loading</h2>
          </div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2">
          <h2 className="text-white">Loading</h2>

          </div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2">
          <h2 className="text-white">Loading</h2>

          </div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
          <div className="h-72 w-64 bg-black bg-opacity-90 m-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
