import React from "react";
import { SearchBar } from "./components";

const NotFound = () => {
  return (
    <div className="py-6 flex flex-col gap-6 items-center min-w-[320px]">
      <h1 className="text-center font-medium px-4">
        No such coin exists. But you can search...
      </h1>
      <p className="text-center font-light text-sm">Invalid URL</p>
      <SearchBar />
    </div>
  );
};

export default NotFound;
