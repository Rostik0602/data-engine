import Section from "../Section/Section";
import chartImage from "../../assets/locations-chart.svg";
import styles from "./LocationsCard.module.scss";

interface City {
  name: string;
  percent: number;
  orders: number;
  color: string;
}

const cities: City[] = [
  { name: "Bratislava", percent: 42, orders: 47, color: "#c4b4ff" },
  { name: "Kosice", percent: 18, orders: 38, color: "#ffa1ad" },
  { name: "Zilina", percent: 12, orders: 29, color: "#ffd230" },
  { name: "Trnava", percent: 9, orders: 22, color: "#7bf1a8" },
  { name: "Nitra", percent: 8, orders: 18, color: "#74d4ff" },
  { name: "Banska Bystrica", percent: 6, orders: 14, color: "#617eff" },
  { name: "Other", percent: 5, orders: 12, color: "#d580ff" },
];

const totalOrders = cities.reduce((sum, city) => sum + city.orders, 0);

function LocationsCard() {
  return (
    <Section
      title="Top locations"
      subtitle="Service demand by city and district."
    >
      <div className={styles.card}>
        <div className={styles.chart}>
          <img src={chartImage} alt="" />
          <div className={styles.total}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>{totalOrders}</span>
          </div>
        </div>
        <div className={styles.divider} />
        <ul className={styles.legend}>
          {cities.map((city) => (
            <li key={city.name} className={styles.legendRow}>
              <div className={styles.cityInfo}>
                <span
                  className={styles.marker}
                  style={{ backgroundColor: city.color }}
                />
                <span className={styles.cityName}>{city.name}</span>
              </div>
              <div className={styles.cityStats}>
                <span className={styles.percent}>{city.percent}%</span>
                <span className={styles.orders}>{city.orders} orders</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default LocationsCard;
