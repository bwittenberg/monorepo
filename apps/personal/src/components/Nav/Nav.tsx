import { Link } from "react-router-dom";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  ShadowInnerIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  IconButton,
  Select,
  Popover,
  Flex,
  Box,
  Link as RadixLink,
} from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { ComponentProps, PropsWithChildren } from "react";

const variant = "ghost";

const resolvedThemeIcon = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: <ShadowInnerIcon />,
};

const CenteredLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Flex asChild align="center">
      <RadixLink asChild>
        <Link {...props} />
      </RadixLink>
    </Flex>
  );
};

export const Nav = () => {
  const { theme: rs = "light", setTheme } = useTheme();
  const theme = rs as "light" | "dark" | "system";

  return (
    <Flex gap="1">
      <RadixLink asChild weight="bold">
        <Link to="/">bwittenberg</Link>
      </RadixLink>
      <Flex flexGrow="1" justify="end" gap="3" align="center">
        <CenteredLink to="https://github.com/bwittenberg/">
          <GitHubLogoIcon />
        </CenteredLink>
        <CenteredLink to="https://www.linkedin.com/in/benjamin-wittenberg/">
          <LinkedInLogoIcon />
        </CenteredLink>
        <Select.Root
          value={theme}
          onValueChange={(value) => setTheme(value)}
          size="1"
        >
          <Select.Trigger variant="ghost">
            <Flex>{theme ? resolvedThemeIcon[theme] : null}</Flex>
          </Select.Trigger>
          <Select.Content position="popper" variant="soft">
            <Select.Item value="light">Light</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="system">System</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
    </Flex>
  );
};
