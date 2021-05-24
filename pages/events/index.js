import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/EventsList";
import EventsSearch from "../../pages/events/EventsSearch";

export default function AlleventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  function eventsHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }
  return (
    <React.Fragment>
      <EventsSearch eventSearch={eventsHandler} />
      <EventList events={events} />
    </React.Fragment>
  );
}
