import { Fragment } from "react";
import Section from "../Section/Section";
import cleaningIcon from "../../assets/icons/category-cleaning.svg";
import hourlyHusbandIcon from "../../assets/icons/category-hourly-husband.svg";
import plumberIcon from "../../assets/icons/category-plumber.svg";
import electricianIcon from "../../assets/icons/category-electrician.svg";
import appliancesIcon from "../../assets/icons/category-appliances.svg";
import styles from "./CategoriesCard.module.scss";

const categories = [
  {
    name: "Cleaning",
    searches: "142 searches today",
    change: "+18%",
    icon: cleaningIcon,
  },
  {
    name: "Hourly husband",
    searches: "118 searches today",
    change: "+32%",
    icon: hourlyHusbandIcon,
  },
  {
    name: "Plumber",
    searches: "98 searches today",
    change: "+12%",
    icon: plumberIcon,
  },
  {
    name: "Electrician",
    searches: "87 searches today",
    change: "+15%",
    icon: electricianIcon,
  },
  {
    name: "Appliances",
    searches: "64 searches today",
    change: "+28%",
    icon: appliancesIcon,
  },
];

function CategoriesCard() {
  return (
    <Section
      title="Top searched categories"
      subtitle="Most popular service categories by search volume."
    >
      <div className={styles.card}>
        {categories.map((category, index) => (
          <Fragment key={category.name}>
            {index > 0 && <div className={styles.divider} />}
            <div className={styles.row}>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <img src={category.icon} alt="" />
                </div>
                <div className={styles.text}>
                  <p className={styles.name}>{category.name}</p>
                  <p className={styles.searches}>{category.searches}</p>
                </div>
              </div>
              <p className={styles.change}>{category.change}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}

export default CategoriesCard;
