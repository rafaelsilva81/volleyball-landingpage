import React from "react";
import { FaThumbsUp } from "react-icons/fa";

/* sponsor images */
import g1 from "../assets/patrocinadores/g1.png";
import g2 from "../assets/patrocinadores/g2.png";
import g3 from "../assets/patrocinadores/g3.png";

const sponsorImages = [g1, g2, g3];

const Sponsors = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4 flex items-center gap-2 text-3xl font-bold text-white lg:text-5xl">
        <FaThumbsUp size={32} />
        <h1>Patrocinadores</h1>
      </div>

      {/* Gold sponsors (bigger image) */}
      <div className="flex flex-wrap items-center gap-4">
        {sponsorImages.map((image, index) => (
          <div key={index} className="bg-primary rounded-lg p-2">
            <img
              src={image}
              alt="Patrocinador"
              className="h-48 w-48 object-scale-down"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
