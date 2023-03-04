import React from "react";
import { SingleCard } from "./SingleCard";
import { Link } from "react-scroll";

export const Hero = (props) => {
  return (
    <div className="z-[1] flex justify-center h-screen items-center">
      <div className="flex items-center flex-col sm:flex-row gap-5">
        <div className="text-2xl lg:text-4xl font-bold sm:mb-12 md:ml-5">
          <h1>
            Get your gears ready,<br></br>join the forces.
          </h1>
        </div>
        <div className=" md:mr-5">
          <div className="w-[280px] md:w-[400px] lg:w-[500px]">
            <SingleCard herodata={props.herodata} />
          </div>
          <div className="flex justify-center">
            <div className="font-semibold border cursor-pointer">
              <Link to="product">
              <div className="py-2 px-3 md:!py-4 md:!px-6">More Detail</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
