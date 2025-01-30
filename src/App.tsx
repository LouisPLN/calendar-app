import React from "react";
import Calendar from "./Components/Calendar.tsx";
import Timeline from "./Components/Timeline.tsx";

function App() {
  return (
    <main className="calendar-wrapper">
      <Timeline />
      <Calendar />
    </main>
  );
}

export default App;
