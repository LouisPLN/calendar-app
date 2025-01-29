const calendarHeight = 2400;
const startOfDay = 9 * 60;
const endOfDay = 21 * 60;
const minutesPerPixel = calendarHeight / (endOfDay - startOfDay);

export const calculatePosition = (start: string): number => {
  const [hours, minutes] = start.split(":").map((str) => parseInt(str));
  const totalMinutes = (hours - 9) * 60 + minutes;
  return totalMinutes * minutesPerPixel;
};

export const calculateHeight = (duration: number): number => {
  return duration * minutesPerPixel;
};
