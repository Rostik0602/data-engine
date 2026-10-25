import { Fragment } from "react";
import Section from "../Section/Section";
import diamondIcon from "../../assets/icons/event-diamond.svg";
import styles from "./EventsCard.module.scss";

interface EventItem {
  text: string;
  time: string;
}

const events: EventItem[] = [
  {
    text: 'Search: "electrician Bratislava Petržalka" → 8 results',
    time: "14:32",
  },
  {
    text: "Instant Book: Marek Novak → Jozef Mrazik (electrician, €95)",
    time: "14:31",
  },
  {
    text: "Al Match: Query #1003 analyzed → 3 candidates found in 1.2s",
    time: "14:28",
  },
  {
    text: 'Smart Pricing: Calculation for "plumber Košice" → €85 (standard, common)',
    time: "14:25",
  },
  {
    text: 'Search: "washing machine repair Bratislava" → 6 results',
    time: "14:22",
  },
  { text: "Review: 4.5 Andrej Novotny → Jozef Mrazik", time: "14:18" },
  {
    text: "Instant Book: Jana Kováčová → Anna Hrušková (cleaning, €55)",
    time: "14:15",
  },
  {
    text: 'Smart Pricing: Urgent calculation "BA plumber" → €131 (standard +25% urgent)',
    time: "14:12",
  },
];

function EventsCard() {
  return (
    <Section
      title="Recent events — Data Pipeline"
      subtitle="Last captured interactions across the marketplace."
    >
      <div className={styles.card}>
        {events.map((event, index) => (
          <Fragment key={event.time}>
            {index > 0 && <div className={styles.divider} />}
            <div className={styles.row}>
              <img className={styles.icon} src={diamondIcon} alt="" />
              <div className={styles.text}>
                <p className={styles.title}>{event.text}</p>
                <p className={styles.time}>{event.time}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}

export default EventsCard;
