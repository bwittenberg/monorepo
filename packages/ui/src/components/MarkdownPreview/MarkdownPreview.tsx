import { marked } from "marked";

type Props = {
  markdownString: string;
};

export const MarkdownPreview = ({ markdownString }: Props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: marked.parse(markdownString) }} />
  );
};
