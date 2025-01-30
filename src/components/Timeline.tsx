import React from "react";

const Timeline: React.FC = () => {
  const startHour = 9;
  const endHour = 21;

  const renderTimeLines = () => {
    const times: React.ReactNode[] = []; // Spécification du type du tableau `times`
    for (let hour = startHour; hour <= endHour; hour++) {
      const time = `${hour}:00`;
      times.push(
        <div key={time} className="timeline">
          <span className="timeline-hour">{time}</span>
          <div className="timeline-hour-indicator" />
        </div>
      );
    }
    return times;
  };

  return <div className="timeline-wrapper">{renderTimeLines()}</div>;
};

export default Timeline;
