import React, { useEffect, useState } from "react";
import { fetchEventsData, Event } from "../Api/eventsApi.ts";
import { processEvents } from "../Utils/timeUtils.ts";
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
    <div className="groupedEvents-wrapper">
      {Object.entries(groupedEvents).map(([groupId, group]) => (
        <div key={groupId} className="groupedEvents">
          {group.map((event) => (
            <div
              key={event.id}
              className="event-wrapper"
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
