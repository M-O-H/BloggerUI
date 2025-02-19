import React from 'react';
import { remark } from 'remark';
import html from 'rehype-stringify';

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  const processedMarkdown = remark()
    .use(html)
    .processSync(markdown);

  return <div dangerouslySetInnerHTML={{ __html: processedMarkdown.toString() }} />;
};

export default MarkdownRenderer;
