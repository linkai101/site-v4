"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ node, inline, className, children, ...props }:any) {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/, '')}
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  );
}
