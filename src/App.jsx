import styles from "./style";

const App = () => (
  // Navbar
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Hero</div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>stats
      Business 
      Billing
      CardDeal
      Testimonials
      clients
      CTA
      Footer
      </div>
    </div>
  </div>
);

export default App;
