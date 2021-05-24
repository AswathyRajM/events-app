import React from 'react'
import Link from 'next/link'
import classes from './events.module.css'

export default function EventItem(props) {
  const { title, date, location, id, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  console.log(props);
  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`
  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li >
  )
}
