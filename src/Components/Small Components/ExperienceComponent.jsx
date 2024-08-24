import React from "react";

const ExperienceComponent = ({ experience }) => {
  return (
    <div>
      <div className="border p-3 rounded-lg h-full md:h-32">
        <div className="mb-2">
          <h2 className="text-xl font-semibold">{experience.domain}</h2>
          <h3 className="font-medium text-gray-600">
            at{" "}
            <a href={experience.link} target="_blank" className="underline">
              {experience.company}
            </a>
            <span className="text-gray-400"> • </span>
            <span>{experience.years}</span>
          </h3>
        </div>
        <p className="text-gray-500 text-sm">{experience.desc}</p>
      </div>
    </div>
  );
};

export default ExperienceComponent;
