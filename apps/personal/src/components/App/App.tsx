import { styles } from "./App.css";
import { ReadingWidthLayout } from "../ReadingWidthLayout/ReadingWidthLayout";
import { Footer } from "../Footer";
import { Link } from "../Footer/Link";

export const App = () => {
  return (
    <div className={styles}>
      <ReadingWidthLayout>
        <h1>Ben Wittenberg</h1>
        <p>👋 Hello World.</p>
        <Footer>
          <Link href="https://github.com/bwittenberg/">GitHub</Link>
          <Link href="https://www.linkedin.com/in/benjamin-wittenberg/">
            LinkedIn
          </Link>
        </Footer>
      </ReadingWidthLayout>
    </div>
  );
};
