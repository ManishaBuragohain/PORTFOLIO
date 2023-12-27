// import React from "react";
// import data from "../assets/data.json";

// const TimeLine = () => {
//   return (
//     <div id="timeline">
//       TimeLine
//       <div className="timelineBox"></div>
//     </div>
//   );
// };

// const TimelineItem = ({ heading, text, index }) => {
//   return (
//     <div
//       className={`timelineItem  ${
//         index % 2 === 0 ? "leftTimeline" : "rightTimeLine"
//       }`}
//     >
//       <h2>{heading}</h2>
//       <p>{text}</p>
//     </div>
//   );
// };

// export default TimeLine;

import React from "react";
import data from "../assets/data.json";

const TimeLine = () => {
  const experiences = data.experiences;

  return (
    <div id="timeline">
      <div className="timelineBox">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            heading={experience.companyName}
            // text={experience.description}
            index={index}
            yearofExp={experience.yearOfExperience}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index, yearofExp }) => {
  return (
    <div
      className={`timelineItem  ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeLine"
      }`}
    >
      <h2>{heading}</h2>
      <p>{yearofExp}</p>
      {/* <p>{text}</p> */}
    </div>
  );
};

export default TimeLine;
