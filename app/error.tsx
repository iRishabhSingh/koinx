"use client";
import React from "react";
import { SearchBar } from "./components";
import Error from "next/error";

const ErrorPage: React.FC<{ error: Error; reset: () => void }> = ({
  error,
  reset,
}) => {
  console.log(error);
  return (
    <div className="py-6 flex flex-col gap-6 items-center min-w-[320px]">
      <h1 className="text-center font-medium px-4">
        An unknown error occurred. But you can search...
      </h1>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
      <SearchBar />
    </div>
  );
};

export default ErrorPage;
