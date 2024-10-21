import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex felx-col w-screen min-h-screen justify-center items-center bg-gray-200 p-4">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[140px] mt-1 mx-auto rounded-2xl"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
