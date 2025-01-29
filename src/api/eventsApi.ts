export type Event = {
  id: number;
  start: string;
  duration: number;
};

export const fetchEventsData = async (): Promise<Event[]> => {
  try {
    const response = await fetch("/data/input.json");

    if (!response.ok) throw new Error("Erreur de chargement des événements");

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des événements :", error);
    return [];
  }
};
