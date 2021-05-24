import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/EventsList";

export default function AlleventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
