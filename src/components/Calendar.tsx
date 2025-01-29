import React, { useEffect, useState } from "react";
import { fetchEventsData, Event } from "../Api/eventsApi.ts";
import { processEvents, calendarHeight } from "../Utils/timeUtils.ts";
import EventItem from "./Event.tsx";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEventsData().then((data: Event[]) => {
      const processedEvents = processEvents(data);
      setEvents(processedEvents);
    });
  }, []);

  const groupedEvents = events.reduce((groups, event) => {
    if (!groups[event.groupId]) {
      groups[event.groupId] = [];
    }
    groups[event.groupId].push(event);
    return groups;
  }, {} as Record<number, Event[]>);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${calendarHeight}px`,
        border: "2px solid black",
      }}
    >
      {Object.entries(groupedEvents).map(([groupId, group]) => (
        <div
          key={groupId}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {group.map((event) => (
            <div
              key={event.id}
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <EventItem event={event} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
