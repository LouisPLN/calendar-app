import React, { useEffect, useState } from "react";
import { fetchEventsData, Event } from "../api/eventsApi.ts";
import "../styles/event.css";

const EventComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEventsData().then(setEvents);
  }, []);

  return (
    <div>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              event {event.id} : commence à {event.start} et dure {event.duration} min
            </li>
          ))}
        </ul>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default EventComponent;
