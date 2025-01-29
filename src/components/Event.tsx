import React from "react";
import { Event } from "../Api/eventsApi.ts";
import { calculatePosition, calculateHeight } from "../Utils/timeUtils.ts";

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const position = calculatePosition(event.start);
  const height = calculateHeight(event.duration);

  return (
    <div
      key={event.id}
      id={`event-${event.id}`}
      style={{
        position: "absolute",
        top: `${position}px`,
        height: `${height}px`,
        width: "100%",
        backgroundColor: "#dedede",
        border: "1px solid #000",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <strong>Événement {event.id}</strong>: {event.start} ({event.duration}{" "}
      min)
    </div>
  );
};

export default EventItem;
