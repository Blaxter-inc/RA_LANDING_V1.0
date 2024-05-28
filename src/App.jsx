import styles from "./style";

import {
  NavBar,
  Main,
  Benefits,
  Mission,
  Vision,
  Mentions,
  CTA,
  Footer,
} from "./components";
import Stats from "./components/Stats";

const App = () => (
  <div className={`bg-primary w-full overflow-hidden ${styles.flexColumn}`}>
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <NavBar />
      </div>
    </div>

    {/* Main Content */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Main />
      </div>
    </div>

    {/* Additional Sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Stats />
        <Benefits />
        <Mission />
        <Vision />
        <Mentions />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

// export default
export default App;
