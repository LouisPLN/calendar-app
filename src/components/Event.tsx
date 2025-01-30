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
        backgroundColor: "rgba(164, 38, 44, 0.5)",
        borderLeft: "8px solid #A4262C",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      Evenement :{event.id} - {event.start}
    </div>
  );
};

export default EventItem;
