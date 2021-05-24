import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/EventsList";
import React from "react";
import ResultsTitle from "../events/results-title";
import Button from "../../ui/Button";
import ErrorAlert from "../../ui/error-alert";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.filter;
  if (!filteredData) {
    return <p className="center">Loading..</p>;
  }
  const filteredyear = filteredData[0];
  const filteredmonth = filteredData[1];
  const year = +filteredyear; //converting to number
  const month = +filteredmonth; //converting to number

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <React.Fragment>
        <ErrorAlert>
          <p>Invalid Filter</p>
          <div className="center">
            <Button link="/events">All Events</Button>
          </div>
        </ErrorAlert>
      </React.Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <React.Fragment>
        <ErrorAlert>
          <p>No events found</p>
          <div className="center">
            <Button link="/events">All Events</Button>
          </div>
        </ErrorAlert>
      </React.Fragment>
    );
  }
  const date = new Date(year, month - 1);
  return (
    <React.Fragment>
      <ResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </React.Fragment>
  );
}
