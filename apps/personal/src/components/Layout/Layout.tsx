import { Outlet } from "react-router-dom";
import { Nav } from "components/Nav";
import { Grid, Container } from "@radix-ui/themes";

export const Layout = () => {
  return (
    <Container size="2">
      <Grid columns="1" gap="3" width="auto">
        <Nav />
        <Outlet />
      </Grid>
    </Container>
  );
};
