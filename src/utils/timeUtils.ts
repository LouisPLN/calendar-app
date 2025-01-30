const calendarHeight = 2400;
const startOfDay = 9 * 60;
const endOfDay = 21 * 60;
const minutesPerPixel = calendarHeight / (endOfDay - startOfDay);

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
  return hours * 60 + minutes;
};

export const calculatePosition = (start: string): number => {
  return (timeToMinutes(start) - startOfDay) * minutesPerPixel;
};

export const calculateHeight = (duration: number): number => {
  return duration * minutesPerPixel;
};

export interface EventType {
  groupId: number;
  id: number;
  start: string;
  duration: number;
  width?: string;
}

// Grouper les événements qui se chevauchent
export const processEvents = (events: EventType[]): EventType[] => {
  events.sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

  let groupId = 0;
  const processedEvents: EventType[] = [];
  let currentGroup: EventType[] = [];
  let lastEventEndTime: number | null = null;

  events.forEach((event) => {
    const eventStartTime = timeToMinutes(event.start);
    const eventEndTime = eventStartTime + event.duration;

    if (lastEventEndTime !== null && eventStartTime >= lastEventEndTime) {
      // Nouveau groupe
      const width = `${100 / currentGroup.length}%`;
      currentGroup.forEach((e) => (e.width = width));
      processedEvents.push(...currentGroup);
      currentGroup = [];
      groupId++;
    }

    event.groupId = groupId;
    currentGroup.push(event);
    lastEventEndTime = lastEventEndTime
      ? Math.max(lastEventEndTime, eventEndTime)
      : eventEndTime;
  });

  if (currentGroup.length > 0) {
    const width = `${100 / currentGroup.length}%`;
    currentGroup.forEach((e) => (e.width = width));
    processedEvents.push(...currentGroup);
  }

  return processedEvents;
};
