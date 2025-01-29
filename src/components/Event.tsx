import React from "react";
import { Event } from "../Api/eventsApi.ts";
import { calculatePosition, calculateHeight } from "../Utils/timeUtils.ts";

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${calculatePosition(event.start)}px`,
        height: `${calculateHeight(event.duration)}px`,
        width: "100%",
        backgroundColor: "lightblue",
        border: "1px solid black",
        boxSizing: "border-box",
        padding: "5px",
        color: "black",
        textAlign: "center",
      }}
    >
      {event.id} - {event.start}
    </div>
  );
};

export default EventItem;
