import EventsList from "../components/EventsList";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}
