import { MarkdownPreview } from "@bwittenberg/ui";
import { Flex } from "@radix-ui/themes";
import homeMarkdown from "./home.md?raw";

export const Home = () => {
  return (
    <Flex direction="column" gap="3">
      <MarkdownPreview markdownString={homeMarkdown} />
    </Flex>
  );
};
