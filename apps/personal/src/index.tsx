import { createRoot } from "react-dom/client";
import { Layout } from "./components/Layout";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "pages/Home";
import { loader as postLoader, Post } from "pages/Posts";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>404</>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts/:postId", element: <Post />, loader: postLoader as any },
    ],
  },
]);

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <StrictMode>
      <ThemeProvider attribute="class">
        <Theme accentColor="gray" grayColor="slate">
          <RouterProvider router={router} />
        </Theme>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}
