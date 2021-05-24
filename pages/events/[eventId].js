import { useRouter } from "next/router";
import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById } from "../../dummy-data.js";
import ErrorAlert from "../../ui/error-alert";
import Button from "../../ui/Button";

export default function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No events found!</p>
        <Button link="/events">Go Back</Button>
      </ErrorAlert>
    );
  }
  return (
    <React.Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </React.Fragment>
  );
}
