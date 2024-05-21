import { ReadingWidthLayout } from "../../components/ReadingWidthLayout/ReadingWidthLayout";
import { Footer } from "../../components/Footer";
import { Link } from "../../components/Footer/Link";
import { Posts } from "../../components/Posts";

export const Home = () => {
  return (
    <ReadingWidthLayout>
      <h1>Ben Wittenberg</h1>
      <p>👋 Hello World.</p>
      <Posts />
      <Footer>
        <Link href="https://github.com/bwittenberg/">GitHub</Link>
        <Link href="https://www.linkedin.com/in/benjamin-wittenberg/">
          LinkedIn
        </Link>
      </Footer>
    </ReadingWidthLayout>
  );
};
