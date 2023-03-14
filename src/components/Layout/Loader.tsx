import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <MoonLoader />
    </div>
  );
};

export default Loader;
