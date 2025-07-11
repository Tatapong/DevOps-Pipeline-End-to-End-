import React from "react";

function loading() {
  return (
    <div className="flex pt-32 px-20 animate-pulse">
      <div className="flex-shrink-0">
        <span className="w-32 h-32 block bg-gray-200 rounded-lg dark:bg-gray-700"></span>
      </div>

      <div className="ml-4 mt-2 w-full">
        <h3 className="h-8 bg-gray-200 rounded-md dark:bg-gray-700"></h3>

        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
}

export default loading;
