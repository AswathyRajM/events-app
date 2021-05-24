import { useRouter } from "next/router";

export default function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No events found!</p>;
  }
  return (
    <div>
      <h1>Event details</h1>
    </div>
  );
}
