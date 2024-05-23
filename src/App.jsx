import React from "react";
import styles from "./style";

import {
  NavBar,
  Main,
  Motivations,
  Benefits,
  Mentions,
  Footer,
} from "./components";

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
        <Motivations />
        <Benefits />
        <Mentions />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
