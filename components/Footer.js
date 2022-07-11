import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="https://www.chicagoparksfoundation.org/">
              Chicago Parks Foundation
            </a>
          </li>

          <li>
            <a href="https://www.chicagoparksfoundation.org/marathon">
              ChiParks Marathon team
            </a>
          </li>

          <li>
            <a href="https://www.chicagoparksfoundation.org/volunteering">
              Volunteer with the Chicago Parks Foundation
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
