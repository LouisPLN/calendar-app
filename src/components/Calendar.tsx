import React, { useEffect, useState } from "react";
import { fetchEventsData, Event } from "../Api/eventsApi.ts";
import EventItem from "./Event.tsx";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const calendarHeight = 2400;

  useEffect(() => {
    fetchEventsData().then(setEvents);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${calendarHeight}px`,
        border: "2px solid black",
      }}
    >
      <div>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
