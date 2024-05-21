import { Home } from "../../pages/Home";
import { styles } from "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

export const App = () => {
  return (
    <div className={styles}>
      <RouterProvider router={router} />
    </div>
  );
};
