import React from "react";
import { RiTeamFill } from "react-icons/ri";

/* sponsor images */
import t1 from "../assets/times/t1.png";
import t2 from "../assets/times/t2.png";
import t3 from "../assets/times/t3.png";
import t4 from "../assets/times/t4.png";
import t5 from "../assets/times/t5.png";
import t6 from "../assets/times/t6.png";
import t7 from "../assets/times/t7.png";

const teamImages = [t1, t2, t3, t4, t5, t6, t7];

const Teams = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4 flex items-center gap-2 text-3xl font-bold text-white lg:text-5xl">
        <RiTeamFill size={32} />
        <h1>Times</h1>
      </div>

      {/* Teams  */}
      <div className="flex flex-wrap items-center gap-4">
        {teamImages.map((image, index) => (
          <div key={index} className="bg-primary rounded-lg p-2">
            <img
              src={image}
              alt="Time"
              className="h-48 w-48 object-scale-down"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
