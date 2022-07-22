import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>Profile</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            blanditiis accusantium assumenda enim cumque. Sit perspiciatis
            culpa, consequuntur explicabo perferendis dolorum saepe nemo
            temporibus provident expedita, quis incidunt animi enim.
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
